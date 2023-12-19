import {useEffect, useState} from "react";

let value = ''

const Tess = ({age}) =>{
    return <div>
        <h1>WTF {age}</h1>
    </div>
}

export const Comp = () =>{
    const [t,setT] = useState<any>(null)
    useEffect(()=>{
        return ()=>{ value = ''}
    },[])
    let j = null

    console.log(j)
    return <div>
        <h1>Hello {value}</h1>
        <button onClick={()=>value = 'I am here!'}>change</button>
        <button onClick={()=> {
            // setT(<Tess age={25}/>)
            j = <Tess age={25}/>
            console.log(j)
        }}>t</button>
        {t}
    </div>
}