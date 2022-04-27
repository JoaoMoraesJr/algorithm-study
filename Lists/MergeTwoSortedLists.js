//LeetCode: You are given the heads of two sorted linked lists list1 and list2.
//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//Return the head of the merged linked list.

class ListNode {
    constructor (val, next) {
        this.val = (val === undefined ? null : val);
        this.next = (next === undefined ? null : next);
    }
}

var mergeSortedLists = function(head1, head2) {
    let mergedList = null;
    let lastNode = null
	while(head1 != null || head2 != null) {
        let nodeToAdd = null;
		if ((head1 != null && head2 != null && head1.val < head2.val) || (head1!=null && head2==null)) {
			nodeToAdd = head1;
			head1 = head1.next;
		}else{
			nodeToAdd = head2;	
			head2 = head2.next;
		}
        if (mergedList) {
            lastNode.next = nodeToAdd;
            lastNode = lastNode.next;
        } else {
            mergedList = nodeToAdd;
            lastNode = mergedList;
        }
	}
    return mergedList;
};

head = mergeSortedLists (new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4))));
while (head != null) {
    console.log (head.val);
    head = head.next;
}