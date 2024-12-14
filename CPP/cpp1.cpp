#include<iostream>
using namespace std;
int main(){
    int a,b;
    cin>>a>>b;
    int c=a/b;  
    try{
        if(b==0){
            throw 0;
        }
    }
}