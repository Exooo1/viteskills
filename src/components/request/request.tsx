import {useEffect} from "react";

export const Request = () => {

    useEffect(() => {
        fetch('', {method: 'GET'})
    }, [])

    const cancelRequest = () => {

    }
    return <div>
        <h1>This is Request!</h1>
    </div>
}