let weather = {
    apiKey: '7b6419a4f4377f8162c8b38f77ba7bba',
    fetchWeather: function (city) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7b6419a4f4377f8162c8b38f77ba7bba`
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => {
        this.displayWeather(data);
        this.updateCardBackground(data.weather[0].description);
        });
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png"; 
      document.querySelector(".description").innerText = description;
      console.log("Weather description:", description);
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    updateCardBackground: function (description) {
        const card = document.querySelector('.card');
    
        if (description.includes('rain') || description.includes('drizzle') || description.includes('shower rain')|| description.includes('light intensity shower rain')) {
          card.classList.add('rainy');
          // Additional code or actions specific to rainy weather
          console.log("It's rainy!");
        } else if (description.includes('thunderstorm')) {
          card.classList.add('stormy');
          // Additional code or actions specific to stormy weather
          console.log("It's stormy!");
        } else if (description.includes('clear sky') || description.includes('few clouds') || description.includes('scattered clouds')) {
          card.classList.add('sunny');
          // Additional code or actions specific to sunny weather
          console.log("It's sunny!");
        } else if (description.includes('snowy')) {
          card.classList.add('snowy');
          // Additional code or actions specific to snowy weather
          console.log("It's snowy!");
        } else if (description.includes('windy')) {
          card.classList.add('windy');
          // Additional code or actions specific to windy weather
          console.log("It's windy!");
        } else if (description.includes('overcast clouds')) {
          card.classList.add('cloudy');
          console.log("It's cloudy");
        } else {
          // Code or actions for other weather conditions
          console.log("Weather condition not recognized.");
        }
    }
  };

//   function updateCardBackground(description) {
//     document.querySelector(".description").innerText = description;
//     const card = document.querySelector('.card');
    
//     if (description.includes('rain') || description.includes('drizzle') || description.includes('shower rain')) {
//       card.classList.add('rainy');
//       // Additional code or actions specific to rainy weather
//       console.log("It's rainy!");
//       // ...
//     } else if (description.includes('thunderstorm')) {
//       card.classList.add('stormy');
//       // Additional code or actions specific to stormy weather
//       console.log("It's stormy!");
//       // ...
//     } else if (description.includes('clear sky') || description.includes('few clouds') || description.includes('scattered clouds')) {
//       card.classList.add('sunny');
//       // Additional code or actions specific to sunny weather
//       console.log("It's sunny!");
//       // ...
//     } else if (description.includes('snowy')) {
//       card.classList.add('snowy');
//       // Additional code or actions specific to snowy weather
//       console.log("It's snowy!");
//       // ...
//     } else if (description.includes('windy')) {
//       card.classList.add('windy');
//       // Additional code or actions specific to windy weather
//       console.log("It's windy!");
//       // ...
//     } else if (description.includes('overcast clouds')) {
//         card.classList.add('cloudy');
//         console.log("its cloudy");
//     }else {
//       // Code or actions for other weather conditions
//       console.log("Weather condition not recognized.");
//     }
//   }
  
  function search() {
    weather.fetchWeather(document.querySelector(".search-bar").value);

  }
  
  document.querySelector(".search button").addEventListener("click", function () {
    search();
    
  });
  
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      search();
    }
  });
  
  weather.fetchWeather("Japan");
// Weather forecast
