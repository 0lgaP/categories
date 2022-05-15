// const toArray = (strings) => {

// let arr = strings.split(",").map(string => string.trim().toLowerCase())
// return arr;
// }

// console.log(toArray(""))

// const index = (arr) => {
//   return Math.floor(Math.random() * arr.length)
// }

const select = (arr) => {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

export {select}