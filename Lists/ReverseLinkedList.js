//Leetcode: Given the head of a singly linked list, reverse the list, and return the reversed list.

class ListNode {
    constructor (val, next) {
        this.val = (val === undefined ? null : val);
        this.next = (next === undefined ? null : next);
    }
}

//Time Complexity: O(n)
//Space Complexity: O(1)
var reverseLinkedList = function (head) {
	if (head == undefined || head.next == null) return head;
	let node = head.next;
	head.next = null;
	while (node != null)  {
		let nextNode = node.next;
		node.next = head;
		head = node;
		node = nextNode;
	}
	return head;
}

head = reverseLinkedList (new ListNode(1, new ListNode(2, new ListNode(3))));
while (head != null) {
    console.log (head.val);
    head = head.next;
}