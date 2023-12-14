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
import {WeakSetMap} from "./flanagan/SetMap/WeakSetMap";
import {TypeArray} from "./flanagan/typeArray/typeArray";
import {ResizeModal} from "./components/modal/resizeModal/resizeModal";
import {Details} from "./html/details/details";
import {OwnHooks} from "./react/hooks/ownHooks";
import {TicTac} from "./components/ticTac/tic-tac";

function App() {
    return (
        <>
            {/*<Details/>*/}
            {/*<ResizeModal/>*/}
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
            {/*<OwnHooks/>*/}
            <TicTac/>
            {/*<SetMap/>*/}
            {/*<WeakSetMap/>*/}
            {/*<TypeArray/>*/}
            {/*<ResizeModal/>*/}
            {/*<OrdersUseEffect/>*/}
            {/*    <PrintComponents/>*/}
            {/*<Upload/>*/}
            {/*<PrintComponents/>*/}
            {/*</div>*/}
        </>
    )
}

export default App
