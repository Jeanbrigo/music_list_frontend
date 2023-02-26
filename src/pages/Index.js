import { useLoaderData, Form } from "react-router-dom";
import Song from "../components/Song";
import Footer from "../components/Footer";


const Index = (props) => {
  const songs = useLoaderData();

  return <>
  <div style={{textAlign: "center"}}>
      <h1>Add A Song Request:</h1>
      <Form class="createForm" action="/create" method="post">
          <h1>Song Title:</h1>
          <input type="text" name="title"/>
          <h1>Artist:</h1>
          <input type="text" name="artist"/>
          <button>Add</button>
      </Form>
  </div>
  {songs.map((song) => <Song key={song.id} song={song} />)}
  <Footer/>
  </>;
};

export default Index;