// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let plantedCount = 0;
  for (let index = 0; index < flowerbed.length; index++) {
    if (flowerbed[index] === 0) {
      const isLeftEmpty = index === 0 || flowerbed[index - 1] === 0;
      const isRightEmpty =
        index === flowerbed.length - 1 || flowerbed[index + 1] === 0;
      if (isLeftEmpty && isRightEmpty) {
        flowerbed[index] = 1;
        plantedCount++;
        if (plantedCount >= n) return true;
      }
    }
  }
  return plantedCount >= n;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
