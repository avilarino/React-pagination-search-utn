import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer">
      <p className="footer-p text-center">@miAgendaDiaria</p>
      <p className="footer-p text-center">Buenos Aires, Argentina</p>
      <div className="d-flex social-media">
        <i  class="fab fa-pinterest fa-2x"></i>
        <i class="fab fa-spotify fa-2x"></i>
        <i class="fab fa-instagram fa-2x"></i>
      </div>

    </div>
    </>
  );
};

export default Footer