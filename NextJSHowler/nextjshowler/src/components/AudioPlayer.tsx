'use client';
// AudioPlayer.jsx
import { useEffect, useRef } from "react";
import { Howl } from "howler";

const AudioPlayer = () => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Create sound only once
    soundRef.current = new Howl({
      // src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
      src: ["/music/atari_space-80s_preview.mp3"],
      volume: 0.6,
      loop: false,
      onplay: () => console.log("Playing..."),
      onend: () => console.log("Finished!")
    });

    return () => {
      // Cleanup when component unmounts
      soundRef.current?.unload();
    };
  }, []);

  const play = () => soundRef.current?.play();
  const pause = () => soundRef.current?.pause();
  const stop = () => soundRef.current?.stop();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default AudioPlayer;
