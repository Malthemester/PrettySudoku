import Sudoku from './sudoku'
import Complete from './complete'
import { MakeSudoku, RemoveNumbers, CheckSukoku } from '../HelperFunctions/generatorSudoku'
import { useEffect, useState, useRef } from "react"
import { SaveBoard, LocalToArray, LoadResources, SaveResources } from '../HelperFunctions/saveValue'
import { CollectResources } from '../HelperFunctions/getResources'
import { Shop, shopItems } from './shop'
import { SolveOne, IsInSolve } from '../HelperFunctions/solve'
import NumberInput from './numberInput'

let numberSize

export function Board(props) {
    let size = props.size
    let squares = props.squares
    let remove = props.remove


    const [gameBoard, SetGameBoard] = useState(Array(size).fill(Array(size).fill(null)))
    const [solved, SetSolved] = useState(false)


    useEffect(() => {
        localStorage.clear()
        NewGame(size, squares);
    }, [])


    useEffect(() => {
        SetSolved(CheckSukoku(size, gameBoard, squares))

    }, [gameBoard])


    function NewGame(size, squares) {
        numberSize = size

        let newBoard = MakeSudoku(size, squares)
        newBoard = RemoveNumbers(newBoard, remove, props.id)
        SetGameBoard(newBoard)
        SaveBoard(newBoard, props.id + `curBoard`)
    }

    function clickBar() {
        NewSolve(SolveOne(gameBoard, props.id))
    }

    function NewSolve(solve) {
        if (solve == null) {
            return
        }

        let name = `${size}x${size}`

        let tempGameBoard = [...gameBoard]
        tempGameBoard[solve[0]][solve[1]] = String(solve[2] + "og")
        SetGameBoard(tempGameBoard)
        SaveBoard(tempGameBoard, `${props.id}curBoard`)
    }

    return (
        <div>
            <div className="game">
                <div className="sudoku">
                    <div>

                        <Complete
                            solved={solved}
                            newGame={NewGame}
                            squares={squares}
                            size={size}
                            clickBar={clickBar}
                        ></Complete>

                        <div className="container">
                            <NumberInput selectedNumber={props.selectedNumber} size={numberSize} callBack={props.handleNumberClick} />
                        </div>

                        <div className="container">
                            <Sudoku
                                size={size}
                                squares={squares}
                                callBack={props.handleClick}
                                value={gameBoard}
                                gameBoard={gameBoard}
                                setGameBoard={SetGameBoard}
                                id={props.id}
                            ></Sudoku>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function useInterval(callBack, amount, active, interval) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callBack;
    })

    useEffect(() => {
        if (active) {
            function tick() {
                savedCallback.current(amount);
            }

            let id = setInterval(tick, interval);
            return () => clearInterval(id);
        }
    });
}