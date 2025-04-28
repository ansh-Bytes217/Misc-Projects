
function padNumber(number) {
  return number < 10 ? '0' + number : number;
}


function updateClock() {
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  const dateElement = document.getElementById('date');

  // Get current time
  const now = new Date();
  const hours = padNumber(now.getHours());
  const minutes = padNumber(now.getMinutes());
  const seconds = padNumber(now.getSeconds());

  // Get current date (day of the week and month)
  const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
  const dayOfMonth = now.getDate();
  const month = now.toLocaleString('en-US', { month: 'long' });
  const year = now.getFullYear();

  // Update the clock
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  dateElement.textContent = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
