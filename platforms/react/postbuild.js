// postbuild.js
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, './dist/index.js')
const fileContent = fs.readFileSync(filePath, 'utf-8')
const newContent = `"use client";\n${fileContent}`

fs.writeFileSync(filePath, newContent, 'utf-8')
console.log('Prepended "use client" to the output file.')
