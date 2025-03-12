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