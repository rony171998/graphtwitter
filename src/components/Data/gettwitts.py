import tweepy
import json



def get_tweets():
    auth = get_auth()
    api = tweepy.API(auth)
    tweets = api.user_timeline(screen_name='@realDonaldTrump', count=100, include_rts=False, tweet_mode='extended')
    return tweets

def get_auth():
    consumer_key = 'PFOVKIzSACKYXIhaCPok8CkVk'
    consumer_secret = '1Cr2TZsOM6Q29geiJM5xct4bjbgkciWmyFfNRmN1nXDkKIx8cp'
    access_token = '1438971642311499780-S88X9GShqSG8t0yz1d8q72YAXIGbAL'
    access_token_secret = 'IQ6BwO8CWU0OISQCvGkMZpvzfbFllFPhaY8D9buqBlUGE'
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token , access_token_secret)
    return auth

api = tweepy.API(get_auth())

list_tweets = api.search_tweets(q='python',result_type="mixed", count=100)
list_tweets_json = []

for tweet in list_tweets:
    list_tweets_json.append(tweet._json)

with open('tweets.json', 'w') as file:
    json.dump(list_tweets_json, file, indent=4)

