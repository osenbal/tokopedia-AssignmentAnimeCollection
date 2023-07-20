import { useState, useEffect } from "react";
import UseUser from "@/Domain/hooks/useUser";
import { removeAccessToken } from "@/Domain/services/JWT/jwt.service";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "@/Domain/context/global.context";
import { setCookie } from "@/Data/Local/cookie/cookie.local.data";
import { useLocation } from "react-router-dom";

const ProfileViewModel = () => {
  const [user, setUser] = useState<any>({} as any);

  const navigate = useNavigate();

  // get state from navigation
  const location = useLocation();
  const expireTime = location.state?.expireTime;

  const { setState } = useGlobalContext();
  const { useMe } = UseUser();
  const { data, loading, error } = useMe();

  const logout = () => {
    removeAccessToken();
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setState((prev: any) => {
        return {
          ...prev,
          userId: data.user.id,
        };
      });

      if (expireTime) {
        setCookie("userId", data.user.id, expireTime);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    user,
    loading,
    error,
    logout,
  };
};

export default ProfileViewModel;
