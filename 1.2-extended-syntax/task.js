function getResult(a, b, c) {

    "use strict"; 

    let x = '';
    let D = b**2 - 4 * a * c;
   
    if (D < 0) {
        x= [];
    }
    else if (D === 0) {
        x = [(-b) / (2 * a)];
    }
    else if (D > 0) {
        x = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
    }
    
    return x;
}

function getAverageMark(marks){
   
    if (marks.length === 0) {
        return 0;
    }
    else if (marks.length > 5) {
        marks = marks.slice(0, 5);
    }

    let average = 0;

    for (let i = 0; i < marks.length; i++) {
       average += marks[i];
    }

    let averageMark = average / marks.length;

    return averageMark;
}

function askDrink(name, dateOfBirthday){

    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result = "";

    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}