let str = '';

for (let count = 20; count <= 30; count += 0.5) {              //Виведення на сторінку чисел від 20 до 30 з кроком 0.5
    if(count === 30) {
        str += `${count}.`;
        console.log(`Числа від 20 до 30 з кроком 0.5:\n${str}`);
        break;
    }
    str += `${count}, `;
}

str = '';
for (let count = 10; count <= 100; count += 10) {     //Виведення даних з розрахунком вартості 10, 20, 30... 100 доларів
    str += `Вартість ${count} доларів в гривнях буде: ${count * 27}.\n`;
}
console.log(`${str}`);


let integer = Number(prompt('Введіть ціле число'));
str = '';
for (let count = 1; count <= 100; count++) {//Виведення всіх цілих чисел від 1 до 100, квадрат яких не перевищує введене число
    if((count * count) >= integer) {
        str += `.`;
        console.log(`Всі числа від 1 до 100, квадрат яких не перевищує введене число:\n${str}`);
        break;
    }
    if(count !== 1) {
        str += `, `;
    }
    if((count * count) < integer) {
        str += `${count}`;
    }
}

for (let divider = 1, count = 0; divider <= integer; divider++) {
    if((integer % divider) === 0) {
        count++;
    }
    if((count === 2) && (divider === integer)) {
        console.log(`${integer} є простим числом.`);
    }
    if((count !== 2) && (divider === integer)) {
        console.log(`${integer} не є простим числом.`);
    }
}

integer = Number(prompt('Введіть ціле число'));
for (let count = 0; count <= integer; count++) {                //Зведення числа 3 у ступінь
    if(Math.pow(3, count) === integer) {
        console.log(`Число ${integer} можна отримати, якщо звести число 3 у ${count} ступінь.`);
        break;
    }
    if(Math.pow(3, count) > integer) {
        console.log(`Число ${integer} не можна отримати, якщо звести число 3 у будь-який ступінь.`);
        break;
    }
}
