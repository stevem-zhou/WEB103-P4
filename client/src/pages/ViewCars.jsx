import React, { useEffect, useState } from "react";
import "../App.css";
import CarsAPI from "../services/CarsAPI";
import CarCard from "../components/Card";

const ViewCars = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await CarsAPI.getAllCars();
      setData(data);
    };
    fetchCars();
  }, []);

  return (
    <div>
      {data.map((car) => {
        return (
          <CarCard
            key={car.id}
            name={car.name}
            color={car.color}
            interior={car.interior}
            price={car.price}
            roof={car.roof}
            wheels={car.wheels}
            id={car.id}
          />
        );
      })}
    </div>
  );
};

export default ViewCars;
