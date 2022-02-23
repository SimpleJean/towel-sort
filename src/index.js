// You should implement your task here.

module.exports = function towelSort(matrix) {
if(matrix == undefined) {
  return [];
} else {
    return matrix.reduce((acc, current, index) => {
    return acc.concat(((index % 2 == 0) ? current : current.reverse()));
  }, [])
}
};
