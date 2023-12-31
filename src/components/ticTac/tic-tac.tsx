import styles from './tictac.module.scss'
import {useState} from "react";

let winner = ''

export const TicTac = ({title}) => {
    const [tic, setTic] = useState(Array(9).fill(''))
    const [isTurn, setIsTurn] = useState(false)
    const [comb, setComb] = useState([])
    const [history, setHistory] = useState([])

    const handlerTicTac = (index) => {
        if (winner) return
        const newTic = [...tic]
        if (tic[index] === '') {
            newTic[index] = isTurn ? 'X' : '0'
            setTic(newTic)
            setIsTurn(!isTurn)
            setHistory([...history, newTic])
        }
        combinationWins.forEach(el => {
            const checkCorrectLines = [newTic[el[0]], newTic[el[1]], newTic[el[2]]]
            const firstElem = checkCorrectLines[0]
            if (checkCorrectLines.filter(el => el === firstElem && el !== '').length === 3) {
                winner = tic[el[0]]
                setComb(el)
            }
        })
    }

    const handlerHistory = (history) => {
        setIsTurn(!isTurn)
        setTic(history)
    }

    const combinationWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    //Не выведет title потому что он undefined
    //<h1>Hello this is TicTac {title}{null}{-1}{NaN}{Infinity}</h1> Выведет только -1 NaN Infinity (потому что будет преобразовано в toString() класса Number)

    return <div className={styles.container}>
        <h1>Hello this is TicTac {title}{null}{-1}{NaN.toString()}{Infinity.toString()}</h1>
        {winner ? <p>Our Winner {winner ? winner : 'No one!'}</p> : <p>Now is {isTurn ? 'X' : '0'} turn!</p>}
        <div className={styles.container_tic}>
            {tic.map((el, index) => <p key={el + index} style={{background: comb.includes(index) ? 'orange' : ''}}
                                       onClick={() => handlerTicTac(index)}>{el !== '' ? <b>{el}</b> : null}</p>)}
        </div>
        <div className={styles.container_history}>{history.map((el, index) => <button key={el}
                                                                                      onClick={() => handlerHistory(el)}>{index + 1}</button>)}</div>
    </div>
}