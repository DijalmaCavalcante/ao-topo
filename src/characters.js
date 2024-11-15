import benePerson from "../assets/bene.png"
import beneName from "../assets/beneName.png"
import dijalmaPerson from "../assets/dijalma.png"
import dijalmaName from "../assets/dijalmaName.png"
import kauanPerson from "../assets/kauan.png"
import kauanName from "../assets/kauanName.png"
import wallacePerson from "../assets/wallace.png"
import wallaceName from "../assets/wallaceName.png"
import lucasPerson from "../assets/lucas.png"
import lucasName from "../assets/lucasName.png"
import bene1 from './assets/bene1.jpg';
import bene2 from './assets/bene2.jpg';


const characters = [
  {
    name: "bene",
    person: benePerson,
    risk: beneName,
    image1: bene1,
    image2: bene2,
  },
  {
    name: "dijalma",
    person: dijalmaPerson,
    risk: dijalmaName
  },
  {
    name: "wallace",
    person: wallacePerson,
    risk: wallaceName
  },
  {
    name: "kauan",
    person: kauanPerson,
    risk: kauanName
  },
  {
    name: "lucas",
    person: lucasPerson,
    risk: lucasName
  }
];

export default characters;

