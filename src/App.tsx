import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {DragAndDrop} from "./components/draganddrop/draganddrop";
import {LeetCode} from "./leetCode/leetcode";
import {Function} from "./flanagan/function/function";
import {ConsoleLoggin} from "./other/consoleLoggin";
import {Memoization} from "./other/memoization";
import {Class} from "./flanagan/class/class";
import {Async} from "./other/async";
import {CopyObject} from "./utils/copyObject";
import {CheckOnNumber} from "./utils/checkOnNumber";
import {ImportExports} from "./flanagan/importsExports/importExports";
import {PrintComponents} from "./components/print/printComponents";
import {Upload} from "./components/uplaod/upload";
import {OrdersUseEffect} from "./react/useEffect/ordersUseEffect";
import {SetMap} from "./flanagan/SetMap/SetMap";
2
function App() {
    return (
        <>
            {/*<div>*/}
            {/*    /!*<DragAndDrop/>*!/*/}
            {/*    <LeetCode/>*/}
            {/*    /!*<Function/>*!/*/}
            {/*    /!*<ConsoleLoggin/>*!/*/}
            {/*    /!*<Memoization/>*!/*/}
            {/*    /!*<Class/>*!/*/}
            {/*    /!*<Async/>*!/*/}
            {/*    /!*<CopyObject/>*!/*/}
            {/*    /!*<CheckOnNumber/>*!/*/}
            {/*<ImportExports/>*/}
            {/*<SetMap/>*/}
            <OrdersUseEffect/>
            {/*    <PrintComponents/>*/}
            {/*<Upload/>*/}
            {/*<PrintComponents/>*/}
            {/*</div>*/}
        </>
    )
}

export default App
