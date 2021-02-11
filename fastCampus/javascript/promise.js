/* callBack을 사용할 경우 */
function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased);
        }
    }, 1000)
}

increaseAndPrint(0, n => {
   increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
         increaseAndPrint(n, n => {
             increaseAndPrint(n, n => {
                 console.log('작업 끝!')
             })
         })
      });
   });
});


/*
* promise를 사용한 경우
* - 성공할 경우 resolve, 실패할 경우 reject
* */
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result');
        // reject(new Error());
    }, 1000)
});

myPromise.then(result => {
    console.log(result);
}).catch(e => {
    console.log(e);
})


function increaseAndPrintWithPromise(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFive';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000)
    });
}

increaseAndPrintWithPromise(0).then(n => {
    return increaseAndPrintWithPromise(n);
}).then(n => {
    return increaseAndPrintWithPromise(n);
}).then(n => {
    return increaseAndPrintWithPromise(n);
}).then(n => {
    return increaseAndPrintWithPromise(n);
}).then(n => {
    return increaseAndPrintWithPromise(n);
}).catch(e => {
    console.error(e);
})

increaseAndPrintWithPromise(0)
    .then(increaseAndPrintWithPromise)
    .then(increaseAndPrintWithPromise)
    .then(increaseAndPrintWithPromise)
    .then(increaseAndPrintWithPromise)
    .then(increaseAndPrintWithPromise)
    .catch(e => {
        console.error(e);
    })