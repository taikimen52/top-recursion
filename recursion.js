function fibs(num) {
    const arr = [] 
    for(let i = 0; i < num; i++){
        if(i === 0) {
            arr.push(i);
        }else if(i === 1){
            arr.push(1);
        }else {
            el = arr[i-1] + arr[i-2];
            arr.push(el);
        }
    }
    return arr;
}

const res = fibs(8)
console.log(res)

function fibsRec(n){
  // ベースケース
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // 再帰呼び出し
  const prev = fibsRec(n - 1);
  const len = prev.length;

  // 末尾に次の値を追加
  prev.push(prev[len - 1] + prev[len - 2]);

  return prev;
}

const resRec = fibsRec(4)
console.log(resRec)

function mergeSort(arr){
    // Base case
    if(arr.length === 0) return [];
    if(arr.length === 1) return arr;

    // recursive method
    if(arr.length % 2 === 0){
        
    }
}