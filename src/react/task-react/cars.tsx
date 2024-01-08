import {useEffect, useState} from "react";
import axios from "axios";

const DEFAULT_CARS = ['Audi', 'Volkswagen', 'BMV', 'Tesla']

const instance = axios.create({})


export const Cars = () => {
    const [bought, setBought] = useState<string[]>([])
    const [cars, setCars] = useState<string[]>(DEFAULT_CARS)


    const testFunction = async() =>{
        console.log(1)
        const b = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(b)
        new Promise((resolve)=> {
            resolve(2)
            console.log(2)
        })
        console.log(3)
        setTimeout(()=>console.log('bb'),250)
        axios.get('https://jsonplaceholder.typicode.com/users').then(console.log)
        // setTimeout(()=>console.log(4),0)
        // new Promise(()=>setTimeout(()=>console.log(5),1000))
        // new Promise((resolve, reject)=>{
        //     resolve(555)
        // }).then(console.log)
        // console.log(axios.get)
    }

    testFunction()

    const handlerBuyACar = () => {
        if (!cars.length) return
        const randomCar = cars[Math.floor(Math.random() * bought.length)]
        setCars(cars.filter(el => el !== randomCar))
        setBought([...bought, randomCar])
    }

    return <div>
        <h1 t>Автосолон: {cars.join('-')}</h1>
        <button disabled={!cars.length} onClick={handlerBuyACar}>Buy a Car</button>
        <h2>Garage: {bought.join('-')}</h2>
    </div>
}