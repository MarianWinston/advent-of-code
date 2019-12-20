const fs = require('fs');

const MASSES = fs
        .readFileSync('masses.txt')
        .toString()
        .split('\n')

const Day = (num, func1, func2) => {
    console.log(`-->  Day ${num}  <--`)
    func1()
    func2()
}

const theRocketEquation = () => {
    const reducer = (acc, curr) => parseInt(acc) + parseInt(~~(curr/3) - 2)
    MASSES.unshift("0")
    let totalFuel = MASSES.reduce(reducer)
    console.log(`Rocket Equation Answer: ${totalFuel}`)
}

const rocketDoubleChecker = () => {
    const reducer = (acc, curr) => {
        let adder = 0
        while(curr/3 - 2 > 0) {
            curr = ~~(curr/3) - 2
            adder += curr
        }
        return acc + adder
    }

    let totalFuel = MASSES.reduce(reducer, 0)

    console.log(`Rocket Equation Answer - Part 2: ${totalFuel}`)
}

const programAlarm = () => {
    const opcode = fs.readFileSync('opcode.txt').toString().split(",")
    opcode[1] = 12
    opcode[2] = 2
    
    let index = 0

    while (opcode[index] != 99) {
        let firstPos = opcode[index + 1]
        let secondPos = opcode[index + 2]
        let resultPos = opcode[index + 3]

        if(opcode[index] == 1) {
            opcode[resultPos] = ~~(opcode[firstPos]) + ~~(opcode[secondPos])
        } else if (opcode[index] == 2) {
            opcode[resultPos] = ~~(opcode[firstPos]) * ~~(opcode[secondPos])
        }
        index += 4
    }
    console.log(`1202 Program Alarm Answer: ${opcode[0]}`)
}

const partTwoProgramAlarm = () => {
    
    for(let i = 0; i <= 99; i++) {
        for(let j = 0; j <= 99; j++) {
            const opcode = fs.readFileSync('opcode.txt').toString().split(",")
            opcode[1] = i
            opcode[2] = j
            
            let index = 0

            while (opcode[index] != 99) {
                let firstPos = opcode[index + 1]
                let secondPos = opcode[index + 2]
                let resultPos = opcode[index + 3]

                if(opcode[index] == 1) {
                    opcode[resultPos] = ~~(opcode[firstPos]) + ~~(opcode[secondPos])
                } else if (opcode[index] == 2) {
                    opcode[resultPos] = ~~(opcode[firstPos]) * ~~(opcode[secondPos])
                }
                if(opcode[0] == 19690720) {
                    console.log(`1202 Program Alarm Answer - Part 2: ${(100 * opcode[1]) + opcode[2]}`)
                    return
                }
                index += 4
            }
        }
    }
}

Day(1, theRocketEquation, rocketDoubleChecker)
Day(2, programAlarm, partTwoProgramAlarm)



