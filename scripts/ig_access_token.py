from urllib.request import urlopen
from urllib.error import URLError, HTTPError

IG_ACCESS_TOKEN = 'IGQVJYX3BRYS0wWGZAXbDNXaDlWbVJzeElWNU5Mdm9DZAkRyY1RGbW9NQlBBWXJVZAXhOTFFDRkFRMVB0LUF3ZAXc1QjR4b1ZAqaFNSeE92bnEwLXhUUXZAST3VRbFZAObEJHdHhBWFVDMW5Ub19zNHdCaExTZAgZDZD'

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
