function displayTime() {
  let lagosElement = document.querySelector("#lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");
  let lagosDate = moment().tz("Africa/Lagos").format("MMMM Do YYYY");
  let lagosTime = moment()
    .tz("Africa/Lagos")
    .format("HH:mm:ss [<small>]A[</small>]");
  lagosDateElement.innerHTML = `${lagosDate}`;
  lagosTimeElement.innerHTML = `${lagosTime}`;

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoDate = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("HH:mm:ss [<small>]A[</small>]");
  tokyoDateElement.innerHTML = `${tokyoDate}`;
  tokyoTimeElement.innerHTML = `${tokyoTime}`;

  let accraElement = document.querySelector("#accra");
  let accraDateElement = accraElement.querySelector(".date");
  let accraTimeElement = accraElement.querySelector(".time");
  let accraDate = moment().tz("Africa/Accra").format("MMMM Do YYYY");
  let accraTime = moment()
    .tz("Africa/Accra")
    .format("HH:mm:ss [<small>]A[</small>]");
  accraDateElement.innerHTML = `${accraDate}`;
  accraTimeElement.innerHTML = `${accraTime}
  `;
}
function displaySelectedCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("HH:mm:ss [<small>]A[</small]");
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityElement = document.querySelector("#city-container");
  cityElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}></div>
        </div>
        <br/>
      <a href="index.html">Go back</a>`;
}

displayTime();
setInterval(displayTime, 1000);

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", displaySelectedCity);
