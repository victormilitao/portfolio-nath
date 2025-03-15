type TitleProps = {
  type: "1" | "2" | "3" | "4" | "5" | "6";
  text: string;
};

const typesCss: Record<string, string> = {
  "1": "text-lg",
  "2": "text-2xl",
  "3": "text-3xl",
  "4": "text-4xl",
  "5": "text-secondary-1 text-2xl font-semibold",
  "6": "text-secondary-1 text-lg",
};

export const Title = ({ type, text }: TitleProps) => {
  return <p className={`text-left font-bold ${typesCss[type] || "text-lg"}`}>{text}</p>;
};
