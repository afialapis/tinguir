import * as codes from '../src/index.mjs'

console.log(`Testing ${codes.magenta_bold('tinguir')}...\n`)

let texts= []

Object.values(codes).map((c) => {
  texts.push(c(`${c.name}`))
})

console.log(texts.join(', '))
console.log('')
