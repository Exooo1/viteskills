export const PropsComponent1 = ({size, name}) => {
    return <div>
        <h1>This is PropsComponent1!</h1>
        <p>{size} and {name}</p>
    </div>
}

export const PropsComponent2 = ( props ) => {
    const size = props.size + 20
    const name = props.name + 'Maskal'
    return <div>
        <h1>This is PropsComponent2!</h1>
        <p>{size} and {name}</p>
    </div>
}

export const PropsComponent3 = ( {size,name='noname'} ) => {
    return <div>
        <h1>This is PropsComponent3!</h1>
        <p>{size} and {name}</p>
    </div>
}

const commonObject = {
    size: 200,
    name: 'vlas'
}
export const PropsComponent = () => {

    const test = (val) =>{
        val.name = 'diana'
    }
    test(commonObject)
    return <div>
        <h1>This is PropsComponent!</h1>
        <p>{commonObject.size} and {commonObject.name}</p>
        <PropsComponent1 {...commonObject}/>
        <PropsComponent2 {...commonObject}/>
        <PropsComponent3 size={commonObject.size} name={null}/>
    </div>
}