import React, { useState, createContext, useContext } from 'react';
import Board from './board';
import calculateWinner from '../functions/calculateWinner';
import logo from '../img/tic-tac-toe.png';

export const GameContext = createContext();

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [history, setHistory] = useState(squares);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    return (
        
            <div className="game">
                <div className="header">
                    <img src={logo} className="logo" alt="tic-tac-toe" />
                </div>
                <div className="game-board">
                    <GameContext.Provider value={{squares}}>
                        <Board 
                            squares={squares}
                            // onClick={(i) => this.handleClick(i)}
                        />
                    </GameContext.Provider>
                </div>
                <div className="game-info">
                    <div className="title history">History</div>
                    {/* <ol>{moves}</ol> */}
                </div>
                {/* <div className="title status">{status}</div> */}
            </div>
        
    );
}

export default Game;

/*
export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }
    
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            //console.log(step.squares);
            const desc = move ?
                //"Go to move #" + move + " - " + "col:" + "i" + " | row:" + "0":
                "Go to move #" + move :
                "Go to game start";

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner){
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }        
        return (
            <div className="game">
                <div className="header">
                    <img src={logo} className="logo" alt="tic-tac-toe" />
                </div>
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="title history">History</div>
                    <ol>{moves}</ol>
                </div>
                <div className="title status">{status}</div>
            </div>
        );
    }
}

//*/

const handleClick = (i) => {
    // const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // const current = history[history.length - 1];
    // const squares = current.squares.slice();

    // if (calculateWinner(squares) || squares[i]) {
    //     return;
    // }

    //squares[i] = xIsNext ? 'X' : 'O';
    // this.setState({
    //     history: history.concat([{
    //         squares: squares,
    //     }]),
    //     xIsNext: !this.state.xIsNext,
    //     stepNumber: history.length,
    // });
}



