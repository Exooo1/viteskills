import styles from './timefill.module.scss'
import {useEffect, useRef, useState} from "react";

let time = 0
export const TimeFill = () => {
    const ref = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (width < 350) {
            time = setInterval(() => {
                setWidth(width + 1)
            }, 20)
        }
        return () => {
            clearInterval(time)
        }
    }, [width])
console.log('hre',ref)
    return <div>
        <h1>TimeFill</h1>
        <div className={styles.timefill}>
            <progress value={width} max={350} ref={ref} onProgress={(event) => console.log(event)}/>
            <div style={{width}}>
                {((100 / 350) * width).toFixed()}%
            </div>
        </div>
    </div>
}