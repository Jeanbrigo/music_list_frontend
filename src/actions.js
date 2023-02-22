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

export async function UpdateAction({ request, params }) {
    // get the form data
    const formData = await request.formData();
  
    // construct new todo
    const updatedSong = {
      title: formData.get("title"),
      artist: formData.get("artist"),
    };
  
    // request to update route in backend
    await fetch(url + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSong),
    });
  
    // redirect back to the index page
    return redirect("/");
  }

  export async function DeleteAction({params}){
    //get the id
    const id = params.id

    // send request to delete
    await fetch(url + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}