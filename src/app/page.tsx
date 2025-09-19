import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot, Code2, Palette, Video } from "lucide-react";

export default function Home() {
  return (
    <div className="relative z-10 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-white">TrueSpace</h1>
        <p className="max-w-xl text-white/80 text-base sm:text-lg">
          Учебное пространство с темами, подтемами, избранным и прогрессом. Интеграция с Telegram WebApp для
          быстрого доступа к обучению.
        </p>

        <section className="mt-6 w-full max-w-3xl">
          <h2 className="mb-4 text-lg font-semibold">Темы уроков</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              asChild
              variant="secondary"
              className="justify-start h-16 rounded-xl text-base sm:text-lg bg-white/10 text-white border-white/10 hover:bg-white/15"
            >
              <Link href="/topics/ii-coding">
                <Code2 className="mr-2 h-5 w-5" /> ИИ‑кодинг
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="justify-start h-16 rounded-xl text-base sm:text-lg bg-white/10 text-white border-white/10 hover:bg-white/15"
            >
              <Link href="/topics/ai-assistants">
                <Bot className="mr-2 h-5 w-5" /> AI ассистенты
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="justify-start h-16 rounded-xl text-base sm:text-lg bg-white/10 text-white border-white/10 hover:bg-white/15"
            >
              <Link href="/topics/design">
                <Palette className="mr-2 h-5 w-5" /> Дизайн
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="justify-start h-16 rounded-xl text-base sm:text-lg bg-white/10 text-white border-white/10 hover:bg-white/15"
            >
              <Link href="/topics/webinars">
                <Video className="mr-2 h-5 w-5" /> Вебинары
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
