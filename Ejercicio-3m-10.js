"user strict"

let nums = [5, 10, 7, 15, 12];
let maxNum = nums[0]; 

for (let i = 0; i < nums.length; i++) {
    
    if (nums[i] > maxNum) {
        maxNum = nums[i]; 
    }
}

alert(maxNum);  
