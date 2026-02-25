// Question 2: Water Bottles

// Return true if we have one bottle with amount, and the rest are empty
// Otherwise return false
function isGoal(currentState, amount) {
  let targetCount = 0; // Count number of bottles filled to target amount

  for (let i = 0; i < currentState.length; i++) {
    if (currentState[i] === amount) {
      if (targetCount === 0) targetCount++;
      else return false; // Can't have more than one bottle with amount
    } else if (currentState[i] !== 0) {
      return false;
    }
  }
  return targetCount === 1;
}

// Store all possible steps where one bottle is filled
function fillBottles(bottles, currentState) {
  // filledBottles: array of arrays (n x n numbers)
  // n = number of bottles
  let filledBottles = new Array();
  // Fill the ith bottle to capacity for each bottle
  // Different bottle being filled each time
  for (let i = 0; i < currentState.length; i++) {
    filledBottles.push(currentState.slice());
    filledBottles[i][i] = bottles[i];
  }
  return filledBottles;
}

// Store all possible steps where one bottle is emptied
function emptyBottles(bottles, currentState) {
  let emptyBottles = new Array();
  for (let i = 0; i < currentState.length; i++) {
    emptyBottles.push(currentState.slice());
    emptyBottles[i][i] = 0;
  }
  return emptyBottles;
}

// Possible steps where one bottle is poured into another
function pourBottles(bottles, currentState) {
  let pouredBottles = new Array();
  // pour water from bottle[i] to bottle[j]
  // Try all possible pouring combinations from different bottles
  for (let i = 0; i < currentState.length; i++) {
    for (let j = 0; j < currentState.length; j++) {
      if (i == j) continue; // Can't pour a bottle to itself

      pouredBottles.push(currentState.slice());
      let needFill = bottles[j] - currentState[j];

      // How much water availbe to pour vs it takes to fill the other bottle
      let outpour = Math.min(currentState[i], needFill);

      pouredBottles[pouredBottles.length - 1][i] -= outpour;
      pouredBottles[pouredBottles.length - 1][j] += outpour;
    }
  }
  return pouredBottles;
}

// Get all possible next states from current state
// Get states from filling, emptying, and transfering.
function getNextStates(currentState, bottles, visited) {
  let filledBottles = fillBottles(bottles, currentState);
  // Don't repeat visited states
  filledBottles.filter((bottle) => !visited.has(bottle.toString()));

  let emptyBottlesList = emptyBottles(bottles, currentState);
  emptyBottlesList.filter((bottle) => !visited.has(bottle.toString()));

  let pouredBottles = pourBottles(bottles, currentState);
  pouredBottles.filter((bottle) => !visited.has(bottle.toString()));

  // Combine all three into one array, return result
  return filledBottles.concat(emptyBottlesList).concat(pouredBottles);
}

// Inputs:
// bottles: bottle capacities (array of numbers)
// amount: desired water quantity (number)
// Return the path history to target state (array of numbers)
function solve(bottles, amount) {
  const size = bottles.length;
  let rootState = new Array(size).fill(0); // initial state
  let queue = [[[], rootState]]; // queue has both the initial state and an empty path history
  let visited = new Set(); // tracks visited nodes

  while (queue.length > 0) {
    let currentArray = queue.shift();
    let currentState = currentArray[1];
    // Append current state to the state's path
    let currentPath = currentArray[0].concat([currentState]);

    if (!visited.has(currentState.toString())) {
      visited.add(currentState.toString()); // mark state as visited
      if (isGoal(currentState, amount)) {
        return currentPath;
      }
      nextStates = getNextStates(currentState, bottles, visited);
      // Add the next states and their paths to be processed later.
      nextStates.forEach((x) => queue.push([currentPath, x]));
    }
  }
  return null;
}

// Test
let input = [
  [[5, 3], 2],
  [[10, 2, 1], 8],
  [[2, 4], 1],
  [[3, 4, 2, 1], 8],
];

input.forEach(([bottles, amount]) => console.log(solve(bottles, amount)));
