import requests
from bs4 import BeautifulSoup as bs
import sys
import json

city = sys.argv[1]
jsonData = sys.argv[2]
print(jsonData)

def get_weather(place):
    place = place.replace(" ", "-")
    url = "https://www.weather-forecast.com/locations/" + place + "/forecasts/latest"
    r = requests.get(url)
    soup = bs(r.content, "lxml")
    weather = soup.findAll("span", {"class": "phrase"})[0].text
    return weather

def createJson():
    jsonData = {
        "modelLib" : "keras",
        "layers" : {
            "conv2D": {
                "init": true,
                "input_shape": (224,224,3),
                "filters" : 64,
                "kernelSize": (3,3),
                "padding" : "same",
                "activation" : "relu"
            }
        },
        "compile": {
            "learningRate": 0.001,
            "loss" : "keras.losses.categorical_crossentropy",
            "momentum" : 0.9,
            "optimizer": "Adam"
        }
    }
#print(jsonData["modelLib"])
print(get_weather(city))
sys.stdout.flush()
