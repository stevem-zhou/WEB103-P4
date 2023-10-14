import { pool } from "../config/database.js";

const getCustomParts = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM customparts ORDER BY id ASC"
    );
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  getCustomParts,
};
