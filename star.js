// console.log('the precess is ', process.argv);

module.exports = function (numberOfStars = 10, string ='hi') {

    let stars = ''

    for (let i = 0; i < numberOfStars ; i++) {
        stars += '*'
    }
    
        console.log(stars)
        console.log(string)
        console.log(stars)
        // return
    

}


