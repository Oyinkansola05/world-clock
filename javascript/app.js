function displayTime() {
  let lagosElement = document.querySelector("#lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");
  let lagosDate = moment().tz("Africa/Lagos").format("MMMM Do YYYY");
  let lagosTime = moment()
    .tz("Africa/Lagos")
    .format("H:mm:ss [<small>]A[</small>]");
  lagosDateElement.innerHTML = `${lagosDate}`;
  lagosTimeElement.innerHTML = `${lagosTime}`;

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoDate = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("H:mm:ss [<small>]A[</small>]");
  tokyoDateElement.innerHTML = `${tokyoDate}`;
  tokyoTimeElement.innerHTML = `${tokyoTime}`;

  let accraElement = document.querySelector("#accra");
  let accraDateElement = accraElement.querySelector(".date");
  let accraTimeElement = accraElement.querySelector(".time");
  let accraDate = moment().tz("Africa/Accra").format("MMMM Do YYYY");
  let accraTime = moment()
    .tz("Africa/Accra")
    .format("H:mm:ss [<small>]A[</small>]");
  accraDateElement.innerHTML = `${accraDate}`;
  accraTimeElement.innerHTML = `${accraTime}`;
}
displayTime();
setInterval(displayTime, 1000)
