// exercise 1

class Weapon {
    constructor(object) {
        this.name = object.name,//имя оружия
        this.attack = object.attack,
        this.durability = object.durability,//прочность оружия, уменьшается от повреждений соперником
        this.range = object.range,
        this.oldDurability = object.durability;// изначальная прочность оружия
    }
    
    

    takeDamage (damage) { //добавляет повреждения от соперника
        
        if (damage >= this.durability || typeof this.durability === "undefined") {
            this.durability = 0;
            return;
        } else if ( this.durability > damage) {
            this.durability = this.durability - damage; 
            return;
        }
    }

    getDamage() {//расчитывет урон от удара данным оружием
        if (this.durability >= (this.oldDurability / 100) * 30) {
            return this.attack;
        } else if (this.durability === 0) {
            return 0;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {//показывает сломано ли оружие. Возвращает `false` при durability более 0.
        if (this.durability) {
            return false;
        } else {
            return true;
        }
    }

}
/*
Таблица 1. Варианты оружия.

| name       | attack | durability | range |
|------------|--------|------------|-------|
| Рука       | 1      | Infinity   | 1     |
| Лук        | 10     | 200        | 3     |
| Меч        | 25     | 500        | 1     |
| Нож        | 5      | 300        | 1     |
| Посох      | 8      | 300        | 2     |*/

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});
    
const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});
/*
Таблица 2. Варианты усиленного оружия. Прочерк («-») — свойство берётся из обычного аналога.

| name           | версия чего    | attack | range | durability |
|----------------|----------------|--------|-------|------------|
| Длинный лук    | Лук            | 15     | 4     | -          |
| Секира         | Меч            | 27     | -     | 800        |
| Посох Бури     | Посох          | 10     | 3     | -          |
*/

const longBow = bow;
longBow.name = 'Длинный лук';
longBow.attack = 15;
longBow.range = 4;

const axe = sword;
axe.name = 'Секира';
axe.attack = 27;
axe.durability = 800;

const stormStaff = staff;
stormStaff.name = 'Посох Бури';
stormStaff.attack = 10;
stormStaff.range = 3;

sword.takeDamage(5);
console.log(sword.durability); // 5 
sword.takeDamage(50);
console.log(sword.durability); // 0
arm.takeDamage(20);
console.log(arm.durability); // Infinity
bow.takeDamage(20);
console.log(bow.durability); // 180
bow.takeDamage(200);
console.log(bow.durability); // 0
console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0
console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1
console.log(bow.durability); // 0
console.log(bow.isBroken()); // true
console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false


// exercise 2

class Bow extends Weapon {
    constructor(object) {
        super({name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        })
    }
};

class Sword extends Weapon {
    constructor(object) {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
        })
    }
};

class Arm extends Weapon {
    constructor(object) {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1,
        })
    }
};

class Knife extends Weapon {
    constructor(object) {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        })
    }
};

class Staff extends Weapon {
    constructor(object) {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        })
    }
};

class LongBow extends Bow {
    constructor(object) {
        super(object);
        this.name = 'Длинный лук';
        this.range = 4;
        this.attack = 15;
    }
}

class Axe extends Sword {
    constructor(object) {
        super(object);
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor(object) {
        super(object);
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

const bown = new Bow();

console.log(bown.name); // Лук
console.log(bown.attack); // 10
console.log(bown.durability); // 200
console.log(bown.range); // 3

//exercise 3

class StudentLog {
    constructor(name) {
        this.name = name;
       //создать объект в который будет заноситься предмет-свойство оценка-значение.
        this.grades = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {//вносить оценку по соответствующему предмету

        if (this.grades.hasOwnProperty([String(subject)])){//проверяем наличие этого свойства в объекте
            this.grades[String(subject)];
        } else {//если его нет, то создаем
            let allGrade = [];
            this.grades[String(subject)] = allGrade; 
        }

        if (grade < 1 || grade > 5 || !Number(grade)) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5. `)
            console.log(this.grades);
            return this.grades[String(subject)].length;//количество оценок по предмету нужно вернуть
        } else {//считается количество занесенных оценок и выдает. найти этот предмет и туда занести оценку
            this.grades[String(subject)].push(grade);
            console.log(this.grades);
            return this.grades[String(subject)].length;
        }
    }

    getAverageBySubject(subject) {//получающий среднюю оценку по названию предмета. При отсутствии предмета нужно выдать 0
        if (this.grades.hasOwnProperty([String(subject)])){
            let sum = 0;
            for (let grade of this.grades[String(subject)]) {
                sum += grade;
            }
            return sum / this.grades[String(subject)].length;
        } else {
            return 0;
        }
    }

    getTotalAverage() {
        let sum = 0;//заносить все оценки в массив
        let counter = 0;
        for (let grades in this.grades) {
            console.log(grades);
            for (let grade of this.grades[String(grades)]) {
                console.log(grade);
                sum += grade;
                counter++;
            }
        }
        console.log(sum);

        return sum / counter;
    }
}

const log = new StudentLog('Олег Никифоров');
/*console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(3, 'algebra'));// 1
console.log(log.addGrade('отлично!', 'math'));// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0
console.log(log.addGrade(4, 'algebra'));// 1
console.log(log.addGrade(5, 'geometry'));// 1
console.log(log.addGrade(25, 'geometry'));// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1
*/
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
console.log(log.getTotalAverage()); // 3,75