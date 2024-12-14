#include <iostream>
#include <unordered_map>
#include <list>

using namespace std;

class graph {
public:
    unordered_map<int, list<int>> adj;

    void addEdge(int u, int v, bool direction) {
        // Add edge from u to v
        adj[u].push_back(v);

        // If undirected, also add edge from v to u
        if (direction == 0) {
            adj[v].push_back(u);
        }
    }

    void printAdjList() {
        for (auto i : adj) {
            cout << i.first << " -> ";
            for (auto j : i.second) {
                cout << j << ", ";
            }
            cout << endl;
        }
    }
};

int main() {
    int n;
    cout << "Enter the number of nodes:" << endl;
    cin >> n;

    int m;
    cout << "Enter the number of edges:" << endl;
    cin >> m;

    graph g;

    cout << "Enter the edges (u v):" << endl;
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        // Creating an undirected graph
        g.addEdge(u, v, 0);
    }

    // Print adjacency list
    g.printAdjList();

    return 0;
}
