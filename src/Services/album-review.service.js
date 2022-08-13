import {
  getDatabase,
  set,
  ref as databaseRef,
  get,
  child,
  remove,
  push,
  update,
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

  getComments: function (albumName) {
    return new Promise(function (resolve, reject) {
      const dbRef = databaseRef(getDatabase());
      get(child(dbRef, `albums/${albumName}/comments/`)).then((snapshot) => {
        if (snapshot.exists()) {
          resolve(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
          resolve([]);
        }
      });
    });
  },

  addComment: function (albumName, comment) {
    const db = getDatabase();

    const commentData = {
      comment: comment,
      dateTime: getTime(),
    };

    const newCommentKey = push(child(databaseRef(db), "comments")).key;

    const updates = {};
    updates[`albums/${albumName}/comments/` + newCommentKey] = commentData;

    return update(databaseRef(db), updates);
  },
};

function getTime() {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  return datetime;
}

export default AlbumReviewService;
