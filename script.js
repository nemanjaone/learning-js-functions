const nums = [3, 3];
const target = 6;

var twoSum = function (nums, target) {
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        for (let j = 1; j < nums.length; j++) {
            let b = nums[j];
            cur = a + b;
            if (i != j) {
                if (cur === target) {
                    console.log(i, j);
                    retArray = [i, j];
                    return retArray;
                }
            } else {
                break;
            }
        }
    }
};

twoSum(nums, target);