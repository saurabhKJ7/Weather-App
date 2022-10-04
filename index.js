// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
const apikey = "f6488089b214c3dbf4a48f604ac1baac";

async function getData2(lat,lon) {
  getLocationWeather()
  let city = document.getElementById("city").value;
  //destination
  //let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`

  let res = await fetch(url);

  let data = await res.json();
  append(data);

  console.log(data);
}
//1-append he data to dom
async function getData() {
  let city = document.getElementById("city").value;
  //destination
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  // let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`

  let res = await fetch(url);

  let data = await res.json();
  append(data);
}

function append(data) {
  let tem = document.getElementById("temp");
  temp.innerText = "";
  let h2 = document.createElement("h2");
  h2.innerText = data.name;

  let p = document.createElement("p");
  p.innerText = `Current-temp: ${Math.floor(data.main.temp) - 273}°C`;

  let p2 = document.createElement("p");
  p2.innerText = `Max-temp: ${Math.floor(data.main.temp_max)-273}°C`;

  let p3 = document.createElement("p");
  p3.innerText = `Min-temp: ${Math.floor(data.main.temp_min)-273}°C`;

  
  let p4 = document.createElement("p");
  p4.innerText = `Humidity: ${data.main.humidity}%`;

  
  let p5 = document.createElement("p");
  p5.innerText = `Weather: ${data.weather[0].main}`;

  
  let p6 = document.createElement("p");
  p6.innerText = `Pressure: ${data.main.pressure}p`;

  
  let p7 = document.createElement("p");
  p7.innerText = `Wind-Speed: ${data.wind.speed}`;

  temp.append(h2, p, p2, p3,p4,p5,p6,p7);

  let frame=document.getElementById("gmap_canvas")
  frame.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

/// based on current location

function getLocationWeather(){
  navigator.geolocation.getCurrentPosition(success);

  function success(position){
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude)
      console.log(longitude)
      getData2(latitude,longitude)
  }
}
