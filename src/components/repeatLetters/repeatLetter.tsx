import {useEffect, useState} from "react";

export const RepeatLetter = () => {
    const [letter, setLetter] = useState('')

    useEffect( ()=>{
        navigator.geolocation.getCurrentPosition((result)=>{
            console.log(result)
        })
        const t = async () =>{
            console.log(await navigator.clipboard.read())
        }
        t()
    },[])

    const getSound = () => {
        const text = new SpeechSynthesisUtterance(letter)
        let voices = window.speechSynthesis.getVoices();
        text.voice = voices[17]
        console.log(voices)
        window.speechSynthesis.speak(text)
        setTimeout(() => {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance('Ждать, ожидать'))
        }, 1000)
    }

    return <div>
        <h1>This is RepeatLetter!</h1>
        <input value={letter} onChange={(e) => setLetter(e.target.value)} type="text"/>
        <button onClick={getSound}>listen</button>
    </div>
}