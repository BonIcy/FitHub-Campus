import React from 'react';
import '../resources/css/style.css';
import Navbar from'../resources/common/navbar';
import { Link } from 'react-router-dom';
let Home = () => {
  return (
    <section>
        <Navbar />
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
           </div>
          <div class="carousel-inner h-100">
            <div class="carousel-item active w-100 h-100" >
              <img src="https://149874912.v2.pressablecdn.com/wp-content/uploads/2022/04/bodybuilding-vs-strength-training.jpg" class="d-block w-100 " alt="..." id = "imgg"/>
              <div class="carousel-caption  d-md-block"  id="esw">
                <h1>Rutinas</h1>
                <p>En este espacio, podrás llevar tu entrenamiento al siguiente nivel. Te ofrecemos una amplia variedad de rutinas de entrenamiento diseñadas para todos los niveles, desde principiantes hasta atletas experimentados. ¿Quieres aumentar tu fuerza, mejorar tu resistencia o trabajar en tu flexibilidad? ¡Aquí encontrarás la rutina perfecta para ti!</p> 
                <div class="botone d-inline-grid d-md-block">
           
                  <a href="./calories.jsx" target="_blank"> 
                    <button type="button" class="p-3 m-2 btn-danger" id="botonesinicio">Ir al sitio </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://th.bing.com/th/id/R.ae271a9bcfd23b9e0d85930bff07bfbc?rik=xyovZ7bt2T3%2fdQ&riu=http%3a%2f%2fa.abcnews.com%2fimages%2fHealth%2fGTY_calories_2_kab_141124_12x5_1600.jpg&ehk=XhTMs9vbC1YR1HbUMQT3wnV73COKAH6rgpCFuELOdfE%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="..." id = "imgg"/>
              <div class="carousel-caption  d-md-block"  id="esw">
                <h1>Calorias</h1>
                <p>Una herramienta esencial para nuestros usuarios que desean optimizar su entrenamiento y nutrición de manera personalizada. Mediante un sencillo formulario, los usuarios ingresan datos como edad, género, peso, altura,intensidad del entrenamiento y obejtivo. Utilizando la fórmula de cálculo Basal Metabolic Rate (BMR) y un factor de actividad, FitHub estima las calorías diarias necesarias para alcanzar objetivos específicos, ya sea mantener el peso, ganar masa muscular o perderlo.</p>
                <div class="botone d-inline-grid d-md-block">
                <a href="./" target="_blank"> 
                <Link to="/calories" ><button class="p-3 m-2 btn-danger" id="botonesinicio">Ir al sitio </button></Link>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://th.bing.com/th/id/R.c5130ee8a6d07be25d5b36f13155cd1c?rik=KZKfIorlxAXI9A&pid=ImgRaw&r=0" class="d-block w-100" alt="..." id = "imgg"/>
              <div class="carousel-caption  d-md-block"  id="esw">
                <h1>Maquinas</h1>
                <p>En esta sección, te ofrecemos una amplia selección de máquinas y equipos de fitness de alta calidad para ayudarte a llevar tus entrenamientos al siguiente nivel. Ya sea que estés buscando equipar tu gimnasio en casa o quieras agregar variedad a tu rutina de ejercicios, aquí encontrarás todo lo que necesitas.</p>
                <div class="botone d-inline-grid d-md-block">
                <a href="./" target="_blank"> 
                    <button type="button" class="p-3 m-2 btn-danger" id="botonesinicio">Ir al sitio </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://anabolic.co/wp-content/uploads/2015/10/Bodybuilding-Supplements.jpg" class="d-block w-100" alt="..." id = "imgg"/>
              <div class="carousel-caption d-md-block"  id="esw">
                <h1>Suplementos</h1>
                <p>En esta sección, te ofrecemos una amplia gama de suplementos nutricionales de alta calidad para potenciar tus resultados fitness. Sabemos lo importante que es mantener una dieta equilibrada y adecuada para alcanzar tus metas, por eso hemos seleccionado cuidadosamente los mejores productos para ti. </p>
                <div class="botone d-inline-grid d-md-block">
                <a href="./" target="_blank"> 
                    <button type="button" class="p-3 m-2 btn-danger" id="botonesinicio">Ir al sitio </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://formagym.com/wp-content/uploads/2019/03/shutterstock_1065905168-1.jpg" class="d-block w-100" alt="..." id = "imgg"/>
              <div class="carousel-caption  d-md-block"  id="esw">
                <h1>Foro comunitario</h1>
                <p>Aquí podrás compartir tus experiencias, consejos y dudas sobre fitness, entrenamientos, nutrición y todo lo relacionado con el mundo del ejercicio. Nuestra comunidad está abierta a todos, sin juicios ni prejuicios. Si tienes alguna pregunta sobre tu rutina de ejercicios, quieres recibir consejos para mejorar tu técnica o simplemente deseas compartir tus logros, este es el lugar perfecto para hacerlo.</p>
                <div class="botone d-inline-grid d-md-block">
                <a href="./" target="_blank"> 
                    <button type="button" class="p-3 m-2 btn-danger" id="botonesinicio">Ir al sitio </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
        
</section>
  );
};

export default Home;
