// Given a m x n matrix grid which is sorted in
// non-increasing order both row-wise and column-wise,
// return the number of negative numbers in grid.

function countNegatives(grid: number[][]): number {
  const cols = grid[0].length;
  let count = 0;

  function search(rows: number[]) {
    let low = 0;
    let high = rows.length - 1;
    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2);
      if (rows[mid] < 0) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }
  for (let row of grid) {
    const negativeIndex = search(row);
    count += cols - negativeIndex;
  }
  return count;
}

console.log(
  countNegatives([
    [6, 5, 4, 4, 3, -2, -2, -2],
    [5, -2, -2, -3, -3, -4, -4, -4],
    [-3, -3, -3, -4, -4, -5, -5, -5],
    [-3, -5, -5, -5, -5, -5, -5, -5],
    [-4, -5, -5, -5, -5, -5, -5, -5],
  ])
);
