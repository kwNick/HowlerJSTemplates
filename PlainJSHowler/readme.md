# PlainJS + Howler

## howlerTransitions.html

### ✅ What’s going on

We create a Howl instance with initial volume: 0 so the music is silent at start. 
bg.play() starts playback.
bg.fade(0, 1, 3000) transitions volume from 0→1 over 3 seconds. The fade() method is part of Howler’s API. 
For scene-change, we fade out then once fade completes (via once('fade', ...)) we execute the callback: change scene (or track) then fade back in.
For stop: fade volume to 0 and after fade completes, stop playback. This ensures you don’t just abruptly cut off the audio.

### ⚠️ Tips & things to watch

If you call fade() while another fade is in progress, you might need to manage or cancel previous fades. Howler supports on('fade', ...) to listen when fade completes. 
After a fade to 0, if you play again you might need to reset volume (since it remains at whatever you faded to).
Autoplay policies in browsers might prevent playback until user interaction — so you might need to ensure user clicked something before starting audio.
For seamless cross-scene music, you might transition between tracks: fade out current track, load/play next track muted, fade it up, etc.


## howlerTransitions-2.html

### ✅ Explanation

fade(from, to, duration) smoothly adjusts volume.
You can run two tracks simultaneously for seamless transitions.
Use setTimeout to stop the old track once the fade finishes.