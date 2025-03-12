const fs = require('fs');
const readline = require('readline');

const calculateQuadEquation = (a, b, c) => {
    console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

    const D = b * b - 4 * a * c;
    if (D > 0) {
        const x1 = parseFloat(((-b + Math.sqrt(D)) / (2 * a)).toFixed(3));
        const x2 = parseFloat(((-b - Math.sqrt(D)) / (2 * a)).toFixed(3));
        return `There are 2 roots: x1 = ${x1}, x2 = ${x2}`;
    } else if (D === 0) {
        const x = parseFloat((-b / (2 * a)).toFixed(3));
        return `There is 1 root: x = ${x}`;
    } else {
        return 'There are 0 real roots';
    }
};

const interactiveMode = () => {
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout 
    });
    
    const askForNumber = (question, validate, callback) => {
        rl.question(question, (input) => {
            const num = Number(input);
            if (isNaN(num) || (validate && !validate(num))) {
                console.log(`Error. Expected a valid real number, got ${input} instead`);
                askForNumber(question, validate, callback);
            } else {
                callback(num);
            }
        });
    };

    askForNumber('a = ', (num) => num !== 0, (a) => {
        askForNumber('b = ', null, (b) => {
            askForNumber('c = ', null, (c) => {
                console.log(calculateQuadEquation(a, b, c));
                rl.close();
            });
        });
    });
};

const fileMode = (filePath) => {
    if (!fs.existsSync(filePath)) {
        console.log(`Error. File ${filePath} does not exist`);
        process.exit(1);
    }

    try {
        const data = fs.readFileSync(filePath, 'utf8').trim();
        const parts = data.split(',').map(Number);
        
        if (parts.length !== 3 || parts.some(isNaN)) {
            throw new Error('Invalid file format');
        }
        if (parts[0] === 0) {
            throw new Error('Error. a cannot be 0');
        }
        
        console.log(calculateQuadEquation(...parts));
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

const filePath = process.argv[2];
if (filePath) {
    fileMode(filePath);
} else {
    interactiveMode();
}