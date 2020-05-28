import React, {useState, useEffect, useRef} from 'react'
import Grid from './Grid'
import { Button } from '@material-ui/core'
import Rules_Modal from './Rules_Modal'
import Info_Modal from './Info_Modal'

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr))
}

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window
    return {
        width,
        height
    }
}

export default function Main() {
    const height = Math.floor((getWindowDimensions().height / 30))
    const width = Math.floor((getWindowDimensions().width / 30))

    const [rows, setRows] = useState(height)
    const [column, setColumn] = useState(width)
    const [speed, setSpeed] = useState(1)
    const [generation, setGeneration] = useState(0)
    const [intId, setIntId] = useState()
    const [run, setRun] = useState(false)
    const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(column).fill(false)))

    useEffect(() => {
        let grid = gridFull;
        let gridCopy = arrayClone(gridFull)

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < column; j++) {
                let count = 0

                if (i > 0) if (grid[i - 1][j]) count++;
                if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count++;
                if (i > 0 && j < column - 1) if (grid[i - 1][j + 1]) count++;
                if (j < column - 1) if (grid[i][j + 1]) count++;
                if (j > 0) if (grid[i][j - 1]) count++;
                if (i < rows - 1) if (grid[i + 1][j]) count++;
                if (i < rows - 1 && j > 0) if (grid[i + 1][j - 1]) count++;
                if (i < rows - 1 && j < column - 1) if (grid[i + 1][j + 1]) count++;

                if(count < 2 || count > 3) {
                    gridCopy[i][j] = false
                }
                if (count === 3) {
                    gridCopy[i][j] = true
                }
            }
        }
        setGridFull(gridCopy)
    }, [generation])

    const selectCell = (rows, column) => {
        let gridCopy = arrayClone(gridFull)
        gridCopy[rows][column] = !gridCopy[rows][column]
        setGridFull(gridCopy)
    }

    const startButton = () => {
        clearInterval(intId)
        if (run) {
            setRun(false)
        } else {
            setRun(true)
            setIntId(setInterval(start, speed))
        }
    }

    const stopButton = () => {
        clearInterval(intId)
        setRun(false)
    }

    const nextButton = () => {
        clearInterval(intId)
        setGeneration(generation => generation + 1)
    }

    const start = () => {
        clearInterval(intId)
        setGeneration(generation => generation + 1)
    }

    const seed = (number = 30) => {
        let gridCopy = arrayClone(gridFull)

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < column; j++) {
                gridCopy[i][j] = false
                if(Math.floor(Math.random() * 1/number*100) === 0) {
                    gridCopy[i][j] = true
                }
            }
        }

        setGridFull(gridCopy)
    }

    const reset = () => {
        setGridFull(Array(rows).fill().map(() => Array(column).fill(false)))
        setGeneration(0)
        clearInterval(intId)
    }

    return(
        <div>
            <h2>Conway's Game of Life</h2>
                <Button color="secondary" size="small" onClick={() => startButton()}>Start/Stop</Button>
                <Button color="primary" size="small" onClick={() => nextButton()}>Next generation</Button>
                <Button color="primary" size="small" onClick={() => reset()}>Reset</Button>
                <Button color="primary" size="small" onClick={() => seed()}>Randomize</Button>
            <h3>Generation: {generation}</h3>
            <Grid gridFull={gridFull} rows={rows} column={column} selectCell={selectCell} />
            <div class="modals">
                <Rules_Modal />
                <Info_Modal />
            </div>
        </div>
    )
}