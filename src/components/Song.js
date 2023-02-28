import { Link } from "react-router-dom";

const Song = (props) => {

  const song = props.song;

  return (
    <div class="song">
      <Link to={`/song/${song.id}`}>
        <h1>Title: {song.title}</h1>
      </Link>
      <h1>Artist: {song.artist}</h1>
    </div>
  );
};

export default Song;