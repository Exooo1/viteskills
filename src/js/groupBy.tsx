export const GroupBy = () => {
    return <div>
        <h1>This is GroupBy</h1>
    </div>
}

const anyData = [
    {id: 1, name: 'Apple', type: 'fruits'},
    {id: 2, name: 'Apple', type: 'fruits'},
    {id: 3, name: 'Diana', type: 'people'},
    {id: 4, name: 'Audi', type: 'car'},
    {id: 5, name: 'BMW', type: 'car'},
    {id: 6, name: 'Orange', type: 'fruits'},
    {id: 7, name: 'Vlas', type: 'people'},
    {id: 8, name: 'Banana', type: 'fruits'},
]
console.log(Object.groupBy(anyData, ({type}) => type))
