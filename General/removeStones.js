
//Time complexity = O(k*n)
//Space complexity = O(1)
var minStoneSumBruteForce = function(piles, k) {
    for (let i = 0; i < k; i++) {
        let biggestPile = 0;
        piles.forEach((pile, i) => {
            if (pile > piles[biggestPile]) {
                biggestPile = i;
            }
        });
        piles[biggestPile] = Math.ceil(piles[biggestPile]/2);
    }
    let result = 0;
    piles.forEach(pile => {
        result+=pile;
    });
    return result;
}

//Merge sort
//Time complexity = O (n log n + k*log n) -> log n for insertion since insertion will not go through all array
//Space complexity = O (n) 
var minStoneSumMergeSort = function(piles, k) {
    function mergeSort(array) {
        if(array.length == 1) return array;
        let halfLength = Math.ceil(array.length/2);
        let leftArray = mergeSort(array.slice(0, halfLength));
        let rightArray= mergeSort(array.slice(halfLength, array.length));
        let leftPointer = 0;
        let rightPointer = 0;
        let sortedArray = []
        for(let i = 0; i < array.length; i++) {
            if (leftArray[leftPointer] >= rightArray[rightPointer] || leftArray[leftPointer] == null) {
                sortedArray.push(rightArray[rightPointer]);
                rightPointer++;
            }else{
                sortedArray.push(leftArray[leftPointer]);
                leftPointer++
            }
        }
        return sortedArray;
    }
    piles = mergeSort(piles);
    for (let i = 0; i < k; i++) {
        let halfPile = Math.ceil(piles.pop()/2);
        let pilePointer = 0;
        while(piles[pilePointer] < halfPile) {
            pilePointer++;
        };
        piles.splice(pilePointer, 0, halfPile);
    }
    let result = 0;
    piles.forEach(pile => {
        result+=pile;
    });
    return result;
};

//Heap
//Time complexity = O (n log n + k*log n) -> log n for insertion since insertion will not go through all array
//Space complexity = O (n) 
var minStoneSum = function(piles, k) {
    class Heap {
        constructor() {
            this.heap = [];
        }

        heapify(list) {
            list.forEach(el => {
                this.add(el);
            });
        }
        
        parent(index) {
            return Math.ceil(index/2 - 1);
        }

        leftChild(index) {
            return index*2+1;
        }

        rightChild(index) {
            return index*2+2;
        }

        sum() {
            return this.heap.reduce((a, b) => a+b);
        }

        //O(log n)
        add(value) {
            this.heap.push(value);
            this.bubbleUp();
        }

        //O(log n)
        remove(index = 0){
            this.swap(index, this.heap.length-1); //swap with last
            let value = this.heap.pop();
            this.bubbleDown();
            return value;
        }

        getBiggestChild(index) {
            if (this.rightChild(index) < this.heap.length && this.heap[this.rightChild(index)] > this.heap[this.leftChild(index)]) return this.rightChild(index);
            else return this.leftChild(index);
        }

        bubbleDown(index = 0) {
            while (this.leftChild(index) < this.heap.length && this.heap[this.getBiggestChild(index)] > this.heap[index]){
                let next = this.getBiggestChild(index);
                this.swap(index, next);
                index = next;
            }
        }

        bubbleUp() {
            let index = this.heap.length - 1;
            let parent = this.parent(index);
            while (parent >= 0 && this.heap[index] > this.heap[parent]) {
                this.swap(parent, index);
            }
        }

        swap (i1, i2) {
            let aux = this.heap[i1];
            this.heap[i1] = this.heap[i2];
            this.heap[i2] = aux;
        }
    }
    let heap = new Heap();
    heap.heapify(piles);
    for (let i = 0; i < k; i++) {
        let halfPile = Math.ceil(heap.remove()/2);
        heap.add(halfPile);
    }
    return heap.sum();
};

console.log(minStoneSum([5, 4, 9], 2));
console.log(minStoneSum([4, 3, 6, 7], 3));