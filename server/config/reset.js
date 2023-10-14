import { pool } from "./database.js";

const createCustomItemTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS customitem;
  
      CREATE TABLE IF NOT EXISTS customitem (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          price INTEGER NOT NULL,
          color TEXT NOT NULL,
          roof TEXT NOT NULL,
          wheels TEXT NOT NULL,
          interior TEXT NOT NULL,
      )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 customitem table created successfully");
  } catch (err) {
    console.error("⚠️ error creating customitem table", err);
  }
};

const createCustomPartsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS customparts;
  
      CREATE TABLE IF NOT EXISTS customparts (
          id SERIAL PRIMARY KEY,
          category TEXT NOT NULL,
          name TEXT NOT NULL,
          price INTEGER NOT NULL,
          isconvertible BOOLEAN NOT NULL
      )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 customparts table created successfully");
  } catch (err) {
    console.error("⚠️ error creating customparts table", err);
  }
};
