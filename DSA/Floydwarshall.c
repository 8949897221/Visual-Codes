#include<stdio.h>
#define nv 4
#define INF 999
void printMatrix(int matrix[][nv]);
void floydwarshall(int graph[][nv]){
    int matrix[nv][nv],i,j,k;
    for(int i=0;i<nv;i++){
        for(int j=0;j<nv;j++){
            matrix[i][j]=graph[i][j];
        }
    }
    for(int k=0;k<nv;k++){
        for(int i=0;i<nv;i++){
            for(int j=0;j<nv;j++){
                if(matrix[i][k]+matrix[k][j]<matrix[i][j]){
                    matrix[i][j]=matrix[i][k]+matrix[k][j];
                }
            }
        }
    }
    printMatrix(matrix);
}
void printMatrix(int matrix[][nv]){
    for(int i=0;i<nv;i++){
        for(int j=0;j<nv;j++){
            if(matrix[i][j]==INF){
                printf("%4s","INF");
            }
            else{
                printf("%4d",matrix[i][j]);
            }
        }
        printf("\n");
    }
}
int main(){
    int graph[nv][nv]={{0,3,INF,5},{2,0,INF,9},{INF,1,0,INF},{INF ,INF ,INF ,2}
    };
    floydwarshall(graph);
}
