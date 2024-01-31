const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

let cmd = ''

function printoutput(description, cmd) {
  description && console.log(`> ${description}`)
  cmd && console.log(`> cmd:${cmd}`)
  console.log('  --- --- ---')
}

// Verifica se sono stati forniti tutti gli argomenti necessari
if (process.argv.length < 4) {
  console.error('Usage: node script.js <repository_url> <tag_name>')
  process.exit(1)
}

// Argomenti
const repoUrl = process.argv[2]
const tagName = process.argv[3]
const outputFolder = process.argv[4]

// Cartella di destinazione per il clone
const destinationPath = path.join(process.cwd(), outputFolder)

console.log('  --- --- --- --- --- --')
console.log('\n  PRIMEVUE DOC GENERATOR\n')
console.log('  --- --- --- --- --- --')
console.log('> repoUrl:', repoUrl)
console.log('> tagName:', tagName)
console.log('> outputFolder:', outputFolder)
console.log('  --- --- ---')

try {
  printoutput('Check output folder..')

  // Verifica se la cartella di destinazione esiste e, se sì, la elimina
  if (fs.existsSync(destinationPath)) {
    printoutput(`The output folder ${destinationPath} already exists. Deleting...`)
    fs.rmdirSync(destinationPath, { recursive: true })
    printoutput(`The output folder ${destinationPath} has been deleted`)
  }

  //Effettua il clone della repository nella cartella di destinazione
  cmd = `git clone ${repoUrl} ${destinationPath}`
  printoutput(`Cloning primevue repository into ${destinationPath} folder`, cmd)
  execSync(cmd, { stdio: 'inherit' })

  // Sposta il repository clonato nella cartella di destinazione
  process.chdir(destinationPath)

  // Sposta il repository al tag specificato
  cmd = `git checkout ${tagName}`
  printoutput(`Checkout to ${tagName} tag`, cmd)
  execSync(cmd, { stdio: 'inherit' })

  printoutput(`Clonato e spostato con successo al tag ${tagName} nella cartella ${destinationPath}.`)

  // Vai nella cartella di destinazione (repo Node.js)
  process.chdir(destinationPath)

  // Installa le dipendenze con npm
  cmd = 'npm ci'
  printoutput('Install dependencies..', cmd)
  execSync(cmd, { stdio: 'inherit' })

  // Compila il progetto nuxt
  cmd = 'npm run build'
  printoutput('Build packages..', cmd)
  execSync(cmd, { stdio: 'inherit' })

  console.log('  --- --- --- --- --- --')
  console.log('\n COMPLETED SUCCESFULLY!\n')
  console.log('  --- --- --- --- --- --')
  console.log(`> Doc succesfully generated into ${destinationPath} path!`)
  cmd = 'yarn preview:preview-doc'
  printoutput('Execute following command to open the preview..', cmd)

} catch (error) {
  console.error(`Errore: ${error.message}`)
  process.exit(1)
}
