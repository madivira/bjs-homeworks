//"use strict";
//дз 1
function getSolutions( a, b, c ) {

    let D = b**2 - 4 * a * c;

    if (D < 0) {
        return { 
            D, 
            roots: [ ] };
    } else if (D === 0) {
        let x1 = -b / 2 * a;
        return { 
            D, 
            roots: [ x1 ] };
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { 
            D, 
            roots: [ x1, x2 ] };
    }
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage( 2, 4, 2 );
showSolutionsMessage( 1, 2, 3 );
showSolutionsMessage( 7, 20, -3 );

//дз 2
function getAverageScore(data) {
   
    let sumValue = new Array();//массив для накопления средних оценок по предметам

    for ( let subject in data ) { 

        let value = data[ subject ];
      
        data[ subject ] =  getAverageMark(value);

        if (data [subject] === 0) {//если нет оценок по предметам то в среднее значение не заносим
            continue;
        } else {
        sumValue.push(data[ subject ]);
        }
    }

    data.average = getAverageMark(sumValue);

    return data;
}

function getAverageMark(marks) {//среднее значение массива
       
    if (marks.length == 0) {// если нет оценок, вернуть ноль
        return 0;
    }

    let sum = 0;//для накопления суммы оценок
    
    for (let i = 0; i < marks.length; i++) {
        sum +=marks[i];
    }

    return sum/marks.length;
}

console.log(getAverageScore( { algebra: [], geometry: [3,3,3,3], russian: [5,3,4], music: [5,2] } ));


//дз 3 
function getPersonData(secretData) {// аргумент *secretData*, в котором будут храниться данные о пирате
    
 let firstName = getDecodedValue(secretData.aaa);
 let lastName = getDecodedValue(secretData.bbb);
  
    return {
        firstName,
        lastName
    }
}

function getDecodedValue(secret) { //по входному числу будет возвращать строку "Родриго" или "Эмильо"

    if (Number(secret)){
        return "Эмильо";
    } else {
        return "Родриго";
    }
}

console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));