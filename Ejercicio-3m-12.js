"user strict"

let nums = [3, 2, 4, 1];
let maxSum = 0; 

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        let currentSum = nums[i] + nums[j]; 

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
}

alert(maxSum);  