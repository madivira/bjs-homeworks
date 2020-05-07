function getAnimalSound(animal) {

    if (typeof animal === "undefined") {
        return null;
    } else {
        const sound = animal.sound;
        return sound;
    }
}

function getAverageMark(marks) {

    if (marks.length === 0 ) {
        return 0;
    }

    let sum = 0;
    for (mark of marks) {
        sum += Number(mark);
    }

    return Math.round(sum/marks.length)
}

function checkBirthday(birthday) {

    let now = Date.now() 
  
    new Date(birthday);

    birthday = Number(new Date(birthday));

    let diff = now - birthday;

    let age = (diff - diff / 4) / 31536000000 + (diff / 4) / 31622400000;

    return age > 18 ? true : false;
}