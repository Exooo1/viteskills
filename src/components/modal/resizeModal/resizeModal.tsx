import styles from './resize.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";

export const ResizeModal = () => {
    const [isResize, setIsResize] = useState(false)
    const [width, setWidth] = useState(300)
    const [x, setX] = useState(0)

    const handlerMouseDown = (e:any) => {
        setX(e.clientX)
        setIsResize(true)
    }

    const handlerResize = (e:any) => {
        const result = e.clientX - x
        setWidth(result + width)
    }

    const handlerMouseUp = () => {
        setIsResize(false)
    }


    useEffect(() => {
        if (isResize) {
            window.addEventListener('mousemove', handlerResize)
        }
        return () => window.removeEventListener('mousemove', handlerResize)
    }, [isResize])

    useEffect(() => {
        const element = document.getElementById('content')
        var rect = element.getBoundingClientRect();

        element.addEventListener('mousemove', (event) => {
            var x = event.clientX - rect.left; // Координата X курсора относительно элемента
            var y = event.clientY - rect.top;  // Координата Y курсора относительно элемента

            // Определение направления движения
            var directionX = x > element.clientWidth / 2 ? 'right' : 'left';
            var directionY = y > element.clientHeight / 2 ? 'down' : 'up';
            console.log(directionY)
        })
    }, [])

    useEffect( ()=>{
        const func = async () =>{
            const result = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd');
            console.log(result)
        }
        func()
    },[])

    return <div className={styles.resize} onMouseUp={handlerMouseUp}>
        <div className={styles.resize_window} style={{width: `${width}px`}} onMouseDown={handlerMouseDown}>
            <div className={styles.resize_window_content}
                 id={'content'}
                 onMouseDown={(e) => e.stopPropagation()} onMouseUp={handlerMouseUp}>
                <p>Hello this is Vlas</p>
            </div>
        </div>
    </div>
}