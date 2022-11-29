// console.log('the precess is ', process.argv);


function takeStars(numberOfStars, string) {

    let stars = '*'
    let printStars =''

    if (numberOfStars < 1 && string === '' || !string) {
        numberOfStars = 10
        
        let i = 0
        while (i < numberOfStars) {
            printStars += stars
            i++
        }
        string = 'hi'
        
        console.log(printStars)
        console.log(string)
        console.log(printStars)
        return
    }

    if (string === '' || !string) {
        let i = 0
        while (i < numberOfStars) {
            printStars += stars
            i++
        }
        string = 'hi'
        console.log(printStars)
        console.log(string)
        console.log(printStars)
        return
    }


    if (numberOfStars < 1 || !numberOfStars) {
        numberOfStars = 10
        
        let i = 0
        while (i < numberOfStars) {
            printStars += stars
            i++
        }
        console.log(printStars)
        console.log(string)
        console.log(printStars)
        return
    } 

    let i = 0
    while (i < numberOfStars) {
        printStars += stars
        i++
    }
        console.log(printStars)
        console.log(string)
        console.log(printStars)
        return
    

}

takeStars()


export default takeStars
