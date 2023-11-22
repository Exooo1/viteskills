import styles from './resize.module.scss'
import {useEffect, useState} from "react";

export const ResizeModal = () => {
    const [isFix, setIsFix] = useState(0)
    const [currentWidth, setCurrentWidth] = useState(300)
    const [width1, setWidth1] = useState(300)
    const [isChange,setIsChange] = useState(false)

    const handlerMouseDown = (e: any, is:boolean) => {
        setIsFix(e.clientX)
        setIsChange(is)
    }

    const func = (e) => {
        const result = e.clientX - isFix
        console.log(isFix)
        console.log(e.clientX)
        setCurrentWidth(result + currentWidth)

    }

    useEffect(() => {
        if (isChange) {
            document.addEventListener('mousemove',func)
        }
        return () => document.removeEventListener('mousemove', func)
    }, [isChange])
    console.log(isFix)
    return <div className={styles.resize} onMouseUp={(e)=>handlerMouseDown(e,false)}>
        <div className={styles.resize_window} onMouseDown={(e)=>handlerMouseDown(e,true)} style={{width: `${currentWidth}px`}}>
            <div className={styles.resize_window_content}
                 onMouseDown={(e) => e.stopPropagation()}>
                <p>width</p>
                <p>width1{width1}</p>
            </div>
        </div>
    </div>
}