"use client";

import { useEffect, useMemo, useState } from "react";

export default function TelegramWebAppPage() {
  const [ready, setReady] = useState(false);
  const tg = useMemo<TelegramWebApp | undefined>(
    () => (typeof window !== "undefined" ? window.Telegram?.WebApp : undefined),
    []
  );

  useEffect(() => {
    if (!tg) return;

    // Initialize Telegram WebApp
    try {
      tg.ready();
      tg.expand();
    } catch {}

    // Theme sync
    try {
      if (tg.colorScheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      if (tg.backgroundColor) document.body.style.backgroundColor = tg.backgroundColor;
      if (tg.headerColor) {
        // Optional: could apply to a top bar
      }
    } catch {}

    // Setup MainButton
    try {
      tg.MainButton.setText("Готово");
      tg.MainButton.show();
      const onClick = () => {
        tg.close();
      };
      tg.MainButton.onClick(onClick);
      setReady(true);
      return () => tg.MainButton.offClick(onClick);
    } catch {
      setReady(true);
    }
  }, [tg]);

  const tap = () => {
    try {
      tg?.HapticFeedback?.impactOccurred("light");
    } catch {}
  };

  return (
    <div className="relative z-10 flex min-h-[100svh] w-full items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/20 p-6 text-white shadow-2xl backdrop-blur">
        <h1 className="text-2xl font-semibold tracking-tight">Учебное пространство</h1>
        <p className="mt-2 text-white/80 text-sm">
          Страница адаптирована для Telegram WebApp. Кнопка &quot;Готово&quot; внизу — это MainButton Telegram.
        </p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={tap}
            className="rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition-colors"
          >
            Тык (haptic)
          </button>
          {!ready && (
            <span className="text-xs text-white/60">Инициализация…</span>
          )}
        </div>
      </div>
    </div>
  );
}
