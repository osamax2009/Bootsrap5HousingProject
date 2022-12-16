const person = {
  firstname: "ali",
  lastname: "mohammed",
  age: 30,
  address: {
    streat: "50 main st",
    city: "al-admaya",
    state: "bg",
  },
  hobbies: ["sport", "movies", "movies"],
};

console.log(
  person.firstname,
  person.lastname,
  person.address.city,
  person.hobbies
);

const { firstname, lastname } = person;

console.log(firstname);

const todos = [
  {
    id: 1,
    task: "take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    task: "Meeting  with boss",
    isCompleted: false,
  },
  {
    id: 3,
    task: "dentist appt",
    isCompleted: true,
  },
];
const todoJson = JSON.stringify(todos);
console.log(todoJson);

for (let i = 0; i <= todos.length - 1; i++) {
  console.log(todos[i].task);
}
