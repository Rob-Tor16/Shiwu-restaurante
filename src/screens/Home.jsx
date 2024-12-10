import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home position-relative text-white">
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
      
      <div className="card container d-flex bg-light align-items-center justify-content-center text-center text-md-start" style={{ minHeight: '100vh' }}>
        <div className="row justify-content-center">
          <div className="bienvenida col-lg-6 d-flex align-items-center justify-content-center ">
            <h1 className="display-4 fw-bold">
              Bienvenidos
              <strong className="d-block text-danger">¿Quienes somos?
              </strong>
            </h1>
            <p className=" lead">
              Shiwu es un restaurante de comida china,
              especializados en los mejores platos de la cultura gastronómica china
              con menu variado, excelente atencion al cliente
              y con chefs profesionales
            </p>
            <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
              <button className="btn btn-danger btn-lg px-4">
              <a
                href="#"
                
              >
                Get Started
              </a>
                </button>
              <a
                href="#"
                className="btn btn-outline-danger btn-lg px-4"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
