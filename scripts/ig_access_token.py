from urllib.request import urlopen
from urllib.error import URLError, HTTPError
from dotenv import dotenv_values

config = dotenv_values("../.env.local")

IG_ACCESS_TOKEN = config['IG_ACCESS_TOKEN']

try:
  result = urlopen('https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={access_token}'.format(access_token=IG_ACCESS_TOKEN)).read()
except HTTPError as e:
  print('Error code: ', e.code)
except URLError as e:
  print('Reason: ', e.reason)
else:
  print('IG access token renewed!')
  print('\n === RESPONSE === \n')
  print(result)
