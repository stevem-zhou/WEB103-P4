const baseUrl = "http://localhost:3000";

const getAllCars = async () => {
  try {
    const response = await fetch(`${baseUrl}/customcars`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getCarById = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/customcars/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const createCar = async (car) => {
  try {
    const response = await fetch(`${baseUrl}/customcars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
    const data = await response.json();
    window.location = "/customcars";
  } catch (err) {
    console.log(err);
  }
};

const updateCar = async (car) => {
  try {
    const response = await fetch(`${baseUrl}/customcars/edit/${car.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });

    window.location = "/customcars"
  } catch (err) {
    console.log(err);
  }
};

const deleteCar = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/customcars/${id}`, {
      method: "DELETE",
    });

    window.location = "/customcars"

  } catch (err) {
    console.log(err);
  }
};

export default {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar,
};
