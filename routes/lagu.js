import express, { Router } from "express";
const router = express.Router();

const lagu = [
  {
    Judul: "Mawar Jingga",
    Penyanyi: "Juicy Luicy",
    Genre: "Pop",
    asaldaerah: "Bandung"
  },
  {
    Judul: "Racun Dunia",
    Penyanyi: "The Changcuters",
    Genre: "Hard Rock",
    asaldaerah: "Bandung"
  },
];

router.get("/", (req, res) => {
  res.send(lagu);
});

export default router;