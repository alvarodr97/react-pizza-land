import { useSelector } from "react-redux";
import { RootState } from "../shared/store/store";

const useUsername = () => {
  const username = useSelector((state: RootState) => state.user.username);
  return username;
};

export default useUsername;
