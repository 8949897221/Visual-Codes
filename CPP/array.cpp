#include <iostream>
template<class T>
void display(T x){
  cout<<"Template display: "<<x<<endl;
}
template<class T1,class T2,class T3>
void display(T1 x,T2 y,T3 z){
  cout<<"Template display: "<<x<<" "<<y<<" "<<z<<endl;
}
using namespace std;

int main() {
    // Code goes here
    return 0;
}