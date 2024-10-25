import express, { Router } from "express";
const router = express.Router();

const suku = [
  {
    suku: "Sunda",
    panutan: "Prabu Siliwangi",
    provinsi: "Jawa",
    makanan: "cobek nila"
  },
  {
    suku: "Bugis",
    panutan: "Arung Palekko",
    provinsi: "Sulawesi Selatan",
    makanan: "Kappurung"
  },
];

router.get("/", (req, res) => {
  res.send(suku);
});

export default router;