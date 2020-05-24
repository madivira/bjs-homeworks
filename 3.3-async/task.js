class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {//добавляет новый звонок в коллекцию существующих.
        if (id === undefined) {
            throw new Error("Невозможно идентифицировать будильник. Параметр id не передан");
        }

        if (this.alarmCollection.some(element => element.id === id)) {
            return console.error("Будильник с таким id уже существует");
        }

        const clock = {id, time, callback};
        this.alarmCollection.push(clock);
    }

    removeClock (id) {// удаляет определённый звонок.
          
        return this.alarmCollection.splice(this.alarmCollection.indexOf(this.alarmCollection.find(element => element.id === id )),1);
        
    }

    getCurrentFormattedTime() {//возвращает текущее время в строковом формате HH:MM.

        let date = new Date();
        return `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;

    }

    start() {//запускает все звонки
        
        const checkClock = (call) => {

            if (call.time === this.getCurrentFormattedTime()) {
                return call.callback();
            }     
        }

        if ( this.timerId == undefined) {
           
            this.timerId =  setInterval(() => this.alarmCollection.forEach(element => checkClock(element)), 1000);
        }
    }

    stop() {// останавливает выполнение всех звонков

        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){// печатает все звонки
        return this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} заведён на ${element.time}`));
    }

    clearAlarms(){// удаляет все звонки
        this.stop();
        this.alarmCollection.splice(0,this.alarmCollection.length);
    }

}

function testCase() {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock("18:47", () => console.log("скоро спать!"), 1);
    phoneAlarm.addClock("18:48", () => {console.log("скоро!"); phoneAlarm.stop(); phoneAlarm.removeClock(2);}, 2);
    phoneAlarm.addClock("18:53", () => {console.log("now!"); phoneAlarm.stop(); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms();}, 3);
    phoneAlarm.printAlarms();
    phoneAlarm.start();

}

testCase();

