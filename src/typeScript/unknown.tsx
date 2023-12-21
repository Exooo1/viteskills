export const Unknown = () =>{
    return <div>
        <h1>This is Unknown!</h1>
    </div>
}

const text:unknown = 'vlasik'
if(typeof text === 'string') text.toUpperCase()
