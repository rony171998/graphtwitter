import tweepy
import json


def get_tweets_user():
    auth = get_auth()
    api = tweepy.API(auth)
    tweets = api.user_timeline(
        screen_name=(json.load(open("search.json"))["userName"]),
        count=(json.load(open("search.json"))["count"]),
    )
    return tweets


def get_tweets():
    auth = get_auth()
    api = tweepy.API(auth)
    tweets = api.search_tweets(
        q=(json.load(open("search.json"))["search"]),
        count=(json.load(open("search.json"))["count"]),
        lang=(json.load(open("search.json"))["lang"]),
        result_type=(json.load(open("search.json"))["result_type"]),
    )
    return tweets


def get_auth():
    consumer_key = 'HMQ3dB2xY4s9wh49kTn9bB36g'
    consumer_secret = 'BTchzqGdJTNgIQXCzF4OymiPohdmi5Id3jOXE6qayfyqYATrLc'
    access_token = '1438971642311499780-JkhaVZ6x9P0UgaABltc6hXZbSmMSMq'
    access_token_secret = 'I1W89gJWMMRRGpbzqKQdgF4i8HLzxtoq7Uava7sJCSVVG'
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    return auth


def set_tweets_to_json():
    if (json.load(open("search.json"))["typeSearch"] == 'user'):
        tweets = get_tweets_user()
    else:
        tweets = get_tweets()
    data = []
    for tweet in tweets:
        data.append(tweet._json)
    with open('tweets.json', 'w') as file:
        json.dump(data, file, indent=4)


set_tweets_to_json()
# cd src/components/Data/
# python gettwitts.py
