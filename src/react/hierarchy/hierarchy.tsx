import {useState, memo} from "react";

const TestComponent = memo(({count, setCount1}) => {
    console.log(count, setCount1)
    return <div>
        <h1>This is TestComponent!</h1>
    </div>
})

// Функция TestComponent не будет перерисовываться потому что запоминается ссылка с помощью memo, а если внутри сделать то функция создается каждый раз и ссылка меняется.
const handlerSetCount = () =>{

}

export const Hierarchy = () => {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    return <div>
        <h1>This is Hierarchy!</h1>
        <button onClick={() => setCount(state => state + 1)}>{count}</button>
        <TestComponent count={count1} setCount1={handlerSetCount} setCount2={setCount1}/>
    </div>
}