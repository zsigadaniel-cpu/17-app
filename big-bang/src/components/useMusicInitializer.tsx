import { useState } from "react";


export const useMusicInitializer = (musicSource: string) => {
    const [musicArray, setMusicArray] = useState<(Uint8Array | number)[]>([]);

    const initiator = () => {
        const audio = new Audio();
        const audioContext = new AudioContext();
        audio.src = musicSource;
        audio.play()
        const audioSource = audioContext.createMediaElementSource(audio);
        const analyzer = audioContext.createAnalyser();
        audioSource.connect(analyzer);
        analyzer.connect(audioContext.destination);
        analyzer.fftSize = 128;
        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        function animate() {
            analyzer.getByteFrequencyData(dataArray);
            setMusicArray([...Array.from(dataArray)]);
            requestAnimationFrame(animate);
        }
        animate();
    }




    return { initiator, musicArray }
}