// Returns an array of the fractions, as strings,
// of the given diagram between index i and j
function enumerate(i,j) {
    let result = [];
    // Change in the numerator and denominator
    // [down, up-right, right, down-left]
    const directions = [[2, 0], [-2, 2], [0, 2], [2, -2]];
    // Index for traversing directions
    let dir_idx = 0;

    // Numerator and denominator starting values
    let num = 2, denom = 2;
    
    // Start at either 1 or i, whichever one is smaller
    let start = Math.min(1, i);
    for (let index = start; index <= j; index++) {
        // Push null to result if index is less than 1
        if (index < 1) {
            result.push(null);
        }
        else {
            // Only push fraction is its index is between i and j
            if (index >= i) {
                result.push(`${num}/${denom}`);
            }

            // Update fraction's values
            num += directions[dir_idx % 4][0];
            denom = denom + directions[dir_idx % 4][1];

            // Direction changes at an edge,
            if (denom == 2 || num == 2) {
                dir_idx++; 
            }
        }
    }

    return result;
}

// Test cases
const input = [
    [1, 2],
    [3, 6],
    [-1, 4],
    [-4, 0],
    [1, 1]
]

for (let idx = 0; idx < input.length; idx++)
{
    let i = input[idx][0], j = input[idx][1];
    console.log(enumerate(i, j))
}