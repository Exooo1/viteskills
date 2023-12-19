import styles from './image.module.scss'

export const Image = () => {
    return <div>
        <h1>Here is Image!</h1>
        <div className={styles.scale_image}>
            <img title={'Robot with boys'} src="https://img.freepik.com/premium-photo/two-young-boys-robot-doing-homework-ai-generated_971784-342.jpg" alt=""/>
        </div>
    </div>
}