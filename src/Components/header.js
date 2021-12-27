
export default function DesplaySolved(props) {
    return (
        <div className="topBar">
            <span className="topText">
                Sudoku
            </span>
            <span className="help">?
            </span>
            <div className="hide">
                Welcome to Sudoku. <br /><br />

                How to play Sukodu <br />
                - Every square has to contain a single number <br />
                - Only the numbers from 1 through to size can be used<br />
                - Each size x size box can only contain each number from 1 to size once<br />
                - Each vertical column can only contain each number from 1 to size once<br />
                - Each horizontal row can only contain each number from 1 to size once
            </div>
        </div>
    )
}