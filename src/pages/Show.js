import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
  const song = useLoaderData();

  return (
    <div>
      <h1>{song.title}</h1>
      <h2>{song.artist}</h2>
      <div>
        <h2>Update this song</h2>
        <Form action={`/update/${song.id}`} method="post">
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
        <Form action={`/delete/${song.id}`} method="post">
            <button>Remove Song</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;