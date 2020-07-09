import keras,os
from keras.models import Sequential
from keras.layers import Dense, Conv2D, MaxPool2D , Flatten
from keras.preprocessing.image import ImageDataGenerator
from keras.optimizers import Adam
import numpy as np

model = Sequential()

def conv2D(model, params):
    if params["init"]:
        model.add(Conv2D(input_shape=(224,224,3),filters=params["filters"],kernel_size=params["kernel_size"],padding=params["padding"], activation=params["activation"]))
    else:
        model.add(Conv2D(filters=params["filters"],kernel_size=params["kernel_size"],padding=params["padding"], activation=params["activation"]))
    return model
def maxPool(model, pool_size=(2,2), strides=(2,2)):
    model.add(MaxPool2D(pool_size=pool_size,strides=strides))
    return model
def flatten(model):
    model.add(Flatten())
    return model
def dense(model, units, activation="relu"):
    model.add(Dense(units=units,activation=activation))
    return model
def compile(model,params):
    opt = Adam(lr=params["learningRate"])
    model.compile(optimizer=opt, loss=params["loss"], metrics=['accuracy'])
    return model