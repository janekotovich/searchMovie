import styles from "./ProfilePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../store/fav";
import Pagination from "../UI/Pagination";
import { useState } from "react";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.favs.favourites);
  let pageSize = 7;
  const [currentPage, setCurrentPage] = useState(1);

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
      <Pagination
        className={styles.paginationBar}
        currentPage={currentPage}
        totalCount={liked.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};
export default ProfilePage;
