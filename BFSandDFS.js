/* Perform a depth-first search and a breadth-first search of the graph that models the map of the area where you live. Determine the shortest
path from a starting vertex to the last vertex. */

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w, weight) {
        this.adjList.get(v).push({ node: w, weight });
        this.adjList.get(w).push({ node: v, weight }); // For an undirected graph
    }

    // Breadth-First Search (BFS)
    bfs(start) {
        let visited = new Set();
        let queue = [];
        let result = [];

        visited.add(start);
        queue.push(start);

        while (queue.length > 0) {
            let vertex = queue.shift();
            result.push(vertex);

            this.adjList.get(vertex).forEach(neighbor => {
                if (!visited.has(neighbor.node)) {
                    visited.add(neighbor.node);
                    queue.push(neighbor.node);
                }
            });
        }

        return result;
    }

    // Depth-First Search (DFS)
    dfs(start) {
        let visited = new Set();
        let result = [];

        this.dfsUtil(start, visited, result);

        return result;
    }

    dfsUtil(vertex, visited, result) {
        visited.add(vertex);
        result.push(vertex);

        this.adjList.get(vertex).forEach(neighbor => {
            if (!visited.has(neighbor.node)) {
                this.dfsUtil(neighbor.node, visited, result);
            }
        });
    }

    // Dijkstra's Algorithm (unchanged)
    dijkstra(start, end) {
        let distances = {};
        let prevVertices = {};
        let pq = new PriorityQueue();

        this.adjList.forEach((_, vertex) => {
            distances[vertex] = Infinity;
            prevVertices[vertex] = null;
        });

        distances[start] = 0;
        pq.enqueue(start, 0);

        while (!pq.isEmpty()) {
            let { node: currentVertex } = pq.dequeue();

            if (currentVertex === end) {
                // If we reached the end vertex, stop and build the path
                let path = [];
                while (prevVertices[currentVertex]) {
                    path.unshift(currentVertex);
                    currentVertex = prevVertices[currentVertex];
                }
                path.unshift(start);
                return { path, distance: distances[end] };
            }

            this.adjList.get(currentVertex).forEach(neighbor => {
                let distance = distances[currentVertex] + neighbor.weight;

                if (distance < distances[neighbor.node]) {
                    distances[neighbor.node] = distance;
                    prevVertices[neighbor.node] = currentVertex;
                    pq.enqueue(neighbor.node, distance);
                }
            });
        }

        return { path: [], distance: Infinity }; // If no path is found
    }
}

// Priority Queue implementation for Dijkstra's algorithm (unchanged)
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(node, priority) {
        this.values.push({ node, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

// Example usage

const graph = new Graph();

// Add vertices (representing locations)
graph.addVertex('Home');
graph.addVertex('School');
graph.addVertex('Store');
graph.addVertex('Park');
graph.addVertex('Library');

// Add edges with weights (representing roads and distances)
graph.addEdge('Home', 'School', 2);
graph.addEdge('Home', 'Store', 4);
graph.addEdge('Home', 'Park', 7);
graph.addEdge('School', 'Store', 1);
graph.addEdge('School', 'Library', 3);
graph.addEdge('Store', 'Library', 2);
graph.addEdge('Park', 'Library', 3);

// Perform BFS and DFS
const bfsResult = graph.bfs('Home');
const dfsResult = graph.dfs('Home');

console.log('BFS Result:', bfsResult);
console.log('DFS Result:', dfsResult);
