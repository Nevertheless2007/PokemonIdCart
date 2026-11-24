"use client";

import { useEffect, useState } from "react";

const API = "https://pokeapi.co/api/v2/pokemon/${id}";
export const PokemonIdCart = () => {
  const [hero, setHero] = useState(null);
  const [isLaoding, setLaoding] = useState(true);
  const [error, setError] = useState("");
  const types = [
    {
      title: "atk",
      emoji: "🗡️",
    },
    {
      title: "hp",
      emoji: "♥️",
    },
    {
      title: "def",
      emoji: "🛡️",
    },
  ];

  const petchPokemonIdCart = async (id) => {
    setLaoding(true);
    setError("");
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (response.ok) {
        const data = await response.json();
        setHero(data);
        console.log(data);
      } else {
        setError("Системийн алдаа гарлаа");
      }
    } catch {
      setError("🛜Интернет холболтын алдаа гарлаа");
    }

    setLaoding(false);
  };
  const randonHeroIdCart = () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    petchPokemonIdCart(randomId);
  };
  useEffect(() => {
    petchPokemonIdCart(6);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-7 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 px-6 py-12 text-white">
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <h1 className="relative z-10 bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
        ⚡ Покемон карт
      </h1>

      <div className="relative z-10 flex min-h-[440px] w-80 flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-amber-50 via-white to-slate-100 p-6 text-slate-900 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.65)] ring-1 ring-white/40">
        {isLaoding && (
          <p className="animate-pulse text-sm font-semibold tracking-wide text-slate-500">
            ⏳ Ачааллаж байна...
          </p>
        )}
        {!isLaoding && error !== "" && (
          <p className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 ring-1 ring-red-200">
            {error}
          </p>
        )}

        {!isLaoding && error === "" && hero !== null && (
          <div className="flex h-full w-full flex-col items-center justify-between gap-3">
            <p className="self-start rounded-full bg-slate-900/5 px-3 py-1 text-xs font-extrabold tracking-wider text-slate-500">
              #{hero.id}
            </p>
            <img
              className="h-[180px] w-[180px] object-contain drop-shadow-[0_14px_18px_rgba(15,23,42,0.22)] transition-transform duration-300 hover:scale-105"
              src={hero.sprites.other["official-artwork"].front_default}
              alt={hero.name}
            />
            <div className="flex gap-2">
              {hero.types?.map((t) => (
                <span
                  key={t.slot}
                  className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold capitalize"
                >
                  {t.type.name}
                </span>
              ))}
            </div>

            <div className="w-full rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 px-4 py-2.5 shadow-md ring-1 ring-amber-400/40">
              <h2 className="bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-300 bg-clip-text text-center text-2xl font-black tracking-wider text-transparent uppercase drop-shadow-sm">
                {hero.name}
              </h2>
            </div>
            <div className="mt-7 grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
              {types.map((item, index) => (
                <div
                  key={item.title}
                  className="group flex items-center  rounded-2xl border border-white/15 bg-white/10 px-3 py-2.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/45 hover:bg-white/15 hover:shadow-[0_10px_25px_-8px_rgba(251,191,36,0.3)]"
                >
                  <p className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-base transition-transform duration-300 group-hover:scale-110">
                    {item.emoji}
                  </p>
                  <p className="min-w-0 flex-1 truncate text-left text-xs font-bold tracking-wide text-white/75 transition-colors group-hover:text-white">
                    {item.title}
                  </p>
                  <p className="shrink-0 bg-gradient-to-b from-yellow-200 to-amber-400 bg-clip-text font-mono text-xl font-black tabular-nums text-transparent">
                    {hero.stats[index].base_stat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        onClick={randonHeroIdCart}
        className="relative z-10 cursor-pointer rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 px-8 py-3.5 text-lg font-extrabold text-slate-900 shadow-lg shadow-amber-400/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-yellow-300 hover:to-amber-200 hover:shadow-amber-300/35 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
      >
        🎲 Санамсаргүй
      </button>
    </main>
  );
};
