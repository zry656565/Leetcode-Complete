/****
 * Solution of https://leetcode.com/problems/excel-sheet-column-number/
 * @author: Jerry Zou
 * @date: 2015.6.4
 **/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var column = 0,
        i = s.length-1,
        A = 'A'.charCodeAt(0),
        base = 1;

    for (; i >= 0; i--) {
        column += (s.charCodeAt(i) - A + 1) * base;
        base *= 26;
    }

    return column;
};