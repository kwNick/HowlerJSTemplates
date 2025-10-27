'use client';

import { useRef, useEffect, useState } from "react";
import { Howl } from "howler";

const MusicManager = () => {
  const [currentTrack, setCurrentTrack] = useState("calm");
  const tracks = useRef<Record<string, Howl> | null>(null);

  useEffect(() => {
    tracks.current = {
      calm: new Howl({
        src: ["music/olympic_preview.mp3"],
        volume: 0,
        loop: true,
      }),
      intense: new Howl({
        // src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"],
        src: ["music/atari_space-80s_preview.mp3"],
        volume: 0,
        loop: true,
      }),
    };

    return () => Object.values(tracks.current ?? {}).forEach((s) => s.unload());
  }, []);

  const fadeIn = (track?: Howl) => {
    if (!track?.playing()) track?.play();
    track?.fade(0, 0.6, 2000);
  };

  const fadeOut = (track?: Howl) => {
    track?.fade(track.volume(), 0, 2000);
    setTimeout(() => track?.stop(), 2100);
  };

  const switchTrack = () => {
    const current = tracks.current?.[currentTrack];
    const nextKey = currentTrack === "calm" ? "intense" : "calm";
    const next = tracks.current?.[nextKey];

    fadeIn(next);
    fadeOut(current);
    setCurrentTrack(nextKey);
  };

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column", maxWidth: "200px" }}>
      <button onClick={() => fadeIn(tracks.current?.[currentTrack])}>Fade In 🎵</button>
      <button onClick={() => fadeOut(tracks.current?.[currentTrack])}>Fade Out 🔇</button>
      <button onClick={switchTrack}>Switch Track 🔁</button>
      <p>Now Playing: {currentTrack}</p>
    </div>
  );
};

export default MusicManager;
