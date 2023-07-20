import { createContext, useContext, useMemo, useState } from "react";
import { getAccessToken } from "../services/JWT/jwt.service";

interface IGlobalState {
  isAuth: boolean;
  userId: number | null;
}

interface IGlobalContext {
  state: IGlobalState;
  setState: (
    patch:
      | Partial<IGlobalState>
      | ((prevState: IGlobalState) => Partial<IGlobalState>)
  ) => void;
}

const accessToken = getAccessToken();

const GlobalContext = createContext<IGlobalContext>({
  state: {
    isAuth: accessToken === null ? false : true,
    userId: null,
  },
  setState: () => undefined,
});

GlobalContext.displayName = "GlobalContext";

export const GlobalProvider = (props: any) => {
  const [state, setState] = useState<IGlobalState>({
    isAuth: accessToken === null ? false : true,
    userId: null,
  });

  const value = useMemo(() => {
    return {
      state,
      setState,
    };
  }, [state, setState]);

  return <GlobalContext.Provider value={value} {...props} />;
};

export function useGlobalContext(): IGlobalContext {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
}
