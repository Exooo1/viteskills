import {useState} from "react";
import {vlasik} from "./utils";

const t = (w) =>{
    const [b,a] = useState(w)
    return [b,a]
}

const hello = () => {
    const [name, setName] = useState('Hello')
    const handlerName = (value) => {
        setName(value)
    }
    return [name, handlerName]
}
export const OwnHooks = ({one:good,two}) => {
    const [test, setTest] = hello()
    const [q, w] = vlasik()

    return <div>
        <h1>I am OwnHooks</h1>
        <input type="text" onChange={(e) => setTest(e.target.value)}/>
        <p>{test}</p>
        <p>{q}</p>
        <p>{good}</p>
    </div>
}