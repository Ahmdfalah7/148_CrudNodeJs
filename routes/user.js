import express, { Router } from "express";
const router = express.Router();

const user = [
  {
    nama: "Falah",
    umur: "20",
    alamat: "Jaksel",
    jk: "laki-laki",
  },
  {
    nama: "Imam",
    umur: "40",
    alamat: "curug",
    jk: "laki-laki",
  },
];

router.get("/", (req, res) => {
  res.send(user);
});

export default router;