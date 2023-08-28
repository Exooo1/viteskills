export const LeetCode = () => {
    return <section>
        <h1>LeetCode HERE!</h1>
    </section>
}

// const sleep = (millis: number) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(millis)
//         }, millis)
//     })
// }
// sleep(3000).then(console.log)
//
// const createCounter = (n: number) => {
//     return () => {
//         return n++
//     }
// }
// const resultCounter = createCounter(10)
// console.log(resultCounter())
// console.log(resultCounter())
// console.log(resultCounter())
// console.log(resultCounter())
//
//
// const fn = (n: number, i?: number) => {
//     if (i !== undefined) return n + i
//     return n + 1
// }
// const eachOverElement = (arr: number[], fn: (n: number, i?: number) => number): number[] => {
//     return arr.map(el => fn(el, 10))
// }
// console.log(eachOverElement([1, 2, 3], fn))


// const jump = (nums: number[]) => {
//     if (nums.length === 1 && nums[0] === 0) return true
//     const check = {}
//     nums.forEach(el => {
//         if (check[el] === undefined) check[el] = 1
//         else check[el] += 1
//     })
//
//     let count = 0
//     let isTrue = false
//     for (let i = 0; i <= nums.length; i++) {
//         console.log(count)
//         if (count === (check['0'] > 1 ? nums.length - 1 : nums.length)) {
//             isTrue = true
//             break;
//         }
//         if (nums[count] === 0) return false
//         count += nums[count]
//     }
//     return isTrue
// }


// const jump = (nums: number[]) => {
//     let count = 0
//     let isTrue = false
//     const zero = nums.filter(el => el === 0).length
//     if (nums.length === 1 && nums[0] === 0) return true
//     for (let i = 0; i <= nums.length; i++) {
//         if(nums[count] === nums.length) return true
//         if(nums[count] === nums[nums.length]) return true
//         if (!zero) count += 1
//         if (count === (zero > 1 ? nums.length - 1 : nums.length)) {
//             isTrue = true;
//             break;
//         }
//         if (nums[count] === 0) return false
//         count += nums[count]
//     }
//     return isTrue
// }
//
// console.log(jump([2, 0, 0])) // true
// console.log(jump([1, 0, 1, 0])) // false
// console.log(jump([2, 1, 0, 0])) // false
// console.log(jump([1])) //true
// console.log(jump([0]))// true
// console.log(jump([3, 2, 1, 0, 4]))//false
// console.log(jump([2, 0]))//true
// console.log(jump([2, 3, 1, 1, 4]))//true
// console.log(jump([1,2]))//true
// console.log(jump([2,5,0,0]))//true


// const emptyObject = (value: any) => {
//     if (value?.length) return !value.length
//     return !Object.values(value).length
// }
//
// console.log(emptyObject({name: 'vlas'}))
// console.log(emptyObject([]))

// const expect = (val) => {
//     return {
//         toBe(value) {
//             if (value !== val)  throw  new Error('Not Equal')
//             return value === val
//         },
//         notToBe(value) {
//             if (val !== value) return true
//             else throw new Error('Equal')
//         }
//     }
// }
// console.log(expect(10).toBe(5))
// console.log(expect(10).notToBe(null))

// const prices = (prices) => {
//     let maxPrice = 0
//     let minPrice = prices[0]
//     const price = []
//     for (let i = 0; i < prices.length; i++) {
//         minPrice = minPrice < prices[i] ? minPrice : prices[i]
//         if(prices[i + 1]){
//             price.push(prices[i + 1] - minPrice)
//         }
//     }
//     return Math.max(...price.filter(el=>el>0)) === -Infinity ? 0 : Math.max(...price.filter(el=>el>0))
// }

// const prices2 = (prices) => {
//     let min = prices[0]
//     let max = 0
//     for (let i = 0; i < prices.length; i++) {
//         min = min > prices[i] ? prices[i] : min
//         if (prices[i + 1] !== undefined) {
//             max = (prices[i + 1] - min) > max ? (prices[i + 1] - min) : max
//         }
//     }
//     return max
// }

// console.log(prices2([7, 1, 5, 3, 6, 4]))
// console.log(prices2([7, 6, 4, 3, 1]))
// console.log(prices2([2, 4, 1]))
//
//
// const reverse = (s) => {
//     const arr = []
//     for (let i = s.length - 1; i >= 0; i--) {
//        arr.push(s[i])
//     }
//     console.log(arr.length)
//     return arr
// }
// console.log(reverse(["h","e","l","l","o"]))
//
// const evenOrOdd = (num) => {
//     return !(num % 2) ? 'Even' : 'Odd'
// }
//
// console.log(evenOrOdd(3))
//
// const listFiltering = (l) => {
//     return l.filter(el => typeof el !== 'string')
// }
//
// console.log(listFiltering([1,2,'aasf','1','123',123]))

const evenOrOddArray = (integers) => {
    const even = integers.filter(el => !(el % 2))
    const odd = integers.filter(el => el % 2)
    return even.length > odd.length ? +odd.join('') : +even.join('')
    // let number = 0
    // const type = integers.filter(el => {
    //     if (!(el % 2)) return 1
    // })
    // if (type.length > 1) {
    //     integers.forEach(el => {
    //         if (el % 2) number = el
    //     })
    // } else {
    //     integers.forEach(el => {
    //         if (!(el % 2)) number = el
    //     })
    // }
    // return number
}
console.log(evenOrOddArray([150, 230, 50, 3]))

const yourFriend = (friends) => friends.filter(el => el.length === 4)
console.log(yourFriend(["Love", "Your", "Face", "1"]))

const highAndLowest = (numbers: string) => {
    const min = Math.min(...numbers.split(' ').map(el=>+el))
    const max = Math.max(...numbers.split(' ').map(el=>+el))
    return `${max} ${min}`
}

console.log(highAndLowest("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
