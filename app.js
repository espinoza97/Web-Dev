const express = require("express");
const https = require("https");//is the native for a get request
const bodyParser = require("body-parser");//is a package that is used to fetch data from body
const app = express();

app.use(bodyParser.urlencoded({extended:true}));//the sintax

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  //console.log(req.body.cityName);//we make a request in body for input with name cityName
  const query = req.body.cityName;
  const apiKey = "d56a3bb2dcf12fa3615b9f75d1514f98";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data",function(data){//on is a method where we can request data.
      //console.log(data);
      const weatherData = JSON.parse(data);//it will turn JS objects
      const temp = weatherData.main.temp;//it return the temp that is inside main object that is inside the whole format
      const description = weatherData.weather[0].description;
      const icon =  weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      //console.log(temp);
      //console.log(description);
      res.write("<p>The weather is currently "+ description +"</p>");//is used to return html lines
      res.write("<h1>The temperature in " + query + " is " + temp + " degrees celcius.</h1>");
      res.write("<img src="+ imageUrl +">");
      res.send();
    });
  });
});




app.listen(3000,function(){
  console.log("Server running on port 3000");
});
