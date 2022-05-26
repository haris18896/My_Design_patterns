// write a script that prints the following: operations.add(1).add(5).add(9)  // output: 15
class Operations {
  constructor(builder) {
    this.value = builder.value || 0
  }
}

class OperationBuilder {
  constructor() {
    this.value = 0
  }

  add(n) {
    this.value += n
    return this
  }

  build() {
    return new Operations(this)
  }
}

console.log(new OperationBuilder().add(1).add(5).add(9).build())

// ***************************************************************************************
class Operations {
  constructor() {
    this.value = 0
  }

  add(n) {
    this.value += n
    return this
  }

  show() {
    return this.value
  }
}

let adder = new OperationBuilder().add(1).add(5).add(9)
console.log(adder.show())
// ***************************************************************************************
