import React, { createContext, ReactNode } from "react";
import { ModalProps } from "./modal";

type ModalInterface = ModalProps;
const ModalContext = createContext<ModalInterface | null>(null);

type Props = {
  children: ReactNode[];
};

// export const ModalContextProvider: React.FC<Props> = ({ children }: Props) => (
//   <ModalContext.Provider value={{ open: true, setOpen: }}>
//     {children}
//   </ModalContext.Provider>
// );
