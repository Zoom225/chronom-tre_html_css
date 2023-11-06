const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

let intervalId;
let time = 0;

function startTimer() {
	intervalId = setInterval(() => {
		time++;
		const h = Math.floor(time / 3600);
		const m = Math.floor((time % 3600) / 60);
		const s = time % 60;
		hours.textContent = h < 10 ? '0' + h : h;
		minutes.textContent = m < 10 ? '0' + m : m;
		seconds.textContent = s < 10 ? '0' + s : s;
	}, 1000);
}

function pauseTimer() {
	clearInterval(intervalId);
}

function resetTimer() {
	clearInterval(intervalId);
	time = 0;
	hours.textContent = '00';
	minutes.textContent = '00';
	seconds.textContent = '00';
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
