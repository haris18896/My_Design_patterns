const Singleton = (() => {
  let instance

  const createInstance = () => {
    let object = new Object('this is an instance')
    return object
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()

const run = () => {
  let inst1 = Singleton.getInstance()
  let inst2 = Singleton.getInstance()

  console.log(`same Instance ? ${inst1 === inst2}`)
}

run()
