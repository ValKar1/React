import React, {useState} from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function SinglePhoto() {  // default lazy

  const params = useParams();
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const comment = searchParams.get("comment");

  const inputChanged = (event) => {
    setInputValue(event.target.value)
  }

  const buttonClicked = () => {
    setSearchParams({comment: inputValue})
  }

  return (
    <>
      <h2>Ein tolles Foto:</h2>
      <Link to="..">Zurück zu allen Fotos</Link>
      <hr />
      <img
        alt=""
        width="100%"
        src={`https://picsum.photos/id/${params.id}/460/240`}
        />
        <p>{comment}</p>
      <input name="comment" type="text" onInput={inputChanged} />
      <button type="button" onClick={buttonClicked}>
        Search
      </button>
    </>
  );
}
