import {useEffect, useState} from "react";

export {ImportExports}

const ImportExports = () => {
    const [count, setCount] = useState(0)
    const handlerLastCount = () => {
        setCount(state => state + 1)
        setCount(state => state + 1)
        setCount(state => state + 1)
    }

    const [realComponent, setRealComponent] = useState<any>(null);

    useEffect( () => {
        import('./lazyImport').then((module) => {
            setRealComponent(module.default);
        });
    }, []);
    console.log(realComponent)

    return <section>
        <h1>ImportExports is here!</h1>
        <svg height="210" width="500">
            <line x1="0" y1="0" x2="200" y2="200" style={{stroke:"rgb(255,0,0)", strokeWidth:2}} />
        </svg>
        <button onClick={handlerLastCount}>{count}</button>
    </section>
}
//
// console.log(DefaultValue, a)
// console.log(`${DefaultValue}`)
//
// console.log(math.sayHello('diana'))
// console.log(math.sayBye('diana'))
//
// import DefaultValue, {math, a} from './code';
// import * as state from './code'
//
// console.log(state.user)
// console.log(state.default)
// console.log(state, 'state')
// import ('./utils').then(es6 => console.log(es6))
// import {math as doubleMath, default as Vlasik, vlas} from './utils'

const t = async () => {
    const {vlas} = await import ('./utils')
    console.log(vlas)
    return vlas
}
t()

// console.log(doubleMath())
// console.log(Vlasik)
// console.log(vlas)

// import DefaultValue, {math, a} from `./code`; it'll be a mistake
// Однако при импорте значений из модулей, как правило, требуется указывать статический путь к модулю,
// который известен на этапе компиляции. Это позволяет среде выполнения (например, браузеру или Node.js)
// определить зависимости модуля и загрузить их до выполнения кода.

// console.log(DefaultValue = 'g') it'll be a mistake!

