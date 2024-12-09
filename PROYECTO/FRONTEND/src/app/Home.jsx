import React from 'react';
import Navbar from '../components/Navbar';
import CarouselComponent from '../components/CarouselComponent';
import '../css/Home.css';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='en-carru'>
        <div className='pr'>
          <h1>Reserva Fácil y Rápido</h1>
          <h2>Planifica tu próxima experiencia con solo unos clics, y disfruta de un servicio excepcional que se adapta a tus necesidades y estilo de vida.</h2>
        </div>
        <div className="sep"></div>
        <div className='sd'>
          <p>Nuestra página de reserva está diseñada para ofrecer una experiencia sencilla y eficiente a nuestros usuarios. Aquí podrás explorar todos nuestros servicios disponibles, desde sesiones de spa y tratamientos de belleza, hasta reservas en los mejores restaurantes de la ciudad. Cada servicio está detallado con información clara y precisa para que puedas tomar decisiones informadas antes de realizar tu reserva.</p>
          <p>Al acceder a la sección de "Lugares", tendrás acceso a una lista de nuestras ubicaciones destacadas, completas con descripciones, fotos y mapas interactivos. Esto te permitirá visualizar y elegir el lugar más conveniente y adecuado para tus necesidades. Queremos que cada visita sea una experiencia excepcional, y por eso ofrecemos toda la información necesaria para que puedas planificar tu visita sin complicaciones.</p>
          <p>Nuestra sección de "Promociones" te mantendrá al día con las últimas ofertas y descuentos exclusivos. No importa si eres un cliente nuevo o recurrente, siempre encontrarás algo especial para ti. Además, nuestro sistema de reservas es intuitivo y rápido, permitiéndote completar tu reserva en cuestión de minutos desde cualquier dispositivo. Nos esforzamos por brindarte la mejor experiencia posible, facilitando cada paso del proceso de reserva. ¡Explora, reserva y disfruta!</p>
        </div>
      </div>
      <CarouselComponent/>
      <div className='re'>
        <h1>fdsdsd</h1>
      </div>
    </div>
  );
};

export default Home;
