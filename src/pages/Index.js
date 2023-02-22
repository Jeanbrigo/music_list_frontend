import { useLoaderData, Form } from "react-router-dom";
import Song from "../components/Song";


const Index = (props) => {
  const songs = useLoaderData();

  return <>
  <div style={{textAlign: "center"}}>
      <h2>Add a song</h2>
      <Form action="/create" method="post">
          <input type="text" name="title" placeholder="song title"/>
          <input type="text" name="artist" placeholder="artist"/>
          <button>Add New Song</button>
      </Form>
  </div>
  {songs.map((song) => <Song key={song.id} song={song} />)}
  </>;
};

export default Index;