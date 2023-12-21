export const CopyObject = () => {
    return <section>
        <h1>CopyObject is here!</h1>
    </section>
}


const user = {
    name:'Diana',
    age:22,
    good:{
        city:'s',
        test:{
            surname:'vasy'
        }
    }
}

const user1 = {...user}
let user2 = JSON.stringify(user)
const user3 = {}
const user4 = structuredClone(user)
user4.good.test.surname = 'Arhimed'
user2 = JSON.parse(user2)
user1.name = 'Vlas'
// user2.name = 'Obema'
user1.good.test.surname = 'alesha'


// for( let val in user){
//     user3[val] = user[val]
// }
// user3.good.test = {surname:'zalupa'}

console.log(user)
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)
// console.log(user['test'])

