function find(nums) {
    /* Calculates the maximum number of consecutive 33s in a list of numbers */
    let max_count = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        // If the number is exactly 33, increment count
        if (nums[i] === 33) {
            count++;
        }
        // If not, update max_count, if current streak exceedes max_count 
        // reset count
        else {
            max_count = max_count < count ? count : max_count;
            count = 0;
        }
    }
    max_count = max_count < count ? count : max_count;
    return max_count;
}

const num_lists = [
    [33,33,30,33,33,33],
    [33,0,33,33,0,33],
    [33,-10,33,33,8,3,33,33,9,33,33,33,33,33,33],
    [33,33,5,33,33,33],
    [null, "house", 9, undefined, "33"],
    [33,33,30,33,33,33.0]
];

for (let i = 0; i < num_lists.length; i++) {
    console.log(find(num_lists[i]));
}