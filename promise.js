function promiseReduce(asyncFunctions, reduce, initialValue) {
    let result = initialValue;
    let count = 0;

    async function countPromise(index) {
        if (index === asyncFunctions.length) {
            console.log(result);
            return;
        }

        let asyncF = await asyncFunctions[index]();
        result = reduce(result, asyncF);
        count++;
        countPromise(count)
    }
    countPromise(count)
}


var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
  }
  
var fn2 = () => new Promise(resolve => {
console.log('fn2')
setTimeout(() => resolve(2), 1000)
})
  
promiseReduce(
    [fn1, fn2], 
    function (memo, value) {
      console.log('reduce')
      return memo * value
    }, 
    1
  )
