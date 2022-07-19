import { userInfo } from "os";
import { createContext, ReactNode, useContext, useState } from "react";

type AppContextType = {
  login: (props: LoginProps) => void;
  logout: () => void;
  getUserInfo: () => UserInfoType | null;
};

type AppContextProvider = {
  children: ReactNode;
};

type LoginProps = {
  email: string;
  username: string;
  fullName: string;
  token: string;
};

type UserInfoType = {
  email: string;
  username: string;
  fullName: string;
  token: string;
};

const contextDefaultValues: AppContextType = {
  login: () => {},
  logout: () => {},
  getUserInfo: () => null,
};

const AppContext = createContext<AppContextType>(contextDefaultValues);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }: AppContextProvider) {
  const [online, setOnline] = useState<boolean>(false);
  const [info, setInfo] = useState<UserInfoType | null>(null);

  const value = {
    login: ({ username, email, fullName, token }: LoginProps) => {
      setOnline(true);
      setInfo({ username, email, fullName, token });
    },

    logout: () => {
      setOnline(false);
      setInfo(null);
    },

    getUserInfo: () => {
      return info;
    },
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
