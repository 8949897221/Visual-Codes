#include<iostream>
#include<algorithm>
using namespace std;
class Stack{
    public:
    int *arr;
    int top;
    int size;
    Stack(int size){
        this->size=size;
        arr=new int[size];
        top=-1;
    }
    void push(int value){
        if(size-top>1){
            top++;
            arr[top]=value;
            return;
        }
        else{
            cout<<"Stack overflow";
        }
    }
    void pop(){
        if(top>=0){
            top--;
        }
        else{
            cout<<"Stack is underflow";
        }
    }
    int peek(){
        if(top>=0 && top<size){
            return arr[top];
        }
        else{
            cout<<"Nhi babu";
        }
    }
    bool isempty(){
        if(top=-1){
            return true;
        }
        else{
            return false;
        }
    }
};
int main(){
    Stack st(5);
    st.push(23);
    st.push(34);
    st.push(45);
    cout<<st.peek()<<endl;
    st.pop();
    cout<<st.peek()<<endl;
    st.pop();
    cout<<st.peek()<<endl;
    st.pop();
    cout<<st.peek()<<endl;
}