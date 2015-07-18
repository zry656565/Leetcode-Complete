/****
 * Solution of https://leetcode.com/problems/contains-duplicate-ii/
 * @author: Jerry Zou
 * @date: 2015.7.18
 **/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var hashTable = {},
        len = Math.min(nums.length, k + 1);
        
    // initialize the first window
    for (var i = 0; i < len; i++) {
        if (!hashTable[ nums[i] ]) {
            hashTable[ nums[i] ] = true;
        } else {
            return true;
        }
    }

    while (i < nums.length) {
        delete hashTable[ nums[i-k-1] ];
        if (!hashTable[ nums[i] ]) {
            hashTable[ nums[i] ] = true;
        } else {
            return true;
        }
        i++;
    }

    return false;
};