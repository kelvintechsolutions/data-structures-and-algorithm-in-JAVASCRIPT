/* Write a program that determines which type of graph search is faster—breadthfirst or depth-first. Test your program with graphs of many different sizes.
 */
const { performance } = require('perf_hooks');

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
        this.adjList.get(w).push(v); // Assuming undirected graph
    }

    bfs(startingNode) {
        let visited = new Array(this.vertices).fill(false);
        let queue = [];
        visited[startingNode] = true;
        queue.push(startingNode);

        while (queue.length !== 0) {
            let node = queue.shift();

            let neighbors = this.adjList.get(node);
            for (let i in neighbors) {
                let neighbor = neighbors[i];
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }

    dfs(startingNode) {
        let visited = new Array(this.vertices).fill(false);
        this.dfsUtil(startingNode, visited);
    }

    dfsUtil(node, visited) {
        visited[node] = true;

        let neighbors = this.adjList.get(node);
        for (let i in neighbors) {
            let neighbor = neighbors[i];
            if (!visited[neighbor]) {
                this.dfsUtil(neighbor, visited);
            }
        }
    }
}

// Helper function to create a random graph
function generateRandomGraph(vertices, edgeProbability = 0.2) {
    const graph = new Graph(vertices);

    // Add vertices
    for (let i = 0; i < vertices; i++) {
        graph.addVertex(i);
    }

    // Add edges with some probability
    for (let i = 0; i < vertices; i++) {
        for (let j = i + 1; j < vertices; j++) {
            if (Math.random() < edgeProbability) {
                graph.addEdge(i, j);
            }
        }
    }

    return graph;
}

// Function to test and compare BFS and DFS performance
function testGraphSearchPerformance(vertices, edgeProbability = 0.2) {
    const graph = generateRandomGraph(vertices, edgeProbability);

    const startNode = 0;

    // Test BFS
    const bfsStartTime = performance.now();
    graph.bfs(startNode);
    const bfsEndTime = performance.now();
    const bfsDuration = bfsEndTime - bfsStartTime;

    // Test DFS
    const dfsStartTime = performance.now();
    graph.dfs(startNode);
    const dfsEndTime = performance.now();
    const dfsDuration = dfsEndTime - dfsStartTime;

    console.log(`Graph with ${vertices} vertices and edge probability ${edgeProbability}`);
    console.log(`BFS Duration: ${bfsDuration.toFixed(4)} ms`);
    console.log(`DFS Duration: ${dfsDuration.toFixed(4)} ms`);
    console.log('---------------------------------------------');
}

// Test with graphs of different sizes
const graphSizes = [10, 100, 500, 1000, 5000]; // Different graph sizes

graphSizes.forEach(size => {
    testGraphSearchPerformance(size);
});
