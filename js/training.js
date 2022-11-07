let timerInput = document.getElementById("time"); // Берем строку
let buttonRun = document.getElementById("button"); // Берем кнопку запуска
let timerShow = document.getElementById("timer"); // Берем для показа времени
/*let bgr = document.getElementById('button');// Берем кнопку для изменения цвета
let audio = document.getElementById('sound'); // Берем аудио для таймера
let out = document.getElementById('out');*/

buttonRun.addEventListener('click', function() {
timeMinut = parseInt(timerInput.value) //* 60
})

timer = setInterval(function () {
seconds = timeMinut%60 // Получаем секунды
minutes = timeMinut/60%60 // Получаем минуты
hour = timeMinut/60/60%60 // Получаем часы
//Если время закончилось, то...
if (timeMinut <= 0) {
// Таймер удаляется
clearInterval(timer);
//Цвет фона кнопки по окончанию таймера
bgr.style.background = 'red'
bgr.style.color = '#fff'
} else if (timeMinut == 300){
sound.play(sound)
}else {// Иначе
//Цвет фона кнопки
bgr.style.background = '#5AF407'
// Создаем строку с выводом времени
let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
// Выводим строку в блок для показа таймера
timerShow.innerHTML = strTimer;
}
--timeMinut;// уменьшаем таймер
}, 1000);
/*let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");


buttonRun.addEventListener('click', function () {
	timerInput = parseInt(timerInput.value) * 60
});
timer = setInterval(function () {
	seconds = timerInput%60
	minutes = timerInput/60%60
	hour = timerInput/60/60%60

	if (timerInput <=0) {
		clearInterval(timer);
		alert ("Занятия закончились");
		
	} else {
		let strTimer = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${seconds}`;
		timerShow.innerHTML = strTimer;
	}
	--timerInput;

}), 1000;
*/

let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");

let slider = document.querySelector("div.slider");
let viewSlider = document.querySelectorAll(".viewSlide");

let viewSlide = 0;

viewSlider[0].style.backgroundColor = "green";

btnNext.addEventListener("click", function () {
	viewSlider[viewSlide].style.backgroundColor = "red";

	if (viewSlide < 4) {
		viewSlide++;
	} else {
		viewSlide = 0;
	}

viewSlider[viewSlide].style.backgroundColor = "green";
slider.style.left = -viewSlide * viewport + "px";
	
})

btnPrev.addEventListener("click", function () {
	viewSlider[viewSlide].style.backgroundColor = "red";
	if (viewSlide > 0) {
		viewSlide --;
	} else {
		viewSlide = 4;
	}
viewSlider[viewSlide].style.backgroundColor = "green";	
slider.style.left = -viewSlide * viewport + "px";
})


document.addEventListener('DOMContentLoaded', function () {
	// конечная дата, например 1 декабря 2021
	const deadline = new Date(2023, 11, 01);
	// id таймера
	let timerId = null;
	// склонение числительных
	function declensionNum(num, words) {
	  return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	}
	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {
	  const diff = deadline - new Date();
	  if (diff <= 0) {
		clearInterval(timerId);
	  }
	  const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
	  const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
	  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
	  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
	  $days.textContent = days < 10 ? '0' + days : days;
	  $hours.textContent = hours < 10 ? '0' + hours : hours;
	  $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
	  $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
	  $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
	  $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
	  $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
	  $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
	}
	// получаем элементы, содержащие компоненты даты
	const $days = document.querySelector('.timer__days');
	const $hours = document.querySelector('.timer__hours');
	const $minutes = document.querySelector('.timer__minutes');
	const $seconds = document.querySelector('.timer__seconds');
	// вызываем функцию countdownTimer
	countdownTimer();
	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000);
  });

  let timer = document.getElementById("time");
  timer.start({countdown: true, startValues: {seconds: 30}});
  
  $('#countdownExample .values').html(timer.getTimeValues().toString());
  
  timer.addEventListener('secondsUpdated', function (e) {
	  $('#countdownExample .values').html(timer.getTimeValues().toString());
  });
  
  timer.addEventListener('targetAchieved', function (e) {
	  $('#countdownExample .values').html('KABOOM!!');
  });

/* РЕГИСТРАЦИОННАЯ ФОРМА
************************** */

$( function() {
  let tooltips = $( "[title]" ).tooltip({
	position: {
	  my: "left top",
	  at: "right+5 top-5",
	  collision: "none"
	}
  });
  $( "<button>" )
	.text( "Show help" )
	.button()
	.on( "click", function() {
	  tooltips.tooltip( "open" );
	})
	.insertAfter( "form" );
} );

/* ************************** */
/*function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num) {
	return num.toFixed(3);
}


let res = round(sum (sqrt(2), sqrt(3), sqrt(4)));
console.log(res);
*/

