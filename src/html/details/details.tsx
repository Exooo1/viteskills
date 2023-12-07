import styles from './details.module.scss'
import {useEffect, useRef} from "react";

export const Details = () => {
    const ref = useRef()
    useEffect(() => {
        setInterval(() => {
            ref.current.open = true
        }, 7000)
    }, [])
    return <section>
        <h1>Details</h1>
        <div className={styles.container} onCopy={() => console.log('Xya ti umnui')}>
            <details onClick={()=>console.log('click')} onChange={()=>console.log('change')} ref={ref}  className={styles.details}>
                <summary>Books</summary>
                <ul>
                    <li>1. 1994</li>
                    <li>2. Три Товарища</li>
                    <li>3. Ночь в Лисабоне</li>
                    <li>4. Ведьмак</li>
                </ul>
            </details>
        </div>
    </section>
}