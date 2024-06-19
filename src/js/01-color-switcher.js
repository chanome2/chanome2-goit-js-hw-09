
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');
    let intervalId = null;
  
    function startColorSwitching() {
      startButton.disabled = true; // Disable the Start button during color switching
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
    }
  
    function stopColorSwitching() {
      startButton.disabled = false; // Enable the Start button after stopping color switching
      clearInterval(intervalId);
      intervalId = null;
    }
  
    startButton.addEventListener('click', startColorSwitching);
    stopButton.addEventListener('click', stopColorSwitching);
  });
  