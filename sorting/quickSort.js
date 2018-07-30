let quickSort = (A, low, high) => {
    if(low < high){
        let q = partition(A, low, high);
        quickSort(A, low, q - 1);
        quickSort(A, q + 1, high);
    }
}

let partition = (A, low, high) => {
    let x = A[high];
    let i = low - 1;
    for(let j = low; j <= high - 1; j++){
        if(A[j] <= x){
            i = i + 1;
            swap(A, i, j);
        }
    }
    swap(A, i + 1, high);
    return i + 1;
}

let swap = (A, i, j) => {
    let tmp = A[i];
    A[i] = A[j];
    A[j] = tmp;
}

let A = [8, 1, 6, 2, 5, 9];

console.log("Before", A);
quickSort(A, 0, A.length - 1);
console.log("After ", A);