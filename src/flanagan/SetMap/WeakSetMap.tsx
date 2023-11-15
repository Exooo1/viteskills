export const WeakSetMap = () => {
    return <div>
        <h1>WeakSetMap</h1>
    </div>
}

const setWeak = new WeakSet()
const user = {name: 'vlas'}
setWeak.add(user)
console.log(setWeak)
const fujc = () => {
    return user
}
console.log(fujc())

const weakMap = new WeakMap()
let user2: any = {name: 'Diana'}
weakMap.set(user2, 2)
user2 = null
console.log(weakMap)

//WeakMap and WeakSet отличается тем что ключ должен быть объект, если ссылки объектов не ссылаются ни на что то сборщик мусор очищает их
// поэтому WeakMap пустой
// weakMap and weakSet не реализуют много методов, например size ()


