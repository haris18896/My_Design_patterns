class OperationBuilder {
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
