/****
 * Solution of https://leetcode.com/problems/contains-duplicate/
 * @author: Jerry Zou
 * @date: 2015.7.18
 **/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hashTable = {},
        i = 0;

    while (i < nums.length) {
        if (!hashTable[ nums[i] ]) {
            hashTable[ nums[i] ] = true;
        } else {
            return true;
        }
        i++;
    }

    return false;
};