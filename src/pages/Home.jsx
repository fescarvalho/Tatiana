import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fotos } from "../utils/images";
import Slider2 from "../components/Slider2";

import "./Home.css";
import Card from "../components/Card";
import ContadorTempoPassado from "../components/Time";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        className="home"
      >
        <Card slider={<Slider2 images={fotos} />}> </Card>
        <h1>Fernando e Tatiana</h1>
        <p class="text">Juntos a :</p>
        <p>
          <ContadorTempoPassado dataPassada="2024-09-08T00:00:00" />
        </p>
        <span class="separator"></span>
      </motion.div>
    </>
  );
};

export default Home;
