# coding: utf-8

# #Step 1: Import Libraries
# 
# 
# 

# In[ ]:


import io
import pickle
# from prettytable import PrettyTable
# from astropy.table import Table, Column
import warnings

import numpy as np
import pandas as pd
from sklearn import model_selection
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import *
from sklearn.model_selection import cross_val_score
from sklearn.naive_bayes import BernoulliNB
from sklearn.svm import LinearSVC

warnings.filterwarnings("ignore")



def process_comment(input):
    # #Step 9: Application Phase - Make prediction on unseen/new data
    classifier = pickle.load(open('logistic_regression.pkl', 'rb'))

    user_input = str(input).strip()

    word_vectorizer_load = pickle.load(
        open("tfidf_word_vectorizer.pickle", "rb"))
    data = [user_input]
    transformed_input = word_vectorizer_load.transform(data)
    pred = classifier.predict(transformed_input)

    print("\n\nPrediction: ", end='')
    pred = classifier.predict(transformed_input)
    if (pred == 1):
        print("Toxic")

    if (pred == 0):
        print("Non-Toxic")

    return pred
