import * as codes from '../src/index.mjs'

const COLUMNS = 7

function _groupTexts(arr) {
  return arr.reduce((acc, item, index) => {
      if (index % COLUMNS === 0) acc.push([]);
      acc[acc.length - 1].push(item);
      return acc;
  }, []);
}


console.log(`Testing ${codes.magenta_bold('tinguir')}...\n`)

let texts= []

Object.values(codes)
  .filter((c) => c.name !== 'uncolor')
  .map((c) => {
  texts.push(c(`${c.name}`))
})

const groups = _groupTexts(texts)

groups.map((group) => {
  console.log(group.join('\t'))
  console.log('')
})
