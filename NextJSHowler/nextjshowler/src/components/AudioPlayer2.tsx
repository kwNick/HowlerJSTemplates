'use client';
import { useState, useRef, useEffect } from "react";
import { Howl } from "howler";

const AudioPlayer2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["music/crank-up-the-engine_preview.mp3.mp3"],
      volume: 0.6,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      onend: () => setIsPlaying(false),
    });

    return () => {soundRef.current?.unload();}
  }, []);

  const togglePlay = () => {
    const sound = soundRef.current;
    if (!sound?.playing()) sound?.play();
    else sound?.pause();
  };

  return (
    <button onClick={togglePlay}>
      {isPlaying ? "Pause 🔊" : "Play ▶️"}
    </button>
  );
};

export default AudioPlayer2;
