#include<iostream>
using namespace std;
class Node{
    public:
    int data,height;
    Node *left,*right;
    Node(int value){
        data=value;
        left=right=NULL;
        height=1;
    }

};
Node*insert(Node*root,int key){
    if(root==NULL){
        return new Node(key);
    }
    if(key<root->data){
        root->left=insert(root->left,key);
    }
    else if(key>root->data){
        root->right=insert(root->right,key);
    }
    else{
        return root;
    }
    root->height=1+max(root->left->height,root->right->height);
    int balance=0;
    if(root==NULL){
        balance=0;
    }
    else{
        balance=root->left->height-root->right->height;
    }
    if(balance>1 && key<root->left->data){
        return rightRotate(root);
    }
    if(balance<-1 && key>root->right->data){
        return leftRotate(root);
    }
    if(balance>1 && key>root->left->data){
        root->left=leftRotate(root->left);
        return rightRotate(root);
    }
    if(balance<-1 && key<root->right->data){
        root->right=rightRotate(root->right);
        return leftRotate(root);
    }
    return root;
}
int main(){
    Node*root=NULL;
    root=insert(root,10);
    root=insert(root,20);
    root=insert(root,30);
    root=insert(root,40);
    root=insert(root,50);
    root=insert(root,25);

}