const { isUnique } = require('./Arrays/isUnique')
const { RemoveNthNode } = require('./Lists/RemoveNthNode')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const main = async () => {
  console.log(
    `
      0 - exit
      1 - Is Unique
      2 - Remove Nth Node from List
    `
  )
  readline.question('Choose your Option: ', (opt) => {
    switch (opt) {
      case '0': process.exit()
      case '1': {
        isUnique();
        break;
      }
      case '2': {
        RemoveNthNode();
        break;
      }
      default: console.warn('Invalid option!\n')
    }
    main()
  })
}

main()
