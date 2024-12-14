// #include<iostream>
// #include<queue>
// using namespace std;
// int main(){
//     queue<int>n;
//     n.push(2);
//     n.push(3);
//     n.push(4);
//     cout<<n.front()<<endl;
    
// }
#include<iostream>
using namespace std;
class q{
    public:
    int *arr;
    int size;
    int front,rear;
    q(){
        size=100000;
        arr=new int[size];
        front=0;
        rear=0;
    }
    void push(int value){
        if(rear==size){
            cout<<"Queue is full";
        }
        else{
            arr[rear]=value;
            rear++;
        }
    }
    void pop(){
        if(front==rear){
            return -1;
        }
        else{
            arr[front]=-1;
            front++;
            if(front==rear){
                front=0;
                rear=0;
            }
        }
    }


};