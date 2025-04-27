function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

ListNode.prototype.createRandomList = function (n) {
    if (n == 0) return null;
    let head = new ListNode(getRandomInt());
    let current = head;
    for (let i = 1; i < n; i++) {
        current.next = new ListNode(getRandomInt());
        current = current.next;
    }
    return head;
}

ListNode.prototype.printList = function () {
    process.stdout.write("[ " + this.val);
    let current = this.next;
    while (current != null) {
        process.stdout.write(" - " + current.val);
        current = current.next;
    }
    console.log(" ]");
}

function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min;
  }

module.exports = {ListNode};