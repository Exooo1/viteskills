import {useState} from "react";
import {Comp} from "./comp";

let mediaRecorder;
let audioStream;

export const RecordAudio = () => {
    const [audios, setAudios] = useState([])
    const [test,setTest] =useState([])
    const [isTest,setIsTest] = useState(false)

    const startAudio = async () => {
        audioStream = await navigator.mediaDevices.getUserMedia({audio: true})
        mediaRecorder = new MediaRecorder(audioStream);

        mediaRecorder.ondataavailable = (e) => {
            console.log(e)
            if (e.data.size > 0) {
                setAudios((prev) => [...prev, e.data]);
            }
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audios, {type: 'audio/wav'});
            const audioUrl = URL.createObjectURL(audioBlob);
            setTest([...test,audioUrl])
        };

        mediaRecorder.start();
    }

    console.log(test)

    const stopRecording = () => {
        mediaRecorder.stop();
        audioStream.getTracks().forEach((track) => track.stop());
    };

    const listenToAudio = async () =>{
        const t = test[0]
        const b = new Blob(t)
        console.log(b)
        // const audioBlob = new Blob(audios, { type: "audio/wav" });
        // const audioUrl = URL.createObjectURL(audioBlob);
        //
        // const audio = new Audio(audioUrl);
        // await audio.play();
    }

    console.log(audios)

    return <div>
        <h1>This is RecordAudio!</h1>
        <button onClick={startAudio}>StartRecord</button>
        <button onClick={stopRecording}>StopRecord</button>
        <button onClick={listenToAudio}>Listen</button>
        <button onClick={()=>setIsTest(!isTest)}>sss</button>
        {isTest && <Comp/>}
    </div>
}