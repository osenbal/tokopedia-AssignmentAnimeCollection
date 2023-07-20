import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  setAccessToken,
  removeAccessToken,
} from "@/Domain/services/JWT/jwt.service";
import { useGlobalContext } from "@/Domain/context/global.context";

const LoginTokenPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setState } = useGlobalContext();

  const filterToken = location.hash.split("&")[0].split("=")[1];
  const filterTokenType = location.hash.split("&")[1].split("=")[1];
  const filterExpire = location.hash.split("&")[2].split("=")[1];

  useEffect(() => {
    if (filterToken && filterTokenType && filterExpire) {
      setAccessToken(filterToken, filterExpire);
      setState((prev) => ({ ...prev, isAuth: true }));
    } else {
      removeAccessToken();

      setState((prev) => ({ ...prev, isAuth: false }));
    }

    navigate("/profile", {
      replace: true,
      state: { expireTime: filterExpire },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
};

export default LoginTokenPage;
