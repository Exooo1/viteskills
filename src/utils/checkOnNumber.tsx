export const CheckOnNumber = () => {
    return <section>
        <h1>CheckOnNumber is here!</h1>
    </section>
}
//IsFinite
console.log(isFinite(+'13'))
console.log(isFinite(1001232))
console.log(isFinite(+'22aas'))


//CheckType
const a = 215
const b = '217'
const c = '213abj'
const checkNumber = (value) => {
    if (typeof value === "number") return true
    if (typeof value === 'string') {
        return !isNaN(+value);
    }
}
console.log(checkNumber(a))
console.log(checkNumber(b))
console.log(checkNumber(c))


//NaN
const checkNumber2 = (value) =>{
    return !isNaN(+value)
}
console.log(checkNumber2(a))
console.log(checkNumber2(b))
console.log(checkNumber2(c))
