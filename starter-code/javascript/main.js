var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.querySelector('#splits');

function printTime() {
  printMinutes(chronometer.twoDigitsNumber(chronometer.getMinutes()));
  printSeconds(chronometer.twoDigitsNumber(chronometer.getSeconds()));
  printMilliseconds(chronometer.twoDigitsNumber(chronometer.getMilliseconds()));
}

function printMinutes(minutes) {
  minDec.innerHTML = minutes.charAt(0);
  minUni.innerHTML = minutes.charAt(1);
}

function printSeconds(seconds) {
  secDec.innerHTML = seconds.charAt(0);
  secUni.innerHTML = seconds.charAt(1);
}

function printMilliseconds(milliseconds) {
  milDec.innerHTML = milliseconds.charAt(0);
  milUni.innerHTML = milliseconds.charAt(1);
}

function printSplit() {
  let newSplit = document.createElement('li');
  newSplit.innerHTML = chronometer.splitClick();
  splits.append(newSplit);
}

function clearSplits() {
  chronometer.resetClick();
  printTime();
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.classList.replace('start', 'stop')
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.classList.replace('reset', 'split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.replace('stop', 'start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.classList.replace('split', 'reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList.contains('start')){
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    intervalId = setInterval(() => {
      printTime();
    }, 10);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    clearInterval(intervalId);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains('split')){
    printSplit();
  } else {
    clearSplits();
  }
});