function doGet(e) {
    const p1 = e.parameter.p1;
    const p2 = e.parameter.p2;
    const p3 = e.parameter.p3;
    const result1 = quadraticSolution(p1, p2, p3, true)
    const result2 = quadraticSolution(p1, p2, p3, false)
    return renderObject('html/index',
        { p1: p1, p2: p2, p3: p3, sol1: result1, sol2: result2 });
}