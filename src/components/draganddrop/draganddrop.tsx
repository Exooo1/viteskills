import {useState,DragEvent} from "react";
import styles from './drag.module.scss'

export const DragAndDrop = () => {
    const [widgets, setWidgets] = useState<Array<{ id: number, title: string, active: boolean }>>([
        {id: 1, title: 'soccer', active: false},
        {id: 2, title: 'TV', active: false},
        {id: 3, title: 'PC', active: false},
        {id: 4, title: 'Dota2', active: false},
    ])
    const [active, setActive] = useState<{ id: number, title: string, active: boolean }>({
        id: 0,
        title: '',
        active: false
    })

    const handlerDragStart = (e: any, card: { id: number, title: string, active: boolean }) => {
        console.log('handlerDragStart', card)
        setActive(card)
    }

    const handlerDragEnd = (e: any) => {
        setWidgets(widgets.map(el => ({...el, active: false})))
    }

    const handlerDragOver = (e: DragEvent, card: any) => {
        e.preventDefault()
        setWidgets(widgets.map(el => el.id === card.id ? {...el, active: true} : el))
        console.log('handlerDragOver', card)
    }

    const handlerDragLeave = (e: any) => {
        console.log('handlerDragLeave')
    }

    const handlerDragDrop = (e: any, card: { id: number, title: string, active: boolean }) => {
        e.preventDefault()
        setWidgets(widgets.map(el => {
            if (el.id === card.id) return active
            if (el.id === active.id) return card
            return el
        }))
    }

    return <div className={styles.container}>
        {widgets.map(el => <div style={{background: el.active ? 'green' : ' '}} onDrop={(e) => handlerDragDrop(e, el)}
                                onDragStart={(e) => handlerDragStart(e, el)}
                                onDragLeave={(e) => handlerDragEnd(e)}
                                onDragEnd={(e) => handlerDragEnd(e)} onDragOver={(e) => handlerDragOver(e, el)}
                                draggable={true} className={styles.container_card} key={el.id}>{el.title}</div>)}
    </div>
}
