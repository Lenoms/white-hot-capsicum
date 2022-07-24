import {
  getDatabase,
  set,
  ref as databaseRef,
  get,
  child,
} from "firebase/database";

const AlbumReviewService = {
  getAlbums: function () {
    return new Promise(function (resolve, reject) {
      const dbRef = databaseRef(getDatabase());
      get(child(dbRef, `albums`)).then((snapshot) => {
        if (snapshot.exists()) {
          resolve(snapshot.val());
        } else {
          console.log("No data available");
          reject();
        }
      });
    });
  },

  addAlbum: function (albumName, albumReview) {
    const db = getDatabase();
    set(databaseRef(db, "albums/" + albumName), {
      albumName: albumName,
      albumReview: albumReview,
    });
  },
};

export default AlbumReviewService;
