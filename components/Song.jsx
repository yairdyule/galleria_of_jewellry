
export default function Song({ name, artist, album }) {
  // let { name, artist, album } =
  // {
  //   name: "Bones",
  //   artist: "Radiohead",
  //   album: "The Bends"
  // }

  return (
    <>
      <h4 style={{ color: "black" }}>{name}</h4>
      <ul>
        <li>{artist}</li>
        <li>{album}</li>
      </ul>
    </>
  )
}
