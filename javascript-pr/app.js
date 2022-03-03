const fiboItemInputUser = parseInt(prompt('Enter your Number'));
const fiboItem = (countItem) => {
    let fibo = [0, 1];
    for (let i = 2; i <= countItem; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
let result = fiboItem(fiboItemInputUser);
console.log(result);