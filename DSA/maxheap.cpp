#include <iostream>

using namespace std;
class Maxheap{
    int *arr;
    int size;
    int total_size;//total size of array
    public:
    Maxheap(int n){
        arr=new int [n];
        size=0;
        total_size=n;
    }
    void insert(int value){
        //heap size is available
        if(size==total_size){
            cout<<"Heap Overflow";
            return;
        }
        arr[size]=value;
        int index=size;
        size++;
        //Compare it with its parent
        while(index>0&&arr[index-1/2]<arr[index]){
            swap(arr[index],arr[(index-1)/2]);
            index=(index-1)/2;

        }
        cout<<arr[index]<<" is inserted into the heap"<<endl;
    }
    void print(){
        for(int i=0;i<size;i++){
            cout<<arr[i]<<" ";
        }
    }
    void delete(){
        if(size==0){
            cout<<"Heap underflow";
            return;
        }
        cout<<arr[0]<<" deleted from the heap";
        arr[0]=arr[size-1];
        size--;
        if(size==0){
            
        }
    }
};

int main() {
    // Code goes here
    Maxheap h(3);
    h.insert(36);
    h.insert(34);
    h.insert(22);
    h.print();
    h.insert(21);
    return 0;
}