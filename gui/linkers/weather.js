let {PythonShell} = require('python-shell')
const fs = require('fs');
var path = require("path")


function get_weather() {

  var city = document.getElementById("city").value
  var jsonData = {
    "modelLib" : "keras",
    "layers" : {
        "conv2D": {
            "init": true,
            "input_shape": (224,224,3),
            "filters" : 64,
            "kernel_size": (3,3),
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
  };
  var jsonContent = JSON.stringify(jsonData);
  saveJson(jsonContent)
  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : [city, jsonData]
  }

  let pyshell = new PythonShell('weather_engine.py', options);


  pyshell.on('message', function(message) {
    swal(message);
  })
  document.getElementById("city").value = "";
}

function saveJson(jsonData){
  fs.writeFile("output.json", jsonData, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});
}
