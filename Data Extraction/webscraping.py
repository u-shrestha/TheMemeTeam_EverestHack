#! python3
import inspect
import praw
import pandas as pd
import datetime as dt

reddit = praw.Reddit(client_id='K0MvgY52tRivJQ', \
                     client_secret='WM-jeFwR9AMb3RA2d9aY6jI3ln4', \
                     user_agent='apiforvisualization', \
                     username='dipti__', \
                     password='FxFECFX3jDuG4yw')

# print(inspect.getmembers(reddit))
subreddit = reddit.subreddit('dankmemes')

# print(subreddit)

top_subreddit = subreddit.top(limit=500)

# print(top_subreddit)

# for submission in subreddit.top(limit=1):
#     print(submission.title, submission.id)
topics_dict = { "title":[], 
                "score":[], 
                "id":[], "url":[], 
                "comms_num": [], 
                "created": [], 
                "body":[],
                "author":[]}
for submission in top_subreddit:
    topics_dict["title"].append(submission.title)
    topics_dict["score"].append(submission.score)
    topics_dict["id"].append(submission.id)
    topics_dict["url"].append(submission.url)
    topics_dict["comms_num"].append(submission.num_comments)
    topics_dict["created"].append(submission.created)
    topics_dict["body"].append(submission.selftext)
    topics_dict["body"].append(submission.selftext)


