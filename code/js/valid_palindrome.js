/****
 * Solution of https://leetcode.com/problems/valid-palindrome/
 * @author: Jerry Zou
 * @date: 2015.6.11
 **/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var str = s.replace(/[\W]/ig, '').toUpperCase();
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};