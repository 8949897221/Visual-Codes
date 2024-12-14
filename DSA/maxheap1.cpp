#include<iostream>
using namespace std;
class heap{
    public:
    int arr[100];
    int size=0;
    void insert(int value){
        size=size+1;
        arr[size]=value;
        int index=size;
        while(index>1){
            int parent=index/2;
            if(arr[parent]<arr[index]){
                swap(arr[parent],arr[index]);
                index=parent;
                cout<<"Inserted value in the heap is "<<arr[index]<<endl;
            }
            else{
                return;
            }
        }
    }
    void print(){
        for(int i=1;i<=size;i++){
            cout<<"Inserted value in the heap is "<<arr[i]<<endl;
            cout<<arr[i]<<" ";
        }
    }
    void deletefromheap(){
        if(size==0){
            cout<<"Nothing to delete";
        }
        arr[1]=arr[size];
        size--;
        int i=1;
        while(i<size){
            while(i<size){
                int leftindex=2*i;
                int rightindex=2*i+1;
                if(leftindex<size&&rightindex<size){
                    if(arr[leftindex]>arr[rightindex]){
                        swap(arr[i],arr[leftindex]);
                        i=leftindex;
                    }
                    else{
                        swap(arr[i],arr[rightindex]);
                        i=rightindex;
                    }
                }
                else if(leftindex<size){
                    swap(arr[i],arr[leftindex]);
                    i=leftindex;
                }
                else if(rightindex<size){
                    swap(arr[i],arr[rightindex]);
                    i=rightindex;
                }
                else{
                    break;
                }
            }
        }
    }
};
void heapify(int arr[],int size,int i){
    int largest=i;
    int left=2*i;
    int right=2*i+1;
    if(left<n&&arr[largest]<arr[left]){
        largest=left;
    }
    if(right<n&&arr[largest]<arr[right]){
        largest=right;
    }
    if(largest!=i){
        swap(arr[i],arr[largest]);
        heapify(arr,size,n);
    }
}
void heapsort(int arr[],int n){
    int t=n;
    while(t>1){
        swap(arr[size],arr[1]); 
        size--;
        heapify(arr,size,1);
    }
}
int main(){
    heap h;
    h.insert(36);
    h.insert(34);
    h.insert(22);
    h.insert(21);
    h.print();
    int arr[6]={1,2,3,4,5,6};
        int n=5;
        for(int i=n/2;i>=0;i--){
            heapify(arr,n,i);
        }
        cout<<"Printing the array now"<<endl;
        for (int i = 0; i < n; i++)
        {
            cout<<arr[i]<<" ";
        }
        cout<<endl;        

    return 0;


}