const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
  // const cityDets = data.cityDets;
  // const weather = data.weather;
  // data destructuring
  // does the same as above
  const { cityDets, weather } = data;

  // update the details template
  details.innerHTML = `
    <h5>${cityDets.EnglishName}</h5>
      <div>${weather.WeatherText}</div>
        <div>
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
        </div>
    `;

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  // update day / night image
  //   let timeSrc = null;
  //   if (weather.IsDayTime) {
  //     timeSrc = 'img/day.png';
  //   } else {
  //     timeSrc = 'img/night.png';
  //   }

  // ternary operator
  // does the same as above
  let timeSrc = weather.IsDayTime ? 'img/day.png' : 'img/night.png';

  time.setAttribute('src', timeSrc);
};

const updateCity = async city => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);
  //   return {
  //     cityDets: cityDets,
  //     weather: weather
  //   };
  // object shorthand notation
  // does the same as above
  return { cityDets, weather };
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with the new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

  // set local storage
  localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
  updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}
