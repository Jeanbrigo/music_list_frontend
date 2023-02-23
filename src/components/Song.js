import { Link } from "react-router-dom";

const Song = (props) => {
  const song = props.song;

  // style


  return (
    <div class="song">
      <Link to={`/song/${song.id}`}>
        <h1>Song Title: {song.title}</h1>
      </Link>
      <h2>Artist: {song.artist}</h2>
    </div>
  );
};

export default Song;