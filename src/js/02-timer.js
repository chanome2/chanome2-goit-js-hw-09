// Import Flatpickr from CDN (already included in HTML)
// <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

document.addEventListener('DOMContentLoaded', () => {
    const datePicker = document.getElementById('datetime-picker');
    const startButton = document.querySelector('[data-start]');
    const daysDisplay = document.querySelector('[data-days]');
    const hoursDisplay = document.querySelector('[data-hours]');
    const minutesDisplay = document.querySelector('[data-minutes]');
    const secondsDisplay = document.querySelector('[data-seconds]');
  
    let countdownInterval = null;
  
    function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
  
      const days = Math.floor(ms / day);
      const hours = Math.floor((ms % day) / hour);
      const minutes = Math.floor(((ms % day) % hour) / minute);
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
      return { days, hours, minutes, seconds };
    }
  
    function addLeadingZero(value) {
      return value.toString().padStart(2, '0');
    }
  
    // Initialize Flatpickr date picker
    flatpickr(datePicker, {
      enableTime: true,
      time_24hr: true,
      defaultDate: new Date(),
      minuteIncrement: 1,
      onClose(selectedDates) {
        const selectedDate = selectedDates[0];
  
        if (selectedDate < new Date()) {
          // If selected date is in the past, show alert and disable start button
          alert("Please choose a date in the future");
          startButton.disabled = true;
        } else {
          // If selected date is valid, enable the start button
          startButton.disabled = false;
        }
      }
    });
  
    function startCountdown(targetDate) {
      function updateTimer() {
        const now = new Date();
        const timeDifference = targetDate - now;
  
        if (timeDifference <= 0) {
          // Stop the countdown when target date is reached
          clearInterval(countdownInterval);
          countdownInterval = null;
          return;
        }
  
        const { days, hours, minutes, seconds } = convertMs(timeDifference);
  
        // Update timer display
        daysDisplay.textContent = addLeadingZero(days);
        hoursDisplay.textContent = addLeadingZero(hours);
        minutesDisplay.textContent = addLeadingZero(minutes);
        secondsDisplay.textContent = addLeadingZero(seconds);
      }
  
      // Immediately update timer and start interval
      updateTimer();
      countdownInterval = setInterval(updateTimer, 1000);
    }
  
    // Start countdown when "Start" button is clicked
    startButton.addEventListener('click', () => {
      const selectedDate = new Date(datePicker.value);
  
      if (isNaN(selectedDate)) {
        alert("Please select a valid date and time");
        return;
      }
  
      if (selectedDate <= new Date()) {
        alert("Please choose a date and time in the future");
        return;
      }
  
      startCountdown(selectedDate);
  
      // Disable the "Start" button after countdown starts
      startButton.disabled = true;
    });
  });
  