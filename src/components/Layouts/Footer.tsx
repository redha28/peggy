import { AnimatedTooltip } from "../Elements/AnimatedToolTip";
import fotoKu from "@/assets/fotoku.webp";
import { IconPeggy } from "../Elements/IconPeggy";

const Footer = () => {
  return (
    <div className="w-full h-32 flex px-32 items-center">
      <div className="flex-1 flex gap-4 items-center">
        <IconPeggy />
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
