// function takeStars(one, two){
//      import('./star.js')
// }

const takeStars = () => import('./star.js')

takeStars(process.argv[2], process.argv[3])

// console.log(process.argv);