import { React, useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import CarsAPI from "../services/CarsAPI";
import { Link } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      const data = await CarsAPI.getCarById(id);
      console.log(data);
      setData(data);
    };
    fetchCar();
  }, []);

  console.log(data);

  return (
    <div className="card">
      <h2>{data.name}</h2>
      <p>Color: {data.color}</p>
      <p>Interior: {data.interior}</p>
      <p>Roof: {data.roof}</p>
      <p>Wheels: {data.wheels}</p>
      <p>Price: {data.price}</p>
      <Link to={`http://localhost:5173/edit/${data.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => CarsAPI.deleteCar(data.id)}>Delete</button>
    </div>
  );
};

export default CarDetails;
