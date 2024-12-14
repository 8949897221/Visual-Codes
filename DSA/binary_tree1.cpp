#include<stdio.h>
#include<malloc.h>

struct node{
    int data;
    struct node*left;
    struct node*right;
};
struct node* createNode(int data){
     struct node*n;
    n=(struct node*)malloc(sizeof(struct node));
    n->left=NULL;
    n->right=NULL;
    return n;
}
int main(){
    //Constructing the root node
    // struct node*p;
    // p=(struct node*)malloc(sizeof(struct node));
    // p->left=NULL;
    // p->right=NULL;
    // //Construct the first node
    //  struct node*p1;
    // p1=(struct node*)malloc(sizeof(struct node));
    // p1->left=NULL;
    // p1->right=NULL;
    // //Construct the second node
    //  struct node*p2;
    // p2=(struct node*)malloc(sizeof(struct node));
    // p2->left=NULL;
    // p2->right=NULL;
    // p->left=p1;
    // p->right=p2;
    struct node*p=createNode(2);
    struct node*p1=createNode(1);
    struct node*p2=createNode(4);
     p->left=p1;
     p->right=p2;
    return 0;
    
    
    
}
