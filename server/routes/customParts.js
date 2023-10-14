import express from "express";
import customPartsController from "../controllers/customParts.js";

const customPartsRouter = express.Router();
customPartsRouter.get("/", customPartsController.getCustomParts);

export default customPartsRouter;
