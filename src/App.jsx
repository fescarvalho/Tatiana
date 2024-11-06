import Loading from "./help/Loading";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import { useEffect, useState } from "react";

import Rotas from "./Rotas";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <AnimatePresence>
      <div className="app">{loading ? <Loading /> : <Rotas />}</div>
    </AnimatePresence>
  );
}

export default App;
