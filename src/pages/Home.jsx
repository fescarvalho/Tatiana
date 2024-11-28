import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fotos } from "../utils/images";
/* import Slider2 from "../components/Slider2"; */
import Slider from "../components/Slider";

import "./Home.css";
import Card from "../components/Card";
import ContadorTempoPassado from "../components/Time";
import CardText from "../components/CardText";

const Home = () => {
  return (
    <>
      <div className="home">
        {/*   <Card slider={<Slider2 images={fotos} />}> </Card> */}
        <Card slider={<Slider />}> </Card>
        <h1>Fernando e Tatiana</h1>
        <p class="text">Juntos a :</p>
        <p>
          <ContadorTempoPassado dataPassada="2024-09-08T00:00:00" />
        </p>
        <CardText />

        <span class="separator"></span>
      </div>
    </>
  );
};

export default Home;
