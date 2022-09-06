import { ReactNode } from "react";

interface Props {
  width?: number;
  shadow?: string;
  children?: ReactNode | ReactNode[];
}

export const Panel: React.FC<Props> = ({ width, shadow, children }: Props) => {
  function currentWidth() {
    return width || 100;
  }
  function currentShadow() {
    return shadow || "25px_40px_40px_-15px_rgba(204,171,216,0.45)";
  }

  return (
    <section
      className={`w-full max-w-[${currentWidth()}%] rounded-[10px] px-8 py-5 bg-white shadow-[${currentShadow()}]`}
    >
      {children}
    </section>
  );
};

export default Panel;
