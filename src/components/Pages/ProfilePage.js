import styles from "./ProfilePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../store/fav";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.favs.favourites);

  return (
    <>
      <div>
        <h1> Movie I liked </h1>
        <ul>
          {liked.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ProfilePage;
