import React  from 'react'

export default function Cell(props){
    const select = () => {
        props.selectCell(props.row, props.column)
    }

    let color = '#ffffff'
    if (props.cellClass === 'alive') {
        color = '#f79ed1'
    }

    return(
        <div className={props.cellClass} id={props.id} onClick={select} style={{backgroundColor: color}}>

        </div>
    )
}