/*function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);	
}
let res = round(sqrt(2));
console.log (res);*/


/*function sqrt(num) {
	return Math.sqrt(num);
	}
	
	function round(num) {
	return num.toFixed(3);
	*/





/*let param1 = 1;
let param2 = 2;
let param3 = 3;

func (param1, param2, param3);*/

	
	/*let param2 = 2;
	let param3 = 3;*/
	
		



/*function sum() {
	let res = 0;
	for (i=0; i<=100; i++) {
		
		res +=i;
	}
	console.log(res);
}

sum();*/


/*
let num = 58990;
num = String (num);
let lst = Number(num[num.length-1]);
let str = '';

for (i=0; i<=8; i+=2) */

/*
if ( i == lst) {
	alert (yes);
}*/

/*
let arr = [1, 2, 3, 4, 5];



for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 == 0)
	console.log(arr[i]);

}*/


/*let arr = ['a', 'b', 'c', 'd'];
for (i = 0; i <arr.length; i++) {
	console.log (arr[i]);
}*/


/*
let arr = ['a', 'b', 'c', 'd'];

for (let elem of arr) {
	console.log (elem);
}*/
/*let res = 1;

for (let i = 2; i<= 10; i+=2) {
	res *= i;
}
alert (res);
console. log (res);*/
/*let num = 1;

while (num <= 1000) {
	num = num * 3;
}
console.log (num);*/

/*
let arr = [];

for (i=0; i<=8; i+=2) { 
	
	arr.push (i);

} console.log (arr);*/



/*let num = 58994;
num = String (num);
let lst = Number(num[num.length-1]);
let i = 0;

while (i <=8) {
	console.log (i)
	i+=2;
}*/

/*

let num = 58990;
num = String (num);
let lst = Number(num[num.length-1]);

for (i=0; i<=8; i+=2) {

	i+=2;

	if (i == lst) {
			alert('bingo');
		}
		else {
			alert('notbingo');
		}	
		
		
    
	}		
*/


/*
let num = 58994;
num = String (num);
let lst = Number(num[num.length-1]);
let res = 0;

for (i=0; i<=8; i+=2) {
	res += i;
	console.log (res);
}*/




/*
for (i=0; i<=8; i+=2) {
	console.log ('num');
	
	
	if (evn == Number(num[num.length-1])) {
		alert ('bingo');
	} */
	




/*
let i = num[num.length-1];

if (i == 0 || (i +=2) ) {
	alert ('bingo'); 
} else {alert ('notbingo');
}*/
	
 







/*

if (num > 99 || num < 10) {
	alert ('out');
} else {
	let result = 0;
	num = String(num);
		for (let i = 0; i < num.length; i++)
		result += Number(num[i]);
		if (result <10) {
			alert ('yes');
		} else {alert ('no')}

} */










/*let str = 12345;
str = String (str);
let res = "";


for (let i = str.length -1; i >=0; i--) {
	let num = str[i];{
		res +=  num;
	} 
}

alert (res);

console.log(res);
*/





/*let result = Number(str[0]) + Number(str[1]);*/

/*
let num = Number(str[i]);
let result;

for (i = 0; i < str.length-1; i++) {
	result += Number(str[i]);
}
alert (result);*/







/*let days = 9; // Дней в периоде
let period = 3; // Периодичность приёма протеина (раз в три дня)
let workDayAmount = 200; // Количество протеина в будние
let weekendAmount = 100; // Количество протеина в выходные*/

/*let obj = {1: Mon, 2: Tue, 3: Wed, 4: The, 5: Fri, 6: Sat, 7: San};*/
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = 0;*/

/*for (let i = 0; i <= 9; i+=3) {
	console.log(i); // выведет 1, 2... 9
}*/

/*let obj = {1: Mon, 2: Tue, 3: Wed, 4: The, 5: Fri, 6: Sat, 7: San};*/

/*
let obj = {Mon: 1, Tue: 2, We: 3, Thu: 4, Fri: 5, Sat: 6, San: 7};
for (let key in obj) {
	console.log(key); // выведет 'a', 'b', 'c'
}*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 0;
for (let elem of arr) {
	if (elem % 3 === 0) {
        total = total + (elem*weekendAmount);
		
}
console.log(total);
	}
*/

/*
let res = 0;

for (let i = 1; i <= 100; i++) {
	res = res + i;
}

console.log(res);*/

/*
let obj = {Mon: 1, Tue: 2, We: 3, Thu: 4, Fri: 5, Sat: 6, San: 7};
let total = 0
for (let key in obj) {
    if(obj[key] % 3 == 0) {
        console.log(obj[key]);
    }
}
function newFunction() {
	let num = 123;
	alert(num);
}
*/
