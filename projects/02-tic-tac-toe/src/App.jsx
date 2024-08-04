import React, { useState } from 'react'; // Import React and useState

const TURNS = {
  X: "x",
  O: "o"
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null) 

  const checkWnner = (boardToCheck) => {
    // revisamos todas las conbinaciones ganadoras
    // para ver si X u O ganó 
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (
        boardToCheck[a] && // 0 ---> x u o
        boardToCheck[a] === boardToCheck[b] && // 0 y 3 ---> x  ---> x u o ---> o
        boardToCheck[a] === boardToCheck[c] // 0, 3 y
      )
      {
        return boardToCheck[a] // x u o
      }
    }
    {
      // no hay ganador
      return null 
    }
  }

  const updateBoard = (index) => {
    // No se actualiza esta pssición
    // si ya contiene algo
    if (board[index] || winner) return

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn //x u o
    setBoard(newBoard)

    // canbiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X 
    setTurn(newTurn)
    // revisar si hay ganador
    const newWinner = checkWnner(newBoard)
    if (newWinner) {
      setWinner(newWinner) // actualiza el estado
      alert(`El ganador es ${newWinner}`)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
        )
      })
      }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App;
