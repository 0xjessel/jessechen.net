from urllib.request import urlopen
import json
import cloudinary.api
import cloudinary.uploader
import time

IG_ACCESS_TOKEN = 'IGQVJYX3BRYS0wWGZAXbDNXaDlWbVJzeElWNU5Mdm9DZAkRyY1RGbW9NQlBBWXJVZAXhOTFFDRkFRMVB0LUF3ZAXc1QjR4b1ZAqaFNSeE92bnEwLXhUUXZAST3VRbFZAObEJHdHhBWFVDMW5Ub19zNHdCaExTZAgZDZD'
IG_USER_ID = '17841401609650232'

try:
  cloudinary.config(
    cloud_name = 'jessel',
    api_key = '673492531519811',
    api_secret = 'QOMiILgeXR6ezmSeZ0W-Gf4Lk-w'
  )

  print('cloudinary configured..')

  cloudinary.api.delete_resources_by_prefix('instagram')

  print('previous IG photos deleted..')

  contents = urlopen('https://graph.instagram.com/{user_id}/media?fields=media_type%2Cmedia_url%2Cpermalink%2Cthumbnail_url&limit=9&access_token={access_token}'.format(user_id=IG_USER_ID, access_token=IG_ACCESS_TOKEN))IGQVJYX3BRYS0wWGZAXbDNXaDlWbVJzeElWNU5Mdm9DZAkRyY1RGbW9NQlBBWXJVZAXhOTFFDRkFRMVB0LUF3ZAXc1QjR4b1ZAqaFNSeE92bnEwLXhUUXZAST3VRbFZAObEJHdHhBWFVDMW5Ub19zNHdCaExTZAgZDZD.read()

  print('received IG Graph API response..')

  medias = json.loads(contents)['data']

  count = 1
  for media in medias:
    media_url = media['media_url']

    id = media['id']
    media_type = media['media_type']
    media_permalink = media['permalink']

    cloudinary.uploader.upload(
      media_url,
      folder = 'instagram',
      context = 'id={id}|media_permalink={media_permalink}|media_type={media_type}|media_url={media_url}'
        .format(id=id, media_permalink=media_permalink, media_type=media_type, media_url=media_url)
    )

    print('uploaded {id} ({count}/9)..'.format(id=id, count=count))

    time.sleep(5)
    count += 1

  print('Done!')
except Exception as e:
  print('an error occurred :(')
  traceback.print_exc()

