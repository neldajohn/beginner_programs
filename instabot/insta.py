'''
Name: Nelda
Program: Instagram Bot
'''

#import
import random
from instabot import Bot

#name bot
bot = Bot()

#set username and password
username = 'bibidi_ilo'
password = 'xxxxx'

#login
bot.login(username = username, password = password)

#post photo
images = [["cat.jpg", "Bots can have cats too hehe xx"],
["dog.jpg", "Dogs are bots' bestfriends too hihi oo"]]

num = random.randint(0,1)

bot.upload_photo(images[num][0], caption = images[num][1])


#americans
random_users = ["enews", "selenagomez", "snoopdogg", 
"ladygaga", "gigihadid", "badgalriri", "blakelively", "naomi",
"justinbieber", "shawnmendes", "zayn", "zacefron"]

#koreans
k_stars = ["j.m", "yawnzzn", "jin", "uarmyhope", "rkive",
"eunwoo.o_c", "jennierubyjane", "imhyoseop",
 "agustd", "ldh_sky", "mingue.k", "actorleeminho"]


#pick a random person from each list
user1 = random.randint(0, len(random_users)-1)
user2 = random.randint(0, len(k_stars)-1)

print("\t\t This is the person I picked: ", str(random_users[user1]))
print("\t\t This is the person I picked: ", str(k_stars[user2]))


#follow the two users
bot.follow(random_users[user1])
bot.follow(k_stars[user2])


#message users
users = [random_users[user1], k_stars[user2]]
message = "Hello. I like your work. :) I am a bot"
bot.send_message(message, users)


