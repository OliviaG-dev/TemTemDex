import "./home.css";
import Card from "../../components/card/card";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [temtemData, setTemtemData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://temtem-api.mael.tech/api/temtems";

  const getAllTemtem = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setTemtemData(res.data);

    
    setLoading(false);
  };

  useEffect(() => {
    getAllTemtem();
  }, [url]);

  console.log(temtemData);
  return (
    <>
      <div className="home">
        <div className="home__card">
          <Card key="item" data={temtemData} />
        </div>
      </div>
    </>
  );
};

export default Home;
