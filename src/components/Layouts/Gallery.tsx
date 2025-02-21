"use client";

import { InfiniteMovingCards } from "../Elements/InfiniteMovingCard";

// Import gambar
import peggyCouple from "@/assets/Images/peggy-couple.webp";
import peggyDrink from "@/assets/Images/peggy-drink.webp";
import peggyGang2 from "@/assets/Images/peggy-gang.webp";
import peggyHore from "@/assets/Images/peggy-hore.webp";
import peggyPinkGang from "@/assets/Images/peggy-pink-gang.webp";
import peggyPinkLucu from "@/assets/Images/peggy-pink-lucu.webp";
import peggyPink from "@/assets/Images/peggy-pink.webp";
import peggyRandom from "@/assets/Images/peggy-random.webp";
import peggyTuru from "@/assets/Images/peggy-turu.webp";

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
