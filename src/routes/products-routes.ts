import { ProductsController } from "@/controllers/products-controller";
import { Router } from "express";

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get("/", productsController.index);
productsRoutes.post("/", productsController.create);

export { productsRoutes };
