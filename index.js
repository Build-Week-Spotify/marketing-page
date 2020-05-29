let playlists = document.querySelector('.playlists');

function createPlaylist(imageUrl, nameOfPlaylist) {
  let playlist = document.createElement('div');
  let playlistImage = document.createElement('img');
  let playlistName = document.createElement('a');

  playlist.appendChild(playlistImage);
  playlist.appendChild(playlistName);

  playlist.classList.add('playlist');
  playlistImage.classList.add('playlist-box');

  playlistImage.setAttribute('src', imageUrl);
  playlistName.textContent = nameOfPlaylist;

  return playlist;
}

axios.get(`https://spotify-3-ds.herokuapp.com/dummy_data`).then(response => {

  response.data.forEach(function(data) {
    const newPlaylist = createPlaylist(data.album_art, data.album_name);
    playlists.appendChild(newPlaylist);
  });
}).catch(error => {
  console.log(error);
});


// axios.get(`https://spotify-3-ds.herokuapp.com/search/evanescence/my%20immortal`).then(response => {
//   console.log(response);

//   response.data.forEach(function(data) {
//     const newPlaylist = createPlaylist(data.album_art, data.album_name);
//     playlists.appendChild(newPlaylist);
//   });
// }).catch(error => {
//   console.log(error);
// });




