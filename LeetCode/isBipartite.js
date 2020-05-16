var isBipartite = function(graph) {

    let visited = Array(graph.length).fill(0); //fill visited array with 0
    for (let i = 0; i < graph.length; i ++) {
        if (visited[i] !== 0) {
            continue;
        }
        let queue = [];
        queue.push(i);
        visited[i] = 1;
        while (queue.length > 0) {
            let index = queue.shift();
            for (let j = 0; j < graph[index].length; j ++) {
                let temp = graph[index][j];
                if (visited[temp] === 0) {
                    visited[temp] = visited[index] * (-1);
                    queue.push(temp);
                } else {
                    if (visited[temp] !== visited[index] * (-1)) return false;
                }
            }
        }
    }
   return true; 
};