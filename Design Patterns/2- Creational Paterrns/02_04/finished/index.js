var scout_prototype = require('./scout_prototype')

var alex = scout_prototype.clone()
alex.name = 'Alex Banks' // setting the name
alex.addItemToList('slingshot')

var eve = scout_prototype.clone()
eve.name = 'Eve Porcello' // setting the name
eve.addItemToList('reading light')

console.log(`${alex.name}: ${alex.shoppingList}`)
console.log(`${eve.name}: ${eve.shoppingList}`)
