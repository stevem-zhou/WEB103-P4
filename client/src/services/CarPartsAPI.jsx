const baseUrl = "http://localhost:3000";

const getAllCarParts = async () => {
    try {
        const response = await fetch(`${baseUrl}/customparts`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export default {
    getAllCarParts
}