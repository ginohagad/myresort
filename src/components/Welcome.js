import resortImg from '../assets/resort01.jpg';
import BookMenu from './BookMenu';

const Welcome = () => {

  return (
    <section className="welcome">
      <img src={resortImg} />
      <h1>My Resort</h1>
      <h3>Maldives</h3>
      <BookMenu/>
    </section>
  );
}



export default Welcome;
