/*
export default function Square(props) {
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

//*/

const Square = (props) => {
    return(
        <button className="square">
            {props.value}
        </button>
    );
}

export default Square;