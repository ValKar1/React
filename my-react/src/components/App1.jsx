import {useRef} from "react";
import {Navigation} from "./Navigation";

export function App1() {
  const refContainer = useRef(null);

  const buttonClicked = () => {
    // Jump to nav
    // nav.focus
    const nav = refContainer.current;
    if (nav !== null) {
      nav.focus();
    }
  };

  return (
    <>
      <header>

        <Navigation ref={refContainer}/>

        <img
          width="100%"
          src="https://picsum.photos/id/251/700/300"
          alt=""
        />
      </header>

      <main>
        <article>
          <h1>Beitrag 1</h1>
          <p>
            Lo is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lo is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </article>

        <article>
          <h1>Beitrag 3</h1>
          <p>
            Lo is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </article>

        <article>
          <h1>Beitrag 3</h1>
          <p>
            Lo is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </article>
      </main>

      <footer>
        <hr />
        <button type="button" onClick={buttonClicked}>Zur Navigation springen</button>
      </footer>
    </>
  )
}
