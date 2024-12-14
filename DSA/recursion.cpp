// You are using GCC
#include<stdio.h>
int sum(int a){
    int sum1=0;
    if(a==1){
        return 1;
    }
    else{
    sum1=a+sum(a-1);
        return sum1;
    }
}
int main(){
    int n;
    scanf("%d",&n);
    int ans=sum(n);
    printf("%d ",ans);
    return 0;
}
//Factorial
#include<stdio.h>
int factorial(int a){
    int fact=0;
    if(a==0){
        return 1;
    }
    else{
        fact=a*factorial(a-1);
        return fact;
    }
}
int main(){
    int n;
    scanf("%d",&n);
    int ans=factorial(n);
    printf("%d ",ans);
    return 0;
}
//Fibonacci series 
#include<stdio.h>
int fibonacci(int a){
    int f=0;
    if(a==0){
        return 0;
    }
    if(a==1){
        return 1;}
    else{
        f=fibonacci(a-1)+fibonacci(a-2);
        return f;
    }
}
int main(){
    int n;
    scanf("%d ",&n);
    int ans=fibonacci(n);
    printf("%d ",ans);
    return 0;
    
