function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

console.log(sum(3,5));

function compareArrays( arr1, arr2 ) {
      return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function memorize(fn, limit) {

  const memory = new Array();
  
  return function (...rest)  {
    
    const findElement = memory.find(el => compareArrays(Array.from(arguments), el.args));// тут проверка 

    if (findElement === undefined) {//если элемент не найден

      const element = {};
      element.args = rest;
      element.result = fn(...rest);
      if (memory.length === limit) {
        memory.unshift();
      }
      memory.push(element);
      return fn(...rest);

    } else {//если элемент найден

      return findElement.result;
    }
  }
}

const mSum = memorize(sum, 2);
mSum(3, 4); // 7
mSum(1, 3); //4
mSum(3, 4);

function testCase(testFunction, timer) {

  const arr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(timer);

  for(let i = 0; i < 100; i++) {

    for(let i = 0; i < arr.lengt; i++ )
    testFunction(...i.forEach(element => element));

  }

  console.timeEnd(timer);

}

testCase(sum);//default: 0.0390625ms
testCase(memorize());//default: 0.02587890625ms
// без задержки default: 0.055908203125ms