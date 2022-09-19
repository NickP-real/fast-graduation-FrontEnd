import { ReactNode } from "react";

interface Props {
  small?: boolean;
  shadow?: string;
  children?: ReactNode | ReactNode[];
}

export const Panel: React.FC<Props> = ({ small, shadow, children }: Props) => {
  const panelWidth: string = small ? "max-w-[40vw]" : "max-w-full";
  const panelShadow: string =
    shadow === "orange"
      ? "shadow-[25px_40px_40px_-15px_rgba(250,137,123,0.35)]"
      : "shadow-[25px_40px_40px_-15px_rgba(204,171,216,0.45)]";
  return (
    <section
      className={`${panelWidth} w-full rounded-[10px] bg-white px-8 py-5 ${panelShadow}`}
    >
      {children}
    </section>
  );
};

export default Panel;
