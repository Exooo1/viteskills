export const Memoization = () => {
    return <h1>Memoization</h1>
}

function getName(name) {
    console.log(this)
    return name + (Math.random() * 10).toString(32)
}

function memo(f) {
    const cache = new Map()
    return (newKey) => {
        const result = newKey.split('').map(el => el ** 2).join('+')
        if (cache.has(result)) {
            return cache.get(result)
        } else {
            cache.set(result, f.call(this, newKey))
            return result
        }
    }
}

const func = memo(getName)
console.log(func('513'))
console.log(func('25'))
console.log(func('25'))

const memo2 = () => {
    const set = new Set()
    return (value) => {
        if (set.has(value)) {
            let val = null
            set.forEach(el => el === value ? val = el : null)
            return val
        } else {
            set.add(value)
        }
    }
}

const func2 = memo2()
console.log(func2(15))
console.log(func2(15))
console.log(func2(15))
console.log(func2(25))

let a = 0
let b = 2

{
    [a, b] = [b, a]
}

console.log(a)
