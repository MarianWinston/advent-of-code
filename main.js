const fs = require('fs');

const theRocketEquation = () => {
    const MASSES = fs
        .readFileSync('masses.txt')
        .toString()
        .split('\n')
        
    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(Math.floor(currentValue/3) - 2)

    MASSES.unshift("0")
    let totalFuel = MASSES.reduce(reducer)

    console.log(`Day 1 Answer: ${totalFuel}`)
}

theRocketEquation()
