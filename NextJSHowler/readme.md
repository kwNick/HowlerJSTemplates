# NextJS + Howler

## nextjshowlertransitions

### ✅ Key points

useRef holds the Howl instance so we don’t recreate it on every render.
We fade in/out using .fade(startVol, endVol, duration).
We wire up once('fade', …) to run logic when fade completes.
On unmount we ensure the music fades out and unloads to free resources.
We keep UI controls simple (start, scene change, stop) to demonstrate the fade behavior.
You might combine this with React context or state if you want to coordinate music with application state (e.g., page/scene changes, route changes).

## nextjshowlertransitions2

### ✅ Explanation

Both tracks are initialized once.
When switching, you fade out one and fade in the other at the same time.
Smooth transitions feel like dynamic scene changes in a game.