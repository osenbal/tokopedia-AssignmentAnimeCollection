import { useQuery } from "@apollo/client";
import UserServiceImpl from "../services/User/User.service";

const UseUser = () => {
  const userService = UserServiceImpl.getInstance();

  const useMe = () => {
    return useQuery(userService.getMe());
  };

  return {
    useMe,
  };
};

export default UseUser;
