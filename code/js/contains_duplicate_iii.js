/****
 * Solution of https://leetcode.com/problems/contains-duplicate-iii/
 * @author: Jerry Zou
 * @date: 2015.7.18
 **/

 /**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = Math.min(nums.length, k + 1),
        i, j;
        
    // initialize the first window
    for (i = 1; i < len; i++) {
        for (j = 0; j < i; j++) {
            if (Math.abs(nums[j] - nums[i]) <= t) {
                return true;
            }
        }
    }

    while (i < nums.length) {
        for (j = i-k; j < i; j++) {
            if (Math.abs(nums[j] - nums[i]) <= t) {
                return true;
            }
        }
        i++;
    }

    return false;
};