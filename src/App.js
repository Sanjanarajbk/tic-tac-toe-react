import { useState } from "react";



function Square({value,squareClick}){//child component
 
 return <button className="square" onClick={squareClick}>{value}</button>
}



export default function Board() {//parent component
  const [squares,setSquares] =useState(Array(9).fill(null))
  const [On,setOn] = useState(1)
  const handleClick = (i) =>{
    const nextSquares = squares.slice()
    if(nextSquares[i] || calculateWinner(squares)){
      return;  //if already there is value here return to prevent over writing
    }
    if(On){
    nextSquares[i]="X"
    }else{
      nextSquares[i]="O"
    }
    setOn(!On)
    setSquares(nextSquares)
  
   
  }
  const winner = calculateWinner(squares);
  let status;
  if(winner){
status=`Winner is ${winner}`
  }else{
    status = "Next player is "+ (On ? "X" : "O" )
  }
  return (
    <>
    <div className="status">
      {status}
    </div>
  
    <div className="board-row">
  <Square value={squares[0]} squareClick={() => handleClick(0)}/>
  <Square value={squares[1]}  squareClick={() => handleClick(1)}/>
  <Square value={squares[2]} squareClick={() => handleClick(2)}/>
    </div>
  <div className="board-row">
  <Square value={squares[3]} squareClick={() => handleClick(3)}/>
  <Square value={squares[4]} squareClick={() => handleClick(4)}/>
  <Square value={squares[5]} squareClick={() => handleClick(5)}/>
  </div>
  <div>
  <Square value={squares[6]} squareClick={() => handleClick(6)}/>
  <Square value={squares[7]} squareClick={() => handleClick(7)}/>
  <Square value={squares[8]} squareClick={() => handleClick(8)}/>
  </div>
 
  </>
  );
}

 
const calculateWinner = (squares) =>{

  //defining all the winning possibilities
  const lines =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(let i=0;i<lines.length;i++){
    const [a,b,c] =lines[i];
    if(squares[a] && squares[a]==squares[b] && squares[b]==squares[c]){
      return squares[a];
    }
  }
  return null;

}