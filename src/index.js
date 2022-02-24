// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix === undefined) {
        return [];
    }
    for (let i = 0; i < matrix.length; i += 1) {

        if (i % 2 === 0) {
            result = [...result, ...matrix[i]];
        } else {
            result = [...result, ...matrix[i].reverse()];
        }
    }
    return result;

};