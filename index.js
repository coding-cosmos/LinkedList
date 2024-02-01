class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  size() {
    let count = 0;
    let tmp = this.head;
    while (tmp.nextNode != null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }
  prepend(value) {
    this.head = new Node(value, this.head);
  }
  append(value) {
    let tmp = this.head;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = new Node(value, null);
    this.tail = tmp.nextNode;
  }
  at(index) {
    let count = 0;
    let tmp = this.head;
    while (count <= this.size()) {
      if (count == index) {
        return tmp;
      }
      count++;
      tmp = tmp.nextNode;
    }
    return "Index is not in the list";
  }
  pop() {
    let tmp = this.head;
    while (tmp.nextNode != this.tail) {
      tmp = tmp.nextNode;
    }
    this.tail = tmp;
    tmp.nextNode = null;
  }
  contains(value) {
      let tmp = this.head;
    while (tmp != null && tmp.value != value) {
      tmp = tmp.nextNode;
    }
    if (tmp != null) {
      return tmp.value == value;
    }
    return false;
  }
  find(value) {
    let count = 0;
    let tmp = this.head;
    while (tmp != null && tmp.value != value) {
      tmp = tmp.nextNode;
      count++;
    }
    if (tmp != null && tmp.value == value) {
      return count;
    } else {
      return null;
    }
  }
  toString() {
    let tmp = this.head;
    let s = "";
    while (tmp != null) {
      s += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }
    s += "null";

    return s;
  }
}

const list = new LinkedList();
list.prepend("sujal");
list.append("mittal");
list.prepend("coding");
list.append("Grand");
console.log(list.toString());
console.log(list.size());
// console.log(list.find("sujal"));
// console.log(list.at(3));
// console.log(list.contains("mittal"));
list.pop();
console.log(list.toString());
console.log(list.find("Grand"));
