#include<iostream>
using namespace std;
void test(int x1, int x2, int x3, int x4, int x5){
    int total = x1 * x2 * x3 * x4 * x5;
    try{
        if(total % 3 == 0){
            throw 0;
        }
        if(total % 5 == 0){
            throw 1.0;
        }
        if(total % 7 == 0){
            throw 'x';
        }
    }
    catch(char c){
        cout << "Sourav";
    }
    catch(int m){
        cout << "Rohit";
    }
    catch(double d){
        cout << "Rahul";
    }
}
int main(){
    int x1, x2, x3, x4, x5;
    cin >> x1 >> x2 >> x3 >> x4 >> x5;
    test(x1, x2, x3, x4, x5);
    test(x1, x2, x3, x4, x5);
    test(x1, x2, x3, x4, x5);
    return 0;
}