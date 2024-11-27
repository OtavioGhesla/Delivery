import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-header">
          <h4>Sobre o ciFoods</h4>
        </div>
        <div className="footer-body">
          <blockquote className="footer-quote">
            <p>O ciFoods foi feito em 2024 na Escola Técnica Estadual Monteiro Lobato</p>
            <footer className="footer-footer">
              <span>Direitos reservados a ciFoods<br></br>Endereço: Rua Guilherme Lahm, 1778 - Centro - Taquara - RS<br></br>Email: cifoods@gmail.com<br></br>Telefone: +55 51 9 9958-1901</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

