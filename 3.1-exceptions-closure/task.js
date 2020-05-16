
//exercise 1
function parseCount(num) {
    if (Number.isNaN(Number.parseInt(num))) {
        const err = new Error("Невалидное значение");
        throw err;
    }

    return Number.parseInt(num);
}

function validateCount(num){

    try {
        return parseCount(num);
    } catch (e) {
        return e;
    }
    
}

//exercise 2
class Triangle {
    constructor(one, two, three) {
        this.one = one;
        this.two = two;
        this.three = three;
        if ( (one + two) < three || (one + three) < two || (three + two) < one) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {//Метод `getPerimeter` должен возвращать периметр треугольника
        return this.one + this.two + this.three;
    }

    getArea() {//Метод `getArea` должен возвращать площадь треугольника
        let p = this.getPerimeter() / 2;
        let s =  Math.sqrt( p * (p - this.one) * (p - this.two) * (p - this.three) );
        return Number(s.toFixed(3));
    }
}

function getTriangle (a, b, c) {
   
  try {
    return new Triangle(a, b, c);
  } catch(e) {
    return {
        getPerimeter: () => "Ошибка! Неправильный треугольник",
        getArea: () => "Ошибка! Неправильный треугольник"
    }
  }    
  
}