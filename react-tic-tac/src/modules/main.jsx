const arrayEx = () => {
  const arrayRow = [0, 0, 0];
  const arrayCol = [0, 0, 0];
  arrayRow.map((row) => {
    const cols = arrayCol.map((col) => {
      // 한 라인의 button 만들기
    });
    // 각 라인의 컴포넌트 만들기
  });

  const arrFuncCol = Array(3).fill(0);
  const arrFuncRow = Array(3).fill(arrFuncCol);

  const arrFuncBox = Array(3).fill(Array(3).fill(0));
};

/**
 * 다차원 배열
 * 배열 속에 요소가 배열로 이루어진 배열
 * a = [1,2,3,4,5]
 * console.log(a[0])
 * a[0] = 3
 *
 * // 2차원 배열
 * b = [
 * 	[1,2,3,4,5]
 * ]
 * console.log(b[0][1])
 * b[0][2] = 100
 *
 * // 3차원 배열
 * c = [
 * 	[
 * 		[1,2,3,4,5]
 * 	]
 * ]
 * c[0][0][1]
 */

// 매개변수로 props 또는 squares
// const RenderSquare = (props) => {
const RenderSquare = ({ squares, changeSquares }) => {
  // const squares = props.squares (전통적인 방법)
  const arrayBox = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const onButtonClick = (e) => {
    const index = e.target.dataset.index;
    // alert(index);
    changeSquares(index);
  };

  let index = 0;
  const buttons = arrayBox.map((subBox) => {
    const buttonCols = subBox.map(() => {
      // 한 라인의 button 만들기

      return (
        <button data-index={index} onClick={onButtonClick}>
          {squares[index++]}
        </button>
      );
    });
    // 각 라인의 컴포넌트 만들기
    return <div className="box_row">{buttonCols}</div>;
  });

  return buttons;
};

/**
 * 0,1,2
 * 3,4,5
 * 6,7,8
 */
const calcWinner = (squares) => {
  const temp = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  squares.forEach(hi, index, temp) {
	  let [a,b,c] = temp[i];
	  
  }
//   for (let i = 0; i < temp.length; i++) {
//     let [a, b, c] = temp[i];
//     if (squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
  return null;
  /////
  //   if (squares[0] && squares[0] === squares[1] && squares[0] === squares[2]) {
  //     return squares[0];
  //   } else if (
  //     squares[3] &&
  //     squares[3] === squares[4] &&
  //     squares[3] === squares[5]
  //   ) {
  //     return squares[3];
  //   }
};

export { RenderSquare, calcWinner };
