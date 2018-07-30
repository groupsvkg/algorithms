let insertionSort = (A, low, high) => {
    for(let i = low + 1; i <= high; i++){
        let key = A[i];
        let j = i - 1;
        while(j >= low && A[j] > key){
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = key;
    }
}

let A = [8, 1, 6, 2, 5, 9];

console.log("Before", A);
insertionSort(A, 0, A.length - 1);
console.log("After ", A);