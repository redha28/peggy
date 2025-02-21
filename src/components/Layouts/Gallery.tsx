"use client";

import { InfiniteMovingCards } from "../Elements/InfiniteMovingCard";

// Import gambar
import peggyCouple from "@/assets/images/peggy-couple.webp";
import peggyDrink from "@/assets/images/peggy-drink.webp";
import peggyGang2 from "@/assets/images/peggy-gang.webp";
import peggyHore from "@/assets/images/peggy-hore.webp";
import peggyPinkGang from "@/assets/images/peggy-pink-gang.webp";
import peggyPinkLucu from "@/assets/images/peggy-pink-lucu.webp";
import peggyPink from "@/assets/images/peggy-pink.webp";
import peggyRandom from "@/assets/images/peggy-random.webp";
import peggyTuru from "@/assets/images/peggy-turu.webp";

// Array gallery dengan gambar
const gallery = [
  peggyCouple,
  peggyDrink,
  peggyGang2,
  peggyHore,
  peggyPinkGang,
  peggyPinkLucu,
  peggyPink,
  peggyRandom,
  peggyTuru,
];

export function Gallery() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={gallery} direction="right" speed="normal" />
    </div>
  );
}
