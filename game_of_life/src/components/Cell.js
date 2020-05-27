import React  from 'react'

export default function Cell(props){
    const select = () => {
        props.selectCell(props.row, props.column)
    }

    let color = 'b9b9b9'
    if (props.cellClass === 'alive') {
        color = (Math.floor(Math.random() * 40) * 100 + 166000).toString()
    }

    return(
        <div className = {props.cellClass} id = {props.id} onClick = {selectCell} style = {{backgroundColor: "#" + color}}>
            
        </div>
    )
}