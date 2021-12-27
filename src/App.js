import './App.css';
import NumberInput from './Components/numberInput'
import { useEffect, useState, useRef } from "react"
import { Board } from "./Components/board"
import Header from './Components/header'
import DisplayResources from './Components/resources'
import { SaveBoard, LoadResources, SaveResources } from './HelperFunctions/saveValue'
import { Shop, gobalShopItems } from './Components/shop'
import { IsInSolve } from './HelperFunctions/solve'
import { CollectResources } from './HelperFunctions/getResources'

let seleNumber = 1

export default function App(paams) {

	const [selectedNumber, SetSelectedNumber] = useState(seleNumber)
	const [size, Setsize] = useState(9)
	const [remove, Setremove] = useState(30)

	useEffect(() => {
	}, [])

	useEffect(() => {
		const handleInput = (e) => {
			if (e.key <= 9 && e.key != 0) {
				seleNumber = e.key
				SetSelectedNumber(e.key)
			}
		}
		document.addEventListener("keydown", handleInput);

		return () => {
			document.removeEventListener("keydown", handleInput);
		};
	}, []);


	const handleNumberClick = (number) => {
		seleNumber = number.target.value
		SetSelectedNumber(number.target.value)
	}

	function handleClick(x, y, gameBoard, SetGameBoard, id, amount) {
		if (gameBoard == null || gameBoard.lengt >= seleNumber) {
			return
		}
		let tempGameBoard = [...gameBoard]
		if (IsInSolve(id, `${x}${y}${seleNumber}`, gameBoard)) {
			let name = `${gameBoard.length}x${gameBoard.length}`

		}
		tempGameBoard[x][y] = String(seleNumber)
		SetGameBoard([...tempGameBoard])
		SaveBoard(tempGameBoard, id + "curBoard")
	}

	function selectSize(size) {
		Setsize(size)

		if (remove > size * size) {
			Setremove(7)
		}
	}

	return (
		<div>

			<Header></Header>
			<div className="main">
				<div className="selecter">
					<div className="container">
						Size of sudoku
						<select name="Size" onChange={e => selectSize(Number(e.target.value))}>
							<option value="9">9x9</option>
							<option value="4">4x4</option>
						</select>
					</div>
					<div className="container">
						Removed
						<input className="range" type="range" id="volume" name="volume" defaultValue={size == 9 ? 30 : 7} value={remove}
							min="0" max={size * size} onChange={e => Setremove(Number(e.target.value))} />

						<span id="rangeValue">{remove}</span>
					</div>
				</div>
				<div className="game">
					{/* <NumberInput selectedNumber={seleNumber} size={size} callBack={handleNumberClick} /> */}
					<Board
						id={"1#"}
						size={size}
						squares={size == 9 ? 3 : 2}
						remove={remove}
						handleClick={handleClick}
						handleNumberClick={handleNumberClick}
						selectedNumber={seleNumber}
					></Board>
				</div>
			</div>
		</div>
	)

}