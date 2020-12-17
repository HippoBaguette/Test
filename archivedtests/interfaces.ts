interface Shape{
    edges: number, //1d
    corners?: number, //2d
    faces?: number //3d
}

const line: Shape = {
    edges: 1
};

const square: Shape = {
    edges: 4,
    corners: 4
};

const cube: Shape = {
    edges: 12,
    corners: 8,
    faces: 6
};

console.log(line.edges);
console.log(square.corners);
console.log(cube.faces);