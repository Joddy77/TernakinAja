import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-5xl font-semibold">Hello World</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
