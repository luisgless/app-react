import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
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
      // no hay ganador
      return null 
  }

  export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    // si no hay más espacios vacíos
    // en el tablero
    return newBoard.every((square) => square !== null)
  }
