/* Write a program that stores a graph in a file. */
const fs = require('fs');

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v); // Assuming an undirected graph
    }

    serializeGraphToFile(filename) {
        const graphData = {};

        // Convert the adjacency list to a simple object
        this.adjList.forEach((edges, vertex) => {
            graphData[vertex] = edges;
        });

        // Write the graph data to a file in JSON format
        fs.writeFileSync(filename, JSON.stringify(graphData, null, 2), 'utf-8');
        console.log(`Graph successfully saved to ${filename}`);
    }
}

// Example usage
const graph = new Graph(5);

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

const filename = 'graphData.json';
graph.serializeGraphToFile(filename);
