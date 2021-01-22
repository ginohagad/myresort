import BookMenu from './BookMenu';

const Welcome = () => {

  return (
    <section className="welcome">
      <h1 id="resort-name" className="welcome-texts">My Resort</h1>
      <h3 id="resort-loc" className="welcome-texts">Maldives</h3>
      <BookMenu/>
    </section>
  );
}



export default Welcome;
