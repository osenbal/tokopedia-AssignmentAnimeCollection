import { createContext, useContext, useMemo, useState } from "react";

interface IGlobalState {
  isAuth: boolean;
}

const GlobalContext = createContext({
  globalState: {
    isAuth: false,
  },
  setGlobalState: () => undefined,
});

GlobalContext.displayName = "GlobalContext";

export const GlobalProvider = (props: any) => {
  const [state, setState] = useState(null);

  const value = useMemo(() => {
    return {
      state,
      setState,
    };
  }, [state, setState]);

  return <GlobalContext.Provider value={value} {...props} />;
};

export function useGlobalContext(): {
  setState: (
    patch:
      | Partial<IGlobalState>
      | ((prevState: IGlobalState) => Partial<IGlobalState>)
  ) => void;
  state: IGlobalState;
} {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  const { globalState, setGlobalState } = context;

  return {
    state: globalState,
    setState: setGlobalState,
  };
}
