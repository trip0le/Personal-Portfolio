import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.png';
import GreenCtgImg from '../images/greenctg.png';
import CoinTrackerImg from '../images/cointracker.png';
import CavinImg from '../images/cavinimg.png';
import CoffeeImg from '../images/coffeeImg.png'

const projects = [
  {
    id: uuidv4(),
    name: 'COVID-19 Tracker',
    desc:
      'A web application which tracks latest statistics about COVID-19',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Landing Page',
    desc:
      'A Landing Page of Cellphone models.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Notary',
    desc:
      'Using this web app to find any word in your text document.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Banking Website",
    desc:
      'A frontend of a Banking Website - Financizy',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Netflix Clone',
    desc:
      'A frontend of Netflix Homepage.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Coffee Fanatics',
    desc:
      'A frontend of a Coffee Shop Website.',
    img: CoffeeImg,
  },
];

export default projects;
