import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from "react";

interface IContext {
  isCompleteTask: boolean;
  setIsCompleteTask: Dispatch<SetStateAction<boolean>>;
  plusExp: number;
  setPlusExp: Dispatch<SetStateAction<number>>;
}

interface IChildren {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<IContext>({
  isCompleteTask: false,
  setIsCompleteTask: () => {},
  plusExp: 0,
  setPlusExp: () => {}
});

const ContextProvider = ({ children }: IChildren) => {
  const [isCompleteTask, setIsCompleteTask] = useState<boolean>(false);
  const [plusExp, setPlusExp] = useState<number>(0);

  const ContextValue: IContext = {
    isCompleteTask,
    setIsCompleteTask,
    plusExp,
    setPlusExp
  };

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
