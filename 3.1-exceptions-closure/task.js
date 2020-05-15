
//exercise 1
function parseCount(num) {
    if (Number.isNaN(Number.parseInt(num))) {
        const err = new Error("Невалидное значение");
        throw err;
    }
    try {
       Number.parseInt(num);
    } catch(e) {
       console.log(e); 
    } finally {
        return Number.parseInt(num);
    };
}

function validateCount(num){

    try {
        parseCount(num);
    } catch (e) {
        return e;
    }
    return parseCount(num);
}

//exercise 2
class Triangle {
    constructor(one, two, three) {
        this.one = one;
        this.two = two;
        this.three = three;
        if ( (this.one + this.two) < this.three || (this.one + this.three) < this.two || (this.three + this.two) < this.one) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {//Метод `getPerimeter` должен возвращать периметр треугольника
        return this.one + this.two + this.three;
    }

    getArea() {//Метод `getArea` должен возвращать площадь треугольника
        let p = this.getPerimeter() / 2;
        let S =  Math.sqrt( p * (p - this.one) * (p - this.two) * (p - this.three) );
        return Number(S.toFixed(3));
    }
}

function getTriangle (a, b, c) {
   
  try {
    let triangle = new Triangle(a, b, c);
    return triangle;
  } catch(e) {
    return {
        getPerimeter: function () {return "Ошибка! Неправильный треугольник"},
        getArea: function () { return "Ошибка! Неправильный треугольник"}
    }
  }    
  
}