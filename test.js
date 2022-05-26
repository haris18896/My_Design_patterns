class Operations {
  value(n) {
    this.n = n
    return this
  }

  add(n) {
    this.n += value(n)
    return this
  }
}

// console.log(OperationsWithStatic.add(1).add(5).add(9)) // output: 15
console.log(Operations.add(1)) // output: 2
