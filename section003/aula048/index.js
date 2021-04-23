// The goal is to write an algorithm that simulates a timer, with start, pause
// and reset funcionalities.

const Timer = {
  startBtn: document.getElementById('start-timer'),
  pauseBtn: document.getElementById('pause-timer'),
  resetBtn: document.getElementById('reset-timer'),
  timerDisplay: document.getElementById('timer-info'),
  seconds: 0,
  timer: '',
  isPaused: false,

  getTime(seconds) {
    const time = new Date(seconds);
    return time.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    })
  },

  printTimer() {
    Timer.timerDisplay.innerHTML = Timer.getTime(Timer.seconds * 1000);
    return;
  },

  startTimer() {
    clearInterval(Timer.timer);

    if (Timer.timerDisplay.classList.contains('paused-timer')) {
      Timer.timerDisplay.classList.remove('paused-timer');
    }

    if (Timer.isPaused) {
      Timer.isPaused = false;
      Timer.startBtn.innerText = 'Iniciar';
    }

    Timer.timer = setInterval(() => {
      Timer.seconds++;
      Timer.printTimer()
    }, 1000);
    return;
  },

  pauseTimer() {
    clearInterval(Timer.timer);

    if (!Timer.timerDisplay.classList.contains('paused-timer')) {
      Timer.timerDisplay.classList.add('paused-timer');
    }

    Timer.isPaused = true;
    Timer.startBtn.innerText = 'Continuar';

    return;
  },

  resetTimer() {
    clearInterval(Timer.timer);
    Timer.seconds = 0;
    Timer.timerDisplay.innerHTML = '00:00:00';

    if (Timer.timerDisplay.classList.contains('paused-timer')) {
      Timer.timerDisplay.classList.remove('paused-timer');
    }

    if (Timer.isPaused) {
      Timer.isPaused = false;
      Timer.startBtn.innerText = 'Iniciar';
    }

    return;
  },

  watchClick() {
    const btnGroup = document.querySelector('.btn-group');
    btnGroup.addEventListener('click', e => {
      const el = e.target;

      if (el == Timer.startBtn) Timer.startTimer();
      if (el == Timer.pauseBtn) Timer.pauseTimer();
      if (el == Timer.resetBtn) Timer.resetTimer();
    })

    return
  }
}

Timer.watchClick()
