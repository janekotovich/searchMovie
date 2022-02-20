import styles from "./ProfilePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../store/fav";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.favs.favourites);
  console.log(liked);

  return (
    <>
      <div className={styles.profilePageDiv}>
        <h1> Movies I liked </h1>
        <ul className={styles.personalMovies}>
          {liked.map((m) => (
            <li key={m.id}>
              <img src={m.image} />
              <div>
                <h2>{m.title}</h2>
                <button
                  onClick={() => {
                    if (liked.some((mov) => mov.id === m.id)) {
                      dispatch(favActions.removeFromFav(m));
                    }
                  }}
                >
                  Remove me
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ProfilePage;
