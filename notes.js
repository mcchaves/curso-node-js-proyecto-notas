console.log('Módulo de notas cargado')

const addNote = (title, body) => {
  console.log(`Nueva nota con título, y texto`, title, body)
  return 'Nueva nota'
}

const removeNote = (title) => {
  console.log(`Nota borrada`, title)
  return `Nota title borrada `
}

const listNote = () => {
  console.log('Listado de notas')
  return 'Listado de notas'
}

const readNote = (title, body) => {
  console.log(`Leo nota`, title, body)
  return `Leo nota con título title`
}

module.exports = {
  addNote,
  removeNote,
  listNote,
  readNote
}
