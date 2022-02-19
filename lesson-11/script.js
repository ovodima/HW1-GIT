//Task 1
function sum (num1) {
    return function (num2) {
       return num1 + num2
    } 
}
console.log(sum(1)(2))

// Task 2

setTimeout(() => {
    for(let i = 0; i <= 10; i++) {
        console.log(i)
    }
},0)

// Заданная переменная через var которой присвоено i = 0 создает одну ячейку в памяти, 
// и цикл ссылаеться на тот результат который обновляет этой ячейке, а переменная задана через let создает новую ячейку с пишет в нее новое значение.
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}
