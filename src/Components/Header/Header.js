// atajo con sfc para crear rápido !!!
// el header no se puso en los componentes 

import "./Header.css"
import moment from 'moment'


 const Header = () => {

  const hoy = moment();

  return (
    <div className="principal text-center">
      <h3>Tu Agenda Diaria Rick and Morty</h3>
    <h4 className="title">Anota tus desafios para hoy</h4>
    <p>{hoy.format('dddd Do MMMM YYYY')}</p>
    </div>
  );
};

export default Header;

// exportarlo e importarlo en donde lo necesite será en app
// el title lo traigo destructurado y luego lo utilizo en el return 
