import { ReactNode } from "react";

interface Props {
  small?: boolean;
  shadow?: string;
  children?: ReactNode | ReactNode[];
}

export const Panel: React.FC<Props> = ({ small, shadow, children }: Props) => {
  const panelWidth: string = small ? "max-w-fit" : "max-w-full";
  const panelShadow: string =
    shadow === "orange"
      ? "shadow-[0_40px_40px_-15px_rgba(250,137,123,0.35)]"
      : "shadow-[0_40px_40px_-15px_rgba(204,171,216,0.45)]";
  return (
    <section
      className={`${panelWidth} h-full w-full rounded-[10px] bg-white px-3 py-5 md:px-8 ${panelShadow}`}
    >
      {children}
    </section>
  );
};

export default Panel;
