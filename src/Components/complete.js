export default function DesplaySolved(props) {

    return (
        <div className="buttonList">
            {props.solved ?
                <button className="button" type="button" onClick={() => props.newGame(props.size, props.squares)}>Complete</button> :
                <button className="button" type="button" disabled>Incomplete</button>}

            <button className="button" type="button" onClick={() => props.newGame(props.size, props.squares)}>New Sudoku</button>
            <button className="button" type="button" onClick={() => props.clickBar()}>Get number</button>
        </div>
    )
}