import {useState} from "react";

const DEFAULT_CARS = ['Audi', 'Volkswagen', 'BMV', 'Tesla']

export const Cars = () => {
    const [bought, setBought] = useState<string[]>([])
    const [cars, setCars] = useState<string[]>(DEFAULT_CARS)
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