/*Лабораторная # 4*/

let days = 9; // Дней в периоде
let period = 3; // Периодичность приёма протеина (раз в три дня)
let workDayAmount = 200; // Количество протеина в будние
let weekendAmount = 100; // Количество протеина в выходные

let total = 0;

for (let i = 1; i<=days; i++) {
    if (i % period === 0) {
        if(i % 7 === 0 || i % 7 === 6) {
            total += weekendAmount
        }
        else {
            total += workDayAmount
        }
    }
}

console.log(total);

/*Лабораторная # 2*/

/*
let isRain = confirm('На улице нет дождя. Верно?');
if (isRain) ('Давайте продолжим');
else {alert('Лучше остаться дома (длительность прогулки 0 минут')};
let temperature = prompt ('Пожалуйста, укажите температуру на улице');

if (temperature >=35 || temperature <=0) {alert ('Лучше остаться дома (длительность прогулки 0 минут)');}
else if(temperature == 20) {alert ( 'Прогулка 20 минут');}

else if(temperature<20&&temperature>0) {minutes=temperature;}
else if(temperature>20&&temperature<35) {minutes=20-(temperature-20);}


alert ('Прогулка' + " " + minutes + ' ' + 'минут')*/





/*Лабораторная # 1*/
/*
let weight = parseInt (prompt('Укажите, пожалуйста, ваш вес', '84кг'));
let height = parseFloat (prompt('Укажите, пожалуйста, ваш рост', '1.75м'));

let i = Math.round(weight/height**2);

console.log('Ваш индекс массы тела' + " " +i)


let humanFat = parseInt (prompt('Укажите, пожалуйста, массу жира', '5кг'));

let Fi = Math.round( (humanFat/weight)*100 );


console.log('Процент жира' + " " + Fi)*/