import React, { useContext } from 'react';
import Square from '../functions/square';
import { GameContext } from './game';


const RenderSquare = (i) => {
    const game = useContext(GameContext);
    return (
        <Square 
            value={game.squares[i]} 
            // value={i} 
       />
    );
}

const Board = () => {
    
    return (
        <div className="board">
            <div className="board-row">
                {RenderSquare(0)}
                {RenderSquare(1)}
                {RenderSquare(2)}
            </div>
            <div className="board-row">
                {RenderSquare(3)}
                {RenderSquare(4)}
                {RenderSquare(5)}
            </div>
            <div className="board-row">
                {RenderSquare(6)}
                {RenderSquare(7)}
                {RenderSquare(8)}
            </div>                        
        </div>
    );
}

export default Board;

// class Board extends React.Component {

//     renderSquare(i) {
//         return (
//             <Square 
//                 value={this.props.squares[i]} 
//                 onClick={() => this.props.onClick(i)}
//            />
//         );
//     }

//     render() {
//         return (
//             <div className="board">
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

