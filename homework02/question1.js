// Turn the following functions into declarative functions:
// reference function #1:
// function findUserById(users, id){
//     for(let i = 0; i < users.length; i++){
//         if(users[i].id == id)
//             return users[i].name; // notice it returns the name property
//     }
//     return null; // notice it returns null if the element is not found
// }

// Find the name of a user by ID. Return null if doesn't exist.
function findUserById(users, id) {
  let user = users.find((user) => user.id === id);
  return user ? user.name : null;
}

// Reference function #2
// function computeBMIs(users) {
//   var bmiArray = [];
//   for (let i = 0; i < users.length; i++) {
//     let bmi = users[i].weight / (users[i].height * users[i].height);
//     bmiArray.push(bmi);
//   }
//   return bmiArray;
// }

// Compute the BMI (user weight / height^2), return array of BMI per user.
function computeBMIs(users) {
  return users.map((x) => x.weight / (x.height * x.height));
}

// Test
const users = [
  { id: 1, name: "Marta", height: 1.74, weight: 59 },
  { id: 2, name: "Josh", height: 1.8, weight: 88 },
  { id: 3, name: "Achilles", height: 1.68, weight: 63 },
  { id: 4, name: "Julius", height: 1.93, weight: 97 },
];
console.log(findUserById(users, 1.0));
console.log(computeBMIs(users));
