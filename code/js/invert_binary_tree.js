/****
 * Solution of https://leetcode.com/problems/invert-binary-tree/
 * @author: Jerry Zou
 * @date: 2015.6.16
 **/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;

    var tmp = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(tmp);

    return root;
};