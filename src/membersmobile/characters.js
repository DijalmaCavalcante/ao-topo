import benePerson from "./assets/bene.png"
import beneRelato from "./assets/beneRelato.png"
import beneName from "./assets/beneName.png"
import dijalmaPerson from "./dijalma.png"
import dijalmaRelato from "./assets/dijalmaRelato.png"
import dijalmaName from "./assets/dijalmaName.png"
import kauanPerson from "./assets/kauan.png"
import kauanName from "./assets/kauanName.png"
import kauanRelato from "./assets/kauanRelato.png"
import wallacePerson from "./assets/wallace.png"
import wallaceRelato from "./assets/wallaceRelato.png"
import wallaceName from "./assets/wallaceName.png"
import lucasPerson from "./assets/lucas.png"
import lucasRelato from "./assets/lucasRelato.png"
import lucasName from "./assets/lucasName.png"


const characters = [
  {
    name: "bene",
    description: beneRelato,
    person: benePerson,
    risk: beneName
  },
  {
    name: "dijalma",
    description: dijalmaRelato,
    person: dijalmaPerson,
    risk: dijalmaName
  },
  {
    name: "wallace",
    description: wallaceRelato,
    person: wallacePerson,
    risk: wallaceName
  },
  {
    name: "kauan",
    description: kauanRelato,
    person: kauanPerson,
    risk: kauanName
  },
  {
    name: "lucas",
    description: lucasRelato,
    person: lucasPerson,
    risk: lucasName
  }
];

export default characters;

