import styles from './print.module.scss'
const Test1 = () =>{
    return <div className={styles.pagebreak}>
        <h1>Hello</h1>
    </div>
}
const Test2 = () =>{
    return <div className={styles.pagebreak}>
        <h1>Vlas</h1>
    </div>
}

const style = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    background: 'rgba(4,4,4,0.49)',
    zIndex: 10,
    pageBreakBefore: 'always',
};
const test = [1,2,3,4,5,6,7]
export const PrintComponents = () =>{
    return <div style={style}>
        <button onClick={()=>window.print()}>print</button>
        {test.map(el=><Test1/>)}
    </div>
}
