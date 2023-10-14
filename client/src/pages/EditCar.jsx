import React, { useEffect, useState } from "react";
import "../App.css";
import CarsAPI from "../services/CarsAPI";
import CarPartsAPI from "../services/CarPartsAPI";
import utils from "../utils/validation";
import { useParams } from "react-router-dom";

const EditCar = () => {
  const [car, setCar] = useState([]);
  const { id } = useParams();
  const [isConvertible, setIsConvertible] = useState("");
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      const data = await CarsAPI.getCarById(id);
      setCar(data);
      setPrice(data.price)
    };
    fetchCar();
  }, []);

  useEffect(() => {
    const fetchColors = async () => {
      const data = await CarPartsAPI.getAllCarParts();
      setData(data);
    };

    fetchColors();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const part = data.filter((part) => part.name === value)[0];

    const result = utils.validate(isConvertible, part.isconvertible);

    const setStates = () => {
      setCar((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
      setPrice((prev) => prev + part.price);
    };

    result ? setStates() : null;
  };

  const createCar = (event) => {
    event.preventDefault();
    CarsAPI.updateCar({ ...car, price: price });
  };

  console.log(car);

  return (
    <>
      <div className="createCar">
        <center>
          <h2>Edit The Car</h2>
        </center>
        <form>
          <label>Name</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            value={car.name}
            onChange={(e) => setCar({ ...car, name: e.target.value })}
            className="select"
          />
          <br />
          <br />
          <label>Covertible?</label>
          <br />
          <select
            id="convertible"
            name="convertible"
            className="select"
            value={isConvertible}
            onChange={(e) => setIsConvertible(e.target.value)}
          >
            <option value="">Select</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <br />
          <br />
          <label>Wheels</label>
          <br />
          <select
            id="wheels"
            name="wheels"
            className="select"
            value={car.wheels}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {data.map((part) =>
              part.category === "wheels" ? (
                <option key={part.name} value={part.name}>
                  {part.name}
                </option>
              ) : null
            )}
          </select>
          <br />
          <br />
          <label htmlFor="color">Color</label>
          <br />
          <select
            id="color"
            name="color"
            className="select"
            value={car.color}
            onChange={handleChange}
          >
            <option value="">Select</option>

            {data.map((part) =>
              part.category === "color" ? (
                <option key={part.name} value={part.name}>
                  {part.name}
                </option>
              ) : null
            )}
          </select>
          <br />
          <br />
          <label htmlFor="roof">Roof</label>
          <br />
          <select
            id="roof"
            name="roof"
            className="select"
            value={car.roof}
            onChange={handleChange}
          >
            <option value="">Select</option>

            {data.map((part) =>
              part.category === "roof" ? (
                <option key={part.name} value={part.name}>
                  {part.name}
                </option>
              ) : null
            )}
          </select>
          <br />
          <br />
          <label htmlFor="interior">Interior</label>
          <br />
          <select
            id="interior"
            name="interior"
            className="select"
            value={car.interior}
            onChange={handleChange}
          >
            <option value="">Select</option>

            {data.map((part) =>
              part.category === "interior" ? (
                <option key={part.name} value={part.name}>
                  {part.name}
                </option>
              ) : null
            )}
          </select>
          <br />
          <br />
          <h2>{`Price: $${price}`}</h2>
          <input type="submit" value="Update" onClick={createCar} />
        </form>
      </div>
      <div className="card">
        <h2>{car.name}</h2>
        <p>Color: {car.color}</p>
        <p>Interior: {car.interior}</p>
        <p>Roof: {car.roof}</p>
        <p>Wheels: {car.wheels}</p>
        <p>Price: {car.price}</p>
        <button onClick={() => CarsAPI.deleteCar(car.id)}>Delete</button>
      </div>
    </>
  );
};

export default EditCar;
