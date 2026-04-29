// Tasks

let helloArr = Array(7).fill("Hello");
console.log(helloArr);


//  Task 2: Update the Array

helloArr = helloArr.fill("Hola", 3, 5 );
console.log(helloArr);


// Task 3: Populate the Array with a for Loop

let numbersArr = Array(5);
  for(let i = 0; i < numbersArr.length; i++) {
    numbersArr[i] = i * 10;
  }
  console.log(numbersArr);