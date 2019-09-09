const array = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
];

function spiralPrint() {
  let topRow = 0, // 상단
  leftCol = 0, // 왼쪽.
  btmRow = array.length - 1, // 위에서 아래로
  rightCol = array[0].length - 1; // 우측 끝
  
  while(topRow < btmRow && leftCol < rightCol) {
    // 왼쪽에서 오른쪽 출력
    for(let col = 0; col <= rightCol; col++) {
      console.log(array[topRow][col]);
    }
    topRow++;
    
    // 오른쪽 위에서 아래로 출력
    for(let row = topRow; row <= btmRow; row++) {
      console.log(array[row][rightCol]);
    }
    rightCol--;
    
    // 
    if(topRow <= btmRow) {
      for(let col = rightCol; col >= 0; col--) {
        console.log(array[btmRow][col]);
      }
      btmRow--;
    }
    
    if(leftCol <= rightCol) {
      for(let row = btmRow; row > topRow; row--) {
        console.log(array[row][leftCol]);
      }
      leftCol++;
    }
  }
}

spiralPrint();