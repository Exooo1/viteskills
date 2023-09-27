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

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            {/*<div>*/}
            {/*    <a href="https://vitejs.dev" target="_blank">*/}
            {/*        <img src={viteLogo} className="logo" alt="Vite logo"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://react.dev" target="_blank">*/}
            {/*        <img src={reactLogo} className="logo react" alt="React logo"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
            {/*<h1>Vite + React</h1>*/}
            {/*<div className="card">*/}
            {/*    <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*        count is {count}*/}
            {/*    </button>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.tsx</code> and save to test HMR*/}
            {/*    </p>*/}
            {/*    /!*<DragAndDrop/>*!/*/}
            {/*    /!*<LeetCode/>*!/*/}
            {/*    /!*<Function/>*!/*/}
            {/*    /!*<ConsoleLoggin/>*!/*/}
            {/*    /!*<Memoization/>*!/*/}
            {/*    /!*<Class/>*!/*/}
            {/*    /!*<Async/>*!/*/}
            {/*    /!*<CopyObject/>*!/*/}
            {/*    /!*<CheckOnNumber/>*!/*/}
            {/*    /!*<ImportExports/>*!/*/}
            {/*    <PrintComponents/>*/}
            {/*</div>*/}
            <PrintComponents/>
            {/*<p className="read-the-docs">*/}
            {/*    Click on the Vite and React logos to learn more*/}
            {/*</p>*/}
        </>
    )
}

export default App
