const SpotWAPI = require("spotify-web-api-node")
const dotenv = require('dotenv').config()
const fs = require("fs")

// fs.readFile('songs/songs.js', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// })

let addTo = (artist, track, tracks) => {
  return [...tracks, {
    "artist": artist,
    "track": track
  }]
}

let tracks = addTo("Radiohead", "Bones", [])
tracks = addTo("Radiohead", "Weird Fishes/ Arpeggi", tracks)

console.table(tracks);

console.log(`client id: ${process.env.CLIENT_ID}`);
var spotifyApi = new SpotWAPI({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: 'https://jaredjewell.dev/'
})

spotifyApi.clientCredentialsGrant().then((data) => {
  console.log("access token expires in " + data.body.expires_in);
  spotifyApi.setAccessToken(data.body.access_token)

  tracks.map((track) => (
    spotifyApi.searchTracks(`track:${track.track} artist:${track.artist}`)
      .then((data) => {
        data.body.tracks.items.forEach((track) => {
          console.log(track.name);
          console.log(track.artists[0].name)
        })
      })
  ))

})



