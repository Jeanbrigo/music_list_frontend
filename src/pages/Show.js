import { Link, useLoaderData, Form } from "react-router-dom";
import Footer from "../components/Footer";

const Show = (props) => {
  const song = useLoaderData();

  return (
    <div>
      <h1>Song Title: {song.title}</h1>
      <h1>Artist: {song.artist}</h1>
      <div>
        <h2>Update this song:</h2>
        <Form id="updaterForm" action={`/update/${song.id}`} method="post">
          <input
            type="text"
            name="title"
            placeholder="Song Title"
            defaultValue={song.title}
          />
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            defaultValue={song.artist}
          />
          <button>Update Song</button>
        </Form>
        <Form class="deleter" action={`/delete/${song.id}`} method="post">
            <button>Remove Song</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      <Footer/>
    </div>
  );
};

export default Show;