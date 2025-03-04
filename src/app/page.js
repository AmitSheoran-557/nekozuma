import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Story from './components/Story';
import Team from './components/Team';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <Story />
      <Team/>
      <Footer/>
    </div>
  );
}
