/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Dropbox.

Given the root to a binary search tree, find the second largest node in the tree.
*/

class Node {
  constructor(value,left=null,right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  addLeft(yourLeft) {
    this.left = yourLeft;
    return yourLeft;
  }

  addRight(yourRight) {
    this.right = yourRight;
  }
}

const findLargestChild = (yourNode) => {
  let largest = yourNode.value;
  if (yourNode.left != null) {
    if (yourNode.left.value > largest) {
      largest = yourNode.left.value;
    }
  }
  console.log("now = ", yourNode.value, ", largest = ", largest)
  if (yourNode.right != null) {
    if (yourNode.right.value > largest) {
      largest = yourNode.right.value;
    }
  }
  console.log("now = ", yourNode.value, ", largest = ", largest)
  if (yourNode.left != null) {
    if (findLargestChild(yourNode.left) > largest) {
      largest = findLargestChild(yourNode.left);
    }
  }
  console.log("now = ", yourNode.value, ", largest = ", largest)
  if (yourNode.right != null) {
    if (findLargestChild(yourNode.right) > largest) {
      largest = findLargestChild(yourNode.right);
    }
  }
  console.log("now = ", yourNode.value, ", largest = ", largest)
  return largest
}

let root = new Node(0)
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)
let node8 = new Node(8)
let node9 = new Node(9)
let node10 = new Node(10)
root.addLeft(node1)
root.addRight(node2)
node1.addLeft(node3)
node1.addRight(node4)
node2.addLeft(node5)
node2.addRight(node6)
node3.addLeft(node7)
node3.addRight(node8)
node4.addLeft(node9)
node4.addRight(node10)

console.log(root)

$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();
  $('#output-section-1').text(input1);
  })
});
