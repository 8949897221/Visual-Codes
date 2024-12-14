#include<stdio.h>
#include<stdlib.h>
#define MAX 100
int queue[MAX],front=-1,rear=-1;
void enqueue(int value){
    if(rear==MAX-1){
        printf("Queue overflow");
        return;
    }
    if(front==-1){
        front=0;
        queue[++rear]=value;

    }}
    int dequeue(){
        if(front==-1||front>rear){
            printf("Queue underflow");
            return -1;
        }
        return queue[front++];
    }
    int isempty(){
        return front==-1||front>rear;
    }
    void BFS(int graph[MAX][MAX],int n,int start){
        int visited[MAX]={0};
        enqueue(start);
        visited[start]=1;
        printf("BFS Transversal: ");
        while(!isempty()){
            int current=dequeue();
            printf("%d",current);
        
        for(int i=0;i<n;i++){
            if(graph[current][i]==1&&!visited[i]){
                enqueue(i);


                visited[i]=1;
            }
        }
        printf("\n");
        }
        return 0;
        }
