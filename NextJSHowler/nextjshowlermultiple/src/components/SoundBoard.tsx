'use client';

// SoundBoard.jsx
import { useRef, useEffect } from "react";
import { Howl } from "howler";

const SoundBoard = () => {
  const sounds = useRef<Record<string, Howl> | null>(null);

  useEffect(() => {
    sounds.current = {
      music: new Howl({
        src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
        volume: 0.4,
        loop: true,
      }),
      click: new Howl({
        src: ["./music/drive-at-sunset_preview.mp3"],
        volume: 1.0,
      }),
      alert: new Howl({
        src: ["./music/atari_space-80s_preview.mp3"],
        volume: 0.8,
      }),
    };

    // const sound = new Howl({
    // src: ['effect.mp3'],
    // sprite: {
    //   jump: [0, 1000],   // Play 1 second from start
    //   coin: [2000, 800]  // Play 0.8 sec from 2s mark
    //   }
    // });

    // // later
    // sound.play('jump');
    // sound.play('coin');
    // 🎮 Sound Sprites let you load a single audio file containing multiple effects — great for performance in games.

    return () => {
      // cleanup
      Object.values(sounds.current ?? {}).forEach((sound) => sound.unload());
    };
  }, []);

  const playSound = (name: string) => sounds.current?.[name]?.play();
  const stopMusic = () => sounds.current?.music?.stop();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "200px" }}>
      <button onClick={() => playSound("music")}>Play Music 🎶</button>
      <button onClick={stopMusic}>Stop Music ⏹️</button>
      <button onClick={() => playSound("click")}>Click 🔘</button>
      <button onClick={() => playSound("alert")}>Alert 🚨</button>
    </div>
  );
};

export default SoundBoard;
