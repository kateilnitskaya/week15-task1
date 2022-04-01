// переменная, в которой хранится выбранное математическое действие
let op;

// функция расчёта
function func() {
    // переменная для результата
    let result;
    // получаем первое и второе число
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    // смотрим, что было в переменной с действием, и действуем исходя из этого
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    // отправляем результат на страницу
    document.getElementById("result").innerHTML = result;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "На ноль делить нельзя";
    } else {
        return num1 / num2;
    }
}

/* МОИ ЗАМЕТКИ

if (num1 > 0) {
    alert("На ноль делить нельзя!");
} else if (num2 == 0) {
    alert("На ноль делить нельзя!");
}

function divide(num1, num2) {
        if (num2 == 0) {
            return "На ноль делить нельзя";
        } else {
            return num1 / num2;
        }
    }

function divide(num1, num2) {
    if (num2 === 0) {
        return "На ноль делить нельзя"
    }
    return num1 / num2;
}


alert("На ноль делить нельзя");

*/