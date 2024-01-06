class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor(...args) {
    this.head = null;
    this.length = 0;
    for (let i = 0; i < args.length; i++) {
      this.insert(i, args[i]);
    }
  }

  get(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      if (node === null) {
        return null;
      }
      node = node.next;
    }
    return node.value;
  }

  insert(nth, value) {
    const insertedNode = new Node(value);
    this.length++;

    if (nth === 0) {
      if (this.head) {
        insertedNode.next = this.head;
      }
      this.head = insertedNode;
      return this;
    }

    let node = this.head;
    for (let i = 0; i < nth - 1; i++) {
      if (node.next === null) {
        node.next = new Node();
        this.length++;
      }
      node = node.next;
    }
    insertedNode.next = node.next;
    node.next = insertedNode;

    return this;
  }

  deleteAt(index) {
    let node = this.head;
    let prevNode = null;

    for (let i = 0; i < index; i++) {
      if (node === null) {
        return null;
      }
      prevNode = node;
      node = node.next;
    }
    if (node === null) {
      return null;
    }

    if (prevNode !== null) {
      prevNode.next = node.next;
    } else {
      this.head = node.next;
    }
    this.length--;
    return node.value;
  }

  toString() {
    let str = "[";
    let node = this.head;
    while (node !== null) {
      str += node.value.toString();
      if (node.next !== null) {
        str += ", ";
      }
      node = node.next;
    }
    str += "]";
    return str;
  }
}

// listがリスト
const list = new List(1, 2, 3);

function func() {
  console.time("func");
  for (let i = 1; i <= 10000; i++) {
    // リスト内のデータに添字でアクセスする（添字は0始まり）
    console.log(list.get(1)); //=> 2

    // リストにデータを追加する
    list.insert(2, 100); // 添字2の位置に100というデータを入れる
    console.log(list.toString()); //=> [1, 2, 100, 3]

    // リストからデータを削除する
    list.deleteAt(1);
    console.log(list.toString()); //=> [1, 100, 3]
  }
  console.timeEnd("func"); // 計測終了
}

func();
