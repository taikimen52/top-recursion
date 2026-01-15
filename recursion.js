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

function mergeSort(arr){
    // Base case
    if(arr.length === 0) return [];
    if(arr.length === 1) return arr;

    // deviding arr
    const num = arr.length;
    const num1 = Math.round(num / 2);
    const num2 = num - num1;

    const devidedArr1 = [];
    const devidedArr2 = [];
    
    for(let i = 0; i < num1; i++){
        devidedArr1.push(arr[i]);
    }

    for(let i = 0; i < num2; i++){
        devidedArr2.push(arr[num1+i]);
    }

    mergeSort(devidedArr1);
    mergeSort(devidedArr2);
    return merge(devidedArr1, devidedArr2, arr);


}

function merge(arr1, arr2, mergeArr) {
    const num1 = arr1.length;
    const num2 = arr2.length;

    let i = 0, j = 0;

    while(i < num1 && j < num2) {
        if(arr1[i] < arr2[j]){
            mergeArr[i+j] = arr1[i];
            i++;
        }else {
            mergeArr[i+j] = arr2[j]
            j++;
        }
    }
    while(i < num1) {
        mergeArr[i+j] = arr1[i];
        i++;
    }
    while(j < num2) {
        mergeArr[i+j] = arr2[j];
        j++;
    }
    return mergeArr;
    
}

console.log(mergeSort([1,8,7,5,6]))