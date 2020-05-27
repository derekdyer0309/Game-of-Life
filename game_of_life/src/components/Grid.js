import React from 'react'
import Cell from './Cell'

export default function Grid(props) {
    const width = props.column * 15 + props.column

    var rows = []
    let cellClass = ""

    for(let row = 0; row < props.row; row++) {
        for(let column = 0; column < props.column; column++) {
            let cellId = row + "_" + column;

            cellClass = props.gridFull[row][column] ? "alive" : "dead"

            rows.push(
                <Cell cellClass={cellClass} key={cellId} row={row} column={column} selectCell={props.selectCell}/>
            )
        }
    }

    return (
        <div className="grid" style={{width: width}}>
            {rows}
        </div>
    )
}