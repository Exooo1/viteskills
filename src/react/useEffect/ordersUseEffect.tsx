import {useEffect, useLayoutEffect, useState} from "react";

const ComponentTwo = () =>{
    console.log('ComponentTwo')

    useEffect(()=>{
        console.log('ComponentTwo USE')
    },[])

    return <section>
        <h1>I am two component</h1>
    </section>
}

export const OrdersUseEffect = () =>{
    const [count,setCount]= useState(1)
    const [name,setName]= useState('vlas')
    console.log('OrdersUseEffect')

    useEffect(()=>{
       console.log('FIRST USE')
        setCount(2)
    },[])

    useEffect(()=>{
        console.log('TWO USE')
        setName('Diana')
    },[count])

    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        for(let i = 0; i < 1000; i++){

        }
    },[])

    return <div>
        <h1>This is OrdersUseEffect!</h1>
        <p>Count: {count}</p>
        <p>Count: {name}</p>
        <ComponentTwo/>
    </div>
}


