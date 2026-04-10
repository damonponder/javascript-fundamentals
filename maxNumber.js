const nums = [3, 30, 34, 5, 9];

function findMax(nums) {
    let answer = nums[0];

    for (let i = 1; i < nums.length; i++ ) {
         if (nums[i] > answer)
            answer = nums[i];
    }
    return answer
}
console.log(findMax(nums));