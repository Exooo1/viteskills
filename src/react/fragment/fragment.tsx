import { use } from 'react';

export const FragmentTwo = () => {
    return <>
        <h1>This is FragmentTwo!</h1>
    </>
}

export const Fragment = () => {
    return <div>
        <h1>This is Fragment!</h1>
        <>
            <p>Description about FragmentTwo</p>
            <FragmentTwo/>
        </>
    </div>
}