void heapsort(int arr[],int n){
    for(int i=n/2-1;i>=0;i--){
        heapify(arr,n,i);
    }
for(int i=n-1;i>0;i--){
    swap(&arr[0],&arr[i]);
    heapify(arr,i,0);
}
}