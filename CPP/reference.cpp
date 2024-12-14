#include <iostream>

using namespace std;

int main() {
    int a = 10;
    int &b = a;
    cout<<a<<endl;
    a++;
    cout<<a<<endl;
    b++;
    cout<<a<<endl;
    return 0;
}