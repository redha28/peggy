import Link from "next/link";

type ButtonProps = {
  text?: string;
  className?: string;
  Icons?: React.ElementType;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({
  text,
  className = "",
  Icons,
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const Content = () => (
    <div className="flex items-center gap-2">
      {Icons && <Icons className="text-2xl" />} {/* Hanya render icon jika tersedia */}
      <span>{text}</span>
    </div>
  );

  return href ? (
    <Link
      href={href}
      className={`${className} border px-4 py-2 rounded-xl active:scale-95 flex justify-center items-center`}>
      <Content />
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={`${className} border px-4 py-2 rounded-xl active:scale-95 flex justify-center items-center`}>
      <Content />
    </button>
  );
}
