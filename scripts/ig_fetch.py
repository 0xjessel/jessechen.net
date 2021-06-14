from urllib.request import urlopen
import json
import cloudinary.api
import cloudinary.uploader
import time
import traceback
from dotenv import dotenv_values

config = dotenv_values(".env.local")

IG_ACCESS_TOKEN = config['IG_ACCESS_TOKEN']
IG_USER_ID = config['IG_USER_ID']

CLOUDINARY_CLOUD_NAME = config['CLOUDINARY_CLOUD_NAME']
CLOUDINARY_API_KEY = config['CLOUDINARY_API_KEY']
CLOUDINARY_API_SECRET = config['CLOUDINARY_API_SECRET']

try:
  cloudinary.config(
    cloud_name=CLOUDINARY_CLOUD_NAME,
    api_key=CLOUDINARY_API_KEY,
    api_secret=CLOUDINARY_API_SECRET
  )

  print('cloudinary configured..')

  result = cloudinary.Search()\
    .expression('folder:instagram/*')\
    .with_field('context')\
    .execute()

  existing_ids = []
  incoming_ids = []
  for resource in result['resources']:
    existing_ids.append(resource['context']['id'])

  print('previous IG photos fetched..')

  contents = urlopen('https://graph.instagram.com/{user_id}/media?fields=media_type%2Cmedia_url%2Cpermalink%2Cthumbnail_url&limit=9&access_token={access_token}'
    .format(user_id=IG_USER_ID, access_token=IG_ACCESS_TOKEN)).read()

  print('received IG Graph API response..')

  medias = json.loads(contents)['data']
  for media in medias:
    incoming_ids.append(media['id'])

  to_delete = list(set(existing_ids) - set(incoming_ids))
  to_upload = list(set(incoming_ids) - set(existing_ids))

  print('found {num} old photos to delete..'.format(num=len(to_delete)))
  print('found {num} new photos to upload..'.format(num=len(to_upload)))

  # delete old photos
  for resource in result['resources']:
    if resource['context']['id'] not in to_delete:
      continue

    public_id = resource['public_id']
    cloudinary.uploader.destroy(public_id)

    print('deleted {id}..'.format(id=public_id))

    time.sleep(3)

  # upload new photos
  for media in medias:
    media_id = media['id']

    if media_id not in to_upload:
      continue

    media_url = media['media_url']
    media_type = media['media_type']
    media_permalink = media['permalink']

    cloudinary.uploader.upload(
      media_url,
      folder='instagram',
      context='id={id}|media_permalink={media_permalink}|media_type={media_type}|media_url={media_url}'
        .format(id=media_id, media_permalink=media_permalink, media_type=media_type, media_url=media_url)
    )

    print('uploaded {id}..'.format(id=media_id))

    time.sleep(3)

  print('done!')
except Exception as e:
  print('an error occurred :(')
  traceback.print_exc()
