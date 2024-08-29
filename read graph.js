/*  Write a program that reads a graph from a file. */
const fs = require('fs');

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        if (!this.adjList.has(v)) {
            this.adjList.set(v, []);
        }
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v); // Assuming an undirected graph
    }

    deserializeGraphFromFile(filename) {
        const data = fs.readFileSync(filename, 'utf-8');
        const graphData = JSON.parse(data);

        // Reconstruct the graph from the parsed data
        for (const vertex in graphData) {
            this.addVertex(vertex);
            graphData[vertex].forEach(neighbor => {
                this.addVertex(neighbor); // Ensure the neighbor also exists as a vertex
                this.addEdge(vertex, neighbor);
            });
        }
        console.log(`Graph successfully loaded from ${filename}`);
    }

    // Method to display the graph
    displayGraph() {
        this.adjList.forEach((edges, vertex) => {
            console.log(`${vertex} -> ${edges.join(', ')}`);
        });
    }
}

// Example usage
const graph = new Graph();

const filename = 'graphData.json'; // Ensure this file exists with the correct format
graph.deserializeGraphFromFile(filename);
graph.displayGraph();
