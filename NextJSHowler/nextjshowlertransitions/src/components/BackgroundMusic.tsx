'use client';

// BackgroundMusic.jsx
import { useRef, useEffect } from 'react';
import { Howl } from 'howler';

const BackgroundMusic = () => {
  const bgRef = useRef<Howl | null>(null);

  useEffect(() => {
    bgRef.current = new Howl({
      src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
      volume: 0,
      loop: true,
      onplay: () => console.log('BG music playing'),
      onfade: () => console.log('BG music fade event')
    });

    // Clean up on unmount
    return () => {
      bgRef.current?.fade(bgRef.current.volume(), 0, 1000).once('fade', () => {
        bgRef.current?.stop();
        bgRef.current?.unload();
      });
    };
  }, []);

  const startMusic = () => {
    const bg = bgRef.current;
    if (!bg?.playing()) {
      bg?.play();
    }
    // Fade in from 0 → 0.8 in 4 seconds
    bg?.fade(0, 0.8, 4000);
  };

  const changeScene = () => {
    const bg = bgRef.current;
    // Fade out
    bg?.fade(bg.volume(), 0, 2000).once('fade', () => {
      console.log('Scene change: fading out done.');
      // e.g. switch track here, then fade back in:
      bg.fade(0, 0.8, 2000);
    });
  };

  const stopMusic = () => {
    const bg = bgRef.current;
    bg?.fade(bg.volume(), 0, 2000).once('fade', () => {
      bg.stop();
    });
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={startMusic}>Start Music</button>
      <button onClick={changeScene}>Scene Change</button>
      <button onClick={stopMusic}>Stop Music</button>
    </div>
  );
};

export default BackgroundMusic;
