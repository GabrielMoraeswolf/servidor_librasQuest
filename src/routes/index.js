import express from "express";
import quests from "./questRoutes.js"; // Verifique se o caminho está correto

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Online"));

  app.use(express.json(), quests);
};

export default routes;