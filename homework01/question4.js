// Takes in 2 numbers (either strings or whole numbers)
// Reverses the numbers, adds them, reverses the sum.
function reversedSum(num1, num2) {
    let n1 = Number(num1), n2 = Number(num2);
    let reverse_n1 = reverseNumber(n1);
    let reversed_n2 = reverseNumber(n2);
    let regular_sum = reverse_n1 + reversed_n2;
    return reverseNumber(regular_sum);
}

function reverseNumber(num) {
    // Takes a number and reverses its digits
    let reversed = 0;
    let digit;
    while (num > 0) {
        digit = num % 10;
        reversed = reversed * 10 + digit;
        num = (num - digit) / 10;
    }
    return reversed;
}

const input = [
    ["24", 1],
    [4358 , "754"],
    [305, 794],
    ["30", 0]
]

for (let i = 0; i < input.length; i++)
{
    let num1 = input[i][0], num2 = input[i][1];
    console.log(reversedSum(num1, num2))
}