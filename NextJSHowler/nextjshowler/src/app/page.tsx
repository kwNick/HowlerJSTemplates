import AudioPlayer from "@/components/AudioPlayer";
import AudioPlayer2 from "@/components/AudioPlayer2";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <AudioPlayer />
        <AudioPlayer2 />
      </main>
    </div>
  );
}
