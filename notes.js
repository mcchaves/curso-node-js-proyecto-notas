console.log('Módulo de notas cargado')

const addNote = () => {
  console.log('Nueva nota')
  return 'Nueva nota'
}

/* creo el módulo para añadir nota
module.exports.addNote = function () {
  console.log('Nueva nota')
  return 'Nueva nota'
}
*/

const removeNote = (id) => {
  console.log(`Nota con id ${id} borrada`)
  return 'Nota borrada'
}

module.exports = {
  addNote,
  removeNote
}
