/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/

 document.getElementById("t1-msg").innerHTML = "Hello, World!";

/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/
const btn = document.getElementById("t2-btn");
 btn.addEventListener("click", function () {
    document.getElementById("t2-status").innerHTML = "You clicked the button!";
});

/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/

const quoteBtn = document.getElementById("t3-loadQuote")

quoteBtn.addEventListener("click", function(){
fetch("https://dummyjson.com/quotes/random")
  .then(function (response) {
    if (!response.ok) {                 
      throw new Error("HTTP " + response.status);
    }
    return response.json();             
  })
  .then(function (data) {
    document.getElementById("t3-quote").innerHTML = data.quote;
    document.getElementById("t3-author").innerHTML = data.author;
  })
  .catch(function (err) {
    console.log("Error!");
  });
});
 

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/
const weatherBtn = document.getElementById("t4-loadWx")

weatherBtn.addEventListener("click", function(){
    const base  = "https://api.openweathermap.org/data/2.5/weather?q=";
    const city  = "Dammam";
    const units = "metric";
    const key   = "c4661f5b3a408d75202e4cce73a354cb";  

   const url = `${base}${encodeURIComponent(city)}&appid=${key}&units=${units}`;
    fetch(url)
  .then(function (response) {
    if (!response.ok) {                 
      throw new Error("HTTP " + response.status);
    }
    return response.json();             
  })
  .then(function (data) {
    document.getElementById("t4-temp").innerHTML = data.main.temp + " °C";
    document.getElementById("t4-hum").innerHTML = data.main.humidity + " %";
    document.getElementById("t4-wind").innerHTML = data.wind.speed + " m/s";
  })
  .catch(function (err) {
    console.log("Error!");
  });
})
