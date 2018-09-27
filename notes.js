console.log('Módulo de notas cargado')

const addNote = (title, body) => {
  console.log(`Nueva nota con título title, y texto body`)
  return 'Nueva nota con título title y texto body'
}

const removeNote = (title) => {
  console.log(`Nota con título title borrada`)
  return `Nota title borrada `
}

const listNote = () => {
  console.log('Listado de notas')
  return 'Listado de notas'
}

const readNote = (title) => {
  console.log(`Leo nota con título title`)
  return `Leo nota con título title`
}

module.exports = {
  addNote,
  removeNote,
  listNote,
  readNote
}
