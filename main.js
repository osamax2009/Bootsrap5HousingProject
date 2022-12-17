const sumofnumnbers = (num1, num2) => num1 + num2;

console.log(sumofnumnbers);

function Person(firstname, lastname, dob) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.dob = new Date(dob);

  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
}

//instantiate object
const person1 = new Person("Jone", "Doe", "10-10-2000");
const person2 = new Person("noor", "moh", "10-10-2004");

console.log(person1.getBirthYear());
console.log(person2.getBirthYear());
