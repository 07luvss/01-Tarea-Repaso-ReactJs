import React, { useState } from "react";
import { footerData } from "../../data/footerData";

export const Footer = () => {
  
  const [value, setValue] = useState("");

  const handleOnChangeFooter = (event) => {
    setValue(event.target.value);
    console.log(event.target.value)
  };
  
  const handleClick = (event) => {
    // setValue(event.target.value);
    console.log("Hiciste click");
  };

  return (
    <footer className="py-5 px-5 bg-secondary container">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            {footerData.map((item) => (
              <li className="nav-item mb-2" key={item.id}>
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {item.tittle}
                </a>
              </li>
            ))}
          </ul>
          ;
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Dejanos una recomendación</h5>
            <p>¿Que te pareció esta página?.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
                onChange={handleOnChangeFooter}
              />
              <button className="btn btn-primary" type="button"
              onClick={handleClick}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
