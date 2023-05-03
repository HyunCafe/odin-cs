const fibs = (num) => {
    let fibArray = [1, 1];
    for (let i = 2; i < num; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
    } 
    return fibArray
}

const fibsRec = (n) => {
     if ( n <= 0) {
        return 0;
     } else if (n === 1) {
        return 1;
     } else {
        return fibsRec(n - 1) + fibsRec(n - 2);
     }
}