import Image from "next/image";
import iconPeggy from "../../../public/icon.webp";
import { AnimatedTooltip } from "../Elements/AnimatedToolTip";
import fotoKu from "@/assets/fotoku.webp";

const Footer = () => {
  return (
    <div className="w-full h-32 flex px-32 items-center">
      <div className="flex-1 flex gap-4 items-center">
        <div>
          <Image
            src={iconPeggy.src}
            width={1000}
            height={1000}
            className="w-16"
            alt=""
            draggable={false}
          />
        </div>
        <p className="font-bold text-2xl">Peggy</p>
      </div>
      <div className="flex-1 flex justify-center">
        <p>© 2025 Redha. All Rights Reserved</p>
      </div>
      <div className="flex-1 flex items-center justify-end w-full">
        <AnimatedTooltip
          items={[
            {
              id: 1,
              name: "redha Dev",
              designation: "Developer",
              image: fotoKu.src,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
