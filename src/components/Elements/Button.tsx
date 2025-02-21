type ButtonProps = {
  text?: string;
  className?: string;
};

export default function Button({ text, className }: ButtonProps) {
  return (
    <button className={`border px-4 py-2 rounded-xl active:scale-95 ${className}`}>
      <span>{text}</span>
    </button>
  );
}
