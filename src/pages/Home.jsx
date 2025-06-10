
import Slider from "../components/Slider";

import "./Home.css";
import Card from "../components/Card";
import ContadorTempoPassado from "../components/Time";
import CardText from "../components/CardText";
import CardText2 from "../components/CardText2";
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
        <CardText2 />
        <span class="separator"></span>
      </div>
    </>
  );
};

export default Home;
