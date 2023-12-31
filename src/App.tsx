import Experience from "./Experience";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setData(data);
    };
    loadData();
  }, []);
  return (
    <>
      <Navbar data={data?.navbar} url={data?.assets_url} />
      <Hero data={data?.hero} url={data?.assets_url} />
      <Experience data={data?.experience} />
      <Projects data={data?.projects} url={data?.assets_url} />
      <Contact data={data?.contact} navData={data?.navbar} url={data?.assets_url} />
    </>
  );
}

export default App;
