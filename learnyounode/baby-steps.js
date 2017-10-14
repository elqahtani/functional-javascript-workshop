for (i = 2, sum = 0; i <= process.argv.length; i++) {
    num = Number(process.argv[i]);
    sum += num;
}
console.log(sum);
