import React from "react";
import { ErrorBoundary } from "./ErrorBoundary"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Photos } from "./Photos";
// import { SinglePhoto } from "./SinglePhoto";
const SinglePhoto = React.lazy(() =>  // Lazy
  import('./SinglePhoto')
);

export function App1() {

  const imageIds = ["111", "211", "311", "351", "678"]

  return(
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <header>
            <h1>Routing</h1>

            <nav>
              <Link to="/">Home</Link>
              <Link to="/photos">Photos</Link>
            </nav>
          </header>

          <hr />

          <main>
            <React.Suspense fallback={
              <div>Lade Component...</div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/photos">
                  <Route
                    path=""
                    element={<Photos imageIds={imageIds} />}
                   />
                  <Route
                    path=":id"
                    element={
                      <ErrorBoundary>
                        <SinglePhoto />
                      </ErrorBoundary>
                    }
                  />
                </Route>
              </Routes>
            </React.Suspense>
          </main>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}
