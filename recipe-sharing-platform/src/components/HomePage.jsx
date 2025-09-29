import { useEffect, useState } from "react";
import configData from "../data.json";
import Card from "./Card";

export default function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(configData);
    setData(configData);
  }, [configData]);

  return (
    <div>
      <div className="text-xl">HomePage</div>
      {data.map((x) => (
        <div key={x.id}>
          <Card image={x.image} title={x.title} />
        </div>
      ))}
    </div>
  );
}
