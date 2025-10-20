import {useState} from 'react'
import './App.css'

function Square({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay, size ,onMove}) {
    function handleClick(i) {
        if (calculateWinner(squares, size) || squares[i]) return;

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
        onMove();
    }

    const winner = calculateWinner(squares, size);
    let status = winner
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>

            {Array.from({ length: size }).map((_, row) => (
                <div key={row} className="board-row">
                    {Array.from({ length: size }).map((_, col) => {
                        const index = row * size + col;
                        return (
                            <Square
                                key={index}
                                value={squares[index]}
                                onSquareClick={() => handleClick(index)}
                            />
                        );
                    })}
                </div>
            ))}
        </>
    );
}



export default function Game() {
    const [size, setSize] = useState(3);
    const [inputSize, setInputSize] = useState(3);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [moveCount, setMoveCount] = useState(0);

    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function handleApplySize() {
        setSize(inputSize);
        setHistory([Array(inputSize * inputSize).fill(null)]);
        setCurrentMove(0);
        setMoveCount(0);
    }

    function handleReset() {
        setHistory([Array(size * size).fill(null)]);
        setCurrentMove(0);
        setSize(3);
        setInputSize(3)
        setMoveCount(0);
    }
    function handleCounter(){
        setMoveCount(moveCount + 1);
    }

    return (
        <div className="game">
            <div className="controls">
                <label>Taille du plateau : </label>
                <input
                    type="number"
                    value={inputSize}
                    min="3"
                    max="10"
                    onChange={(e) => setInputSize(Number(e.target.value))}
                />
                <button onClick={handleApplySize}>Appliquer</button>
                <button onClick={handleReset}>Réinitialiser</button>
            </div>
            <div>
                <h3>Nombre de coups joués : {moveCount}</h3>
            </div>
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                    size={size}
                    onMove={handleCounter}
                />
            </div>
        </div>
    );
}


function calculateWinner(squares, size) {
    for (let row = 0; row < size; row++) {
        const start = row * size;
        const line = squares.slice(start, start + size);
        if (line.every((cell) => cell && cell === line[0])) {
            return line[0];
        }
    }
    for (let col = 0; col < size; col++) {
        const column = [];
        for (let row = 0; row < size; row++) {
            column.push(squares[row * size + col]);
        }
        if (column.every((cell) => cell && cell === column[0])) {
            return column[0];
        }
    }
    // Checks the primary diagonal (top-left → bottom-right)
    const diag1 = [];
    for (let i = 0; i < size; i++) {
        diag1.push(squares[i * size + i]);
    }
    if (diag1.every((cell) => cell && cell === diag1[0])) {
        return diag1[0];
    }

    // Checks the secondary diagonal (top-right → bottom-left)
    const diag2 = [];
    for (let i = 0; i < size; i++) {
        diag2.push(squares[i * size + (size - 1 - i)]);
    }
    if (diag2.every((cell) => cell && cell === diag2[0])) {
        return diag2[0];
    }

    return null;
}

