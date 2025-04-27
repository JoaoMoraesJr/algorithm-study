const { ListNode } = require('./ListNode')

//Description: Implement an algorithm to find the kth to last element of a singly linked list

//Time complexity: O(n)
//Space complexity: O(1)
function RemoveNthNodeWithRunner (head, position) {
    if (position <= 0) return;
    let fastPointer = head;
    for (let i = 0; i < position+1; i++) { // +1 to have space for removing the node
        if (fastPointer == null) return;
        fastPointer = fastPointer.next;
    }
    let slowPointer = head;
    while (fastPointer != null) {
        fastPointer = fastPointer.next;
        slowPointer = slowPointer.next;
    }
    slowPointer.next = slowPointer.next.next;
}

const RemoveNthNode = async () => {
    let head = new ListNode().createRandomList(10);
    head.printList();
    RemoveNthNodeWithRunner(head, 3);
    head.printList();
}

// RemoveNthNode();

module.exports = {RemoveNthNode};