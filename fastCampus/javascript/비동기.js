/*
* 비동기 사용 예시
* - Ajax Web API 요청
* - 파일 읽기
* - 암복호화
* - 작업 예약
* */

function work(callback) {
    /*
    * setTimeout
    * - 함수 내에 있는 작업이 백그라운드에서 실행
    * - 설정한 시간 이후에 작업 시작
    * - 실제로는 4ms 이후에 실행 -> 브라우저가 정한 최소 값이기 때문에
    *
    * callBack
    * - work() 함수가 끝난 다음에 어떤 작업을 처리하고 싶을 때 사용
    * - 콜백함수를 파라미터로 넘기면 파라미터로 받은 함수를 특정 작입이 끝나고 호출 해주는 것을 의미
    * */
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) { }
        const end = Date.now();
        console.log(end - start + 'ms')
        callback(end - start);
    }, 0)
}

console.log('작업 시작');
work((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 걸림');

});
console.log('다음 작업');