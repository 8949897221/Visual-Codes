#include<stdio.h>
int size=0;
void swap(int *a,int *b){
    int temp=*a;
    *a=*b;
    *b=temp;
}
void heapify(int array[],int size,int i){
    int largest=i;
    int left=2*i+1;
    int right=2*i+2;
    if(left<size && array[left]>array[largest]){
        largest=left;
    }
    if(right<size && array[right]>array[largest]){
        largest=right;
    }
    if(largest!=i){
        swap(&array[i],&array[largest]);
        heapify(array,size,largest);
    }
}
void insert(int array[],int newnum){
    if(size==0){
        array[0]=newnum;
        size=size+1;
    }
    else{
        array[size]=newnum;
        size=size+1;
        for(int i=size/2-1;i>=0;i--){
            heapify(array,size,i);
        }
    }
}
void deleteRoot(int array[],int num){
    int i;
    for(i=0;i<size;i++){
        if(num==array[i]){
            break;
        }
    }
    swap(&array[i],&array[size-1]);
    size=size-1;
    for(int i=size/2-1;i>=0;i--){
        heapify(array,size,i);
    }
}
void deleteroot(int array[],int num){
    
}
void print(int array[],int size){
    for(int i=0;i<size;i++){
        printf("%d ",array[i]);
    }
}
int main(){
    int array[100];
    insert(array,3);
    insert(array,4);
    insert(array,9);
    insert(array,5);
    insert(array,2);
    print(array,size);
    deleteRoot(array,4);
    print(array,size);
    return 0;
}