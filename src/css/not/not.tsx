import styles from './not.module.scss'

export const NotTsx = () => {
    return <div>
        <h1>This is NotTsx!</h1>
        <div className={styles.container_notDiv}>
            <button>1</button>
            <button>2</button>
        </div>
    </div>
}