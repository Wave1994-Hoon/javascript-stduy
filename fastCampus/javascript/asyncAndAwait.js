function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
    await sleep(1000);
    throw new Error();

}

async function process1() {
    console.log('안녕하세요');
    await sleep(1000); // promise 앞에 await 붙임, .then 할 필요 없음
    console.log('반갑습니다. !');
    // return 은 promise
}

async function process2() {
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}

process1();