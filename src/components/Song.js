import { Link } from "react-router-dom";

const Song = (props) => {
  const song = props.song;

  // style
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={div}>
      <Link to={`/song/${song.id}`}>
        <h1>{song.title}</h1>
      </Link>
      <h2>{song.artist}</h2>
    </div>
  );
};

export default Song;