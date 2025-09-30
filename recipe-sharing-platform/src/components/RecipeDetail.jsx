import { useEffect, useState } from "react";
import fetchJsonData from "../services/Data_Json";
import Card from "./Card";
import { useParams } from "react-router-dom";
import configData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        let resData = await fetchJsonData();
        const filtedData = resData.find((x) => x.id === Number(id));
        setData(filtedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);
  if (!data) {return <p>Recipe Not Found</p>}
  return (
    <div className="flex justify-center flex-col gap-8 font-mono">
      <div>RecipeDetail</div>
      {loading && <p>Loading...</p>}
      <div key={id} className="bg-[rgba(123,178,224,0.3)] text-xl shadow font-bold">
        <Card img={data.image} title={data.ingredients} summary={data.instructions} />
      </div>
    </div>
  );
}
