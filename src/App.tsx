import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import Watchlist from "./components/Watchlist";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        // Chemin absolut
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watchlist />} />
      </Routes>
    </div>
  );
};

export default App;
