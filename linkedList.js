import Node from './node.js';

class linkedList {
  constructor() {
    this.listHead = null;
  }

  append(data) {
    const newNode = new Node();
    newNode.value = data;
    if (!this.listHead) {
      this.listHead = newNode;
    } else {
      let current = this.listHead;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(data) {
    const newlistHead = new Node();
    newlistHead.value = data;

    if (this.listHead) {
      newlistHead.nextNode = this.listHead;
      this.listHead = newlistHead;
    } else {
      this.listHead = newlistHead;
    }
  }

  size() {
    if (this.listHead) {
      let count = 1;
      let current = this.listHead;
      while (current.nextNode) {
        current = current.nextNode;
        count++;
      }
      return count;
    } else {
      return 0;
    }
  }

  head() {
    if (this.listHead) {
      return this.listHead;
    } else {
      return 'The list is empty';
    }
  }

  tail() {
    if (this.listHead) {
      let current = this.listHead;

      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    } else {
      return 'The list is empty';
    }
  }

  pop() {
    if (this.listHead) {
      let current = this.listHead;
      let prev = null;

      while (current.nextNode) {
        prev = current;
        current = current.nextNode;
      }
      prev.nextNode = null;
    } else {
      console.log('The list is empty');
    }
  }

  at(index) {
    if (this.listHead) {
      if (index === 0) {
        return this.listHead.value;
      } else {
        let current = this.listHead;
        let i = 0;

        while (current.nextNode) {
          current = current.nextNode;
          i++;
          if (i === index) {
            return current;
          }
        }
        return 'Index out of bounds';
      }
    }
  }

  insertAt(value, index) {
    if (!this.listHead) {
      console.log('The list is empty');
      return;
    }

    if (index === 0) {
      let newHead = new Node();
      newHead.value = value;
      newHead.nextNode = this.listHead;
      this.listHead = newHead;
      return;
    }

    let current = this.listHead;
    let prev = null;
    let i = 0;

    while (current && i < index) {
      prev = current;
      current = current.nextNode;
      i++;
    }

    if (i === index) {
      let insNode = new Node();
      insNode.value = value;
      prev.nextNode = insNode;
      insNode.nextNode = current;
    } else {
      console.log('Index out of bounds');
    }
  }

  removeAt(index) {
    if (!this.listHead) {
      console.log('The list is empty');
      return;
    }

    if (index === 0) {
      let next = this.listHead.nextNode;
      this.listHead = next;
      return;
    }

    let current = this.listHead;
    let prev = null;
    let i = 0;

    while (current && i < index) {
      prev = current;
      current = current.nextNode;
      i++;
    }

    if (current) {
      prev.nextNode = current.nextNode;
    } else {
      console.log('Index out of bounds');
    }
  }

  contains(value) {
    if (this.listHead) {
      let current = this.listHead;

      if (current.value === value) {
        return true;
      }

      while (current.nextNode) {
        current = current.nextNode;
        if (current.value === value) {
          return true;
        }
      }
      return false;
    }
  }

  find(value) {
    if (this.listHead) {
      let current = this.listHead;
      let i = 0;

      if (current.value === value) {
        return 0;
      } else {
        while (current.nextNode) {
          current = current.nextNode;
          i++;
          if (current.value === value) {
            return i;
          }
        }
        return null;
      }
    }
  }

  toString() {
    if (this.listHead) {
      let output = `( ${this.listHead.value} ) -> `;
      let current = this.listHead;

      while (current.nextNode) {
        current = current.nextNode;
        output += `( ${current.value} ) -> `;
      }
      output += `null`;
      return output;
    } else {
      return 'The list is empty';
    }
  }
}

export default linkedList;
