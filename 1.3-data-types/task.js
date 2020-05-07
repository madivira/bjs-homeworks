
"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(parseInt(percent))) { 
        return `Параметр процентная ставка содержит неправильное значение`;
    }
    if (isNaN(parseInt(contribution))) {
        return `Параметр первоначальный взнос содержит неправильное значение`;
    }
    if (isNaN(parseInt(amount))) {
        return `Параметр общая стоимость содержит неправильное значение`;
    }

    let S = Number(amount) - Number(contribution);
    console.log(S);
    let P = (Number(percent) / 100) / 12;
    console.log(P);
    let n = (date.getFullYear() - new Date().getFullYear()) * 12;
    console.log(n);
    let monthlyPayment = S * ( P + P / ( ( ( 1 +  P )**n) - 1 ) );
    console.log(monthlyPayment);
    let totalAmount = monthlyPayment * n;

    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
     
    if (!String(name) || name >=0 || name === undefined)  {
        return `Привет, мир! Меня зовут Аноним`;
    }  else {
        return `Привет, мир! Меня зовут ${name}`;
    }
}