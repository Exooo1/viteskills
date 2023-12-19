import styles from './text.module.scss'

export const Text = () => {
    return <div>
        <h1>THis is Text!</h1>
        <div className={styles.container_text_block}>
            <p>Hello my name is vlas how a re you?</p>
        </div>
    </div>
}