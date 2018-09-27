console.log('Iniciando aplicacion de notas')
const notas = require('./notes')
const { argv } = require('yargs')
const proceso = argv._[0]

/*
const proceso = process.argv[2]

console.log(process.argv)
console.log('Proceso: ', proceso)
*/
if (proceso === 'add') {
  notas.addNote(argv.title, argv.body)
} else if (proceso === 'list') {
  notas.listNote()
} else if (proceso === 'read') {
  notas.readNote(argv.title)
} else if (proceso === 'remove') {
  notas.removeNote(argv.title)
} else {
  console.log('Este comando no existe')
}
