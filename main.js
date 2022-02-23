
// Function that takes 1 argument (n) and returns the sum of the total from n until 1 (USING FOR LOOP)

function add(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(add(5));


// Function that takes 1 argument (n) and returns the sum of the total from n until 1 (USING WHILE LOOP)

function add(n) {
    let sum = 0;
    let i = 1;
    while(i <= n) {
        sum += i;
        i++;
    }
    return sum;
}

console.log(add(5));