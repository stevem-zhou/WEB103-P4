import express from "express";
import customItemsController from "../controllers/customItems.js";

const customItemsRouter = express.Router()
customItemsRouter.get("/", customItemsController.getCustomItems)
customItemsRouter.get("/:id", customItemsController.getCustomItem)
customItemsRouter.post("/", customItemsController.postCustomItem)
customItemsRouter.put("/edit/:id", customItemsController.updateCustomItem)
customItemsRouter.delete("/:id", customItemsController.deleteCustomItem)

export default customItemsRouter