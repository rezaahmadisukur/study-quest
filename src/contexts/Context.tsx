import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from "react";

interface IContext {
  celebrationMessage: boolean;
  setCelebrationMessage: Dispatch<SetStateAction<boolean>>;
  plusExp: number;
  setPlusExp: Dispatch<SetStateAction<number>>;
}

interface IChildren {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<IContext>({
  celebrationMessage: false,
  setCelebrationMessage: () => {},
  plusExp: 0,
  setPlusExp: () => {}
});

const ContextProvider = ({ children }: IChildren) => {
  const [celebrationMessage, setCelebrationMessage] = useState<boolean>(false);
  const [plusExp, setPlusExp] = useState<number>(0);

  const ContextValue: IContext = {
    celebrationMessage,
    setCelebrationMessage,
    plusExp,
    setPlusExp
  };

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
