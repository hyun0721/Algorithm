/**
 * 
 * 100 이하의 자연수 A,B,C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
 * (정렬 사용 X)
 * 
 * [입력]
 * 첫 번째 줄에 100이하의 세 자연수가 입력됨.
 * 
 * [출력]
 * 첫 번째 줄에 가장 작은 수를 출력
 * 
 */

export default function(){

    let inputArray = [6, 5, 11];
    let minNumber = Number.MAX_SAFE_INTEGER;


    for(let target of inputArray){
        if(target <= minNumber){
            minNumber = target;
        }
    }

    return minNumber;

}