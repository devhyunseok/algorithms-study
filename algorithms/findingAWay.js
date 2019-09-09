// 보드 정의
const board = [
  '%e%%%%%%%%%',
  '%...%.%...%',
  '%.%.%.%.%%%',
  '%.%.......%',
  '%.%%%%.%%.%',
  '%.%.....%.%',
  '%%%%%%%%%x%'
];
const mazeMatrix = board.map(arr => arr.split(''));

// e(시작 위치), x(종료 위치) 찾기
const findChar = (char, mazeMatrix) => {
  const row = mazeMatrix.length;
  const column = mazeMatrix[0].length;
  
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
      if(mazeMatrix[i][j] == char) {
        return [i, j];
      }
    }
  }
}

// 변화 상태를 화면에 출력
const printMatrix = (matrix) => {
  let mazePrintStr = '';
  // 정사각형이므로 가로 세로 길이가 동일.
  const row = matrix.length;
  const column = matrix[0].length; 
  
  for(let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      mazePrintStr += mazeMatrix[i][j];
    }
    mazePrintStr += '\n';
  }
  
  console.log(mazePrintStr);
}

const mazePathFinder = (mazeMatrix) => {
  const row = mazeMatrix.length;
  const column = mazeMatrix[0].length;
  const startPos = findChar('e', mazeMatrix); // 시작 위치
  const endPos = findChar('x', mazeMatrix); // 종료 위치
  
  // 재귀 함수
  const path = (x, y) => {
    // board 바깥으로 나가지 않게 방지.
    if(x > row - 1 || y > column - 1 || x < 0 || y < 0) {
      return false;
    }
    // 게임 종료 시점.
    if(x == endPos[0] && y == endPos[1]) {
      return true;
    }
    // 벽 또는 지나온 길이면 false
    if(mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+') {
      return false;
    }
    // 현재 위치 표시
    mazeMatrix[x][y] = '+';
    printMatrix(mazeMatrix);
    
    // 아래, 오른쪽, 위, 왼쪽 탐색 (4방향)
    if(path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
      return true;
    }
    // 잘못된 길이었다면 . 으로 다시 되돌림.
    mazeMatrix[x][y] = '.';
    return false;
  }
  
  // 시작 위치의 x,y 값(첫번째 배열의 두번째 위치.)
  path(startPos[0], startPos[1]);
}

// 찾기 시작.
mazePathFinder(mazeMatrix);
