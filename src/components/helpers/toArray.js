const toArray = (strings) => {

let arr = strings.split(",").map(string => string.trim())
return arr;

}
// console.log(toArray("christmas drag, futuristic/space?, favorite body part, fabulous drag, favorite drag look, cake couture, comedy outfit, patriotic drag, music performance, past era hairstyle, red carpet, hair ball look, jock makeover, money dress, swimsuit, cocktail dress, best drag"))

const index = (arr) => {
  return Math.floor(Math.random() * arr.length)
}
// console.log(index([1,2,3]))
// console.log([1,2,3].length)
const select = (arr) => {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

export {select}