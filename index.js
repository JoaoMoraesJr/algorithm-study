const { isUnique } = require('./Arrays/isUnique')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const main = async () => {
  console.log(
    `
      0 - exit
      1 - Is Unique
    `
  )
  readline.question('Choose your Option: ', (opt) => {
    switch (opt) {
      case '0': process.exit()
      case '1': {
        isUnique();
        break;
      }
      default: console.warn('Invalid option!\n')
    }
    main()
  })
}

main()
