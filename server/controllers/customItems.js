import { pool } from "../config/database.js";

const getCustomItems = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM customitem ORDER BY id ASC"
    );
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getCustomItem = async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM customitem WHERE id=$1";
    const id = parseInt(req.params.id);
    const results = await pool.query(selectQuery, [id]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const postCustomItem = async (req, res) => {
  try {
    const { name, price, color, roof, wheels, interior } = req.body;
    const results = await pool.query(
      `
        INSERT INTO customitem (name, price, color, roof, wheels, interior)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *`,
      [name, price, color, roof, wheels, interior]
    );

    res.status(201).json(results.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const updateCustomItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, price, color, roof, wheels, interior } = req.body;
    const results = await pool.query(
      `
        UPDATE customitem SET name=$1, price=$2, color=$3, roof=$4, wheels=$5, interior=$6 WHERE id=$7`,
      [name, price, color, roof, wheels, interior, id]
    );

    res.status(201).json(results.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const deleteCustomItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query("DELETE FROM customitem WHERE id=$1", [
      id,
    ]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getCustomItem,
  getCustomItems,
  postCustomItem,
  updateCustomItem,
  deleteCustomItem,
};
