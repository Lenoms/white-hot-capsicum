import {
  getDatabase,
  set,
  ref as databaseRef,
  get,
  child,
  remove,
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
          resolve([]);
        }
      });
    });
  },

  getArtists: function () {
    return new Promise(function (resolve, reject) {
      const artists = [];
      AlbumReviewService.getAlbums().then((data) => {
        const albums = Object.values(data);
        for (let i = 0; i < albums.length; i++) {
          artists.push(albums[i].albumArtist);
        }
        resolve(artists);
      });
    });
  },

  addAlbum: function (albumName, albumArtist, albumReview) {
    const db = getDatabase();
    set(databaseRef(db, "albums/" + albumName), {
      albumName: albumName,
      albumArtist: albumArtist,
      albumReview: albumReview,
    });
  },

  deleteAlbum: function (albumName, e) {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    const db = getDatabase();
    remove(databaseRef(db, "albums/" + albumName));
  },
};

export default AlbumReviewService;
