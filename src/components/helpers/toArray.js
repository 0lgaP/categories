const toArray = (strings) => {

let arr = strings.split(",").map(string => string.trim().toLowerCase())
return arr;

}

console.log(toArray("sparkles, tulle, buttons and bows, create three looks based on sports balls; lady baller, basketball wife realness, and balls to the wall eleganza, planet of the capes, frozen eleganza, night of a thousand michelle visages, black wedding, stars & stripes forever, drag family resemblance, the color purple, eleganza extravaganza"))

const index = (arr) => {
  return Math.floor(Math.random() * arr.length)
}

const select = (arr) => {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

// export {select}