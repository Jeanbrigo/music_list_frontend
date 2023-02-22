import url from "./url";
import { redirect } from "react-router-dom";

export async function CreateAction({ request }) {
  // get the form data
  const formData = await request.formData();

  // construct new todo
  const newSong = {
    title: formData.get("title"),
    artist: formData.get("artist"),
  };

  // request to create route in backend
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSong),
  });

  // redirect back to the index page
  return redirect("/");
}