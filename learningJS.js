
//classes
class Human{
    gender ='male';

  printGender =  () => {
    console.log(this.gender);
  }
}

class Person extends Human{
 
    name ='Max';
    gender = 'female';
  
  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();



//spread
const numbers = [1,2,3];

const newNumbers = [...numbers, 4]

console.log(newNumbers);

const person1 = {
  name: 'Leo'
};

const newPerson1 = {
  ...person1,
  age: 38
}

console.log(newPerson1);


// destructor
const numbers1 = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1, num3);


//how to copy -> Reference
const person2 = {
  name: 'COELHO'
};


const person3 = person
person.name ='MANU';
console.log(person3);



const person4 = {
    ...person
};
person.name ='SILVA';
console.log(person4);




//map()

const previousNumber = [1,2,3];

const doubleNumbersArray = previousNumber.map((num) => {
    return num * 2;

});
console.log(previousNumber);
console.log(doubleNumbersArray);