// 4. Selisih jumlah diagonal matriks NxN
function diagonalDifference(matrix) {
  let primaryDiagonal = 0
  let secondaryDiagonal = 0

  for (let i = 0; i < matrix.length; i++) {
    primaryDiagonal += matrix[i][i]
    secondaryDiagonal += matrix[i][matrix.length - 1 - i]
  }
  return primaryDiagonal - secondaryDiagonal
}
console.log(
  diagonalDifference([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ])
) // 3
console.log(
  diagonalDifference([
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1],
  ])
) // -9
