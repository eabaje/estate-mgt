import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import estates from "../../services/content";
import {
  FaArrowRight,
  FaSearch,
  FaMeetup,
  FaHandshake,
  FaPiggyBank,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import Header from "../../components/Header";
import RecentEstate from "../../components/RecentEstate";
import homeStyle from "../../public/styles";
import Footer from "../../components/Footer";
// import { Container } from './styles';

function LandingPage() {
  return (
    <>
      <main>
        <Header />
        <section className="hero container">
          <div className="hero-text">
            <h2>
              Welcome to Real Property, your number one source for all things
              real estate.
            </h2>
            <p>
              We're dedicated to giving you the very best of real estate, with a
              focus on fast, trust, efficient.We hope you enjoy our service as
              much as we enjoy offering them to you. If you have any questions
              or comments, please don't hesitate to contact us
            </p>
            <button type="button">More</button>
          </div>
          <div className="hero-banner">
            <img
              src="https://www.richardmeier.com/wp-content/uploads/2019/06/685_1920x1080-min-1.jpg"
              alt=""
            />
          </div>
        </section>

        <section className="search container">
          <form action="">
            <label htmlFor="location">
              Location
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
              />
            </label>
            <label htmlFor="property-type">
              Property Type
              <input
                type="text"
                name="property-type"
                id="property-type"
                placeholder="Apartment"
              />
            </label>
            <label htmlFor="max-price">
              Max Price
              <input
                type="text"
                name="max-price"
                id="max-price"
                placeholder="R$ 600"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="about-us container">
          <div className="about-img">
            <img
              src="https://data.1freewallpapers.com/download/mansion-a-ferrari-what-a-dream.jpg"
              alt=""
            />
          </div>
          <div className="about-text">
            <span>Sobre nós</span>
            <h2>Nós providenciamos as melhores propriedades para você!</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              eveniet nesciunt consequatur minima! Dolor officia, soluta
              expedita temporibus repudiandae quasi velit atque, vel debitis,
              corrupti sed amet nemo quod vero!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              eveniet nesciunt consequatur minima! Dolor officia, soluta
              expedita temporibus repudiandae quasi velit atque, vel debitis
            </p>

            <button className="btn-about">Saiba Mais</button>
          </div>
        </section>

        <section className="recent container">
          <span className="recent-sub">Recentes</span>
          <h2>Propriedades recentes</h2>
          <span className="recent-link">
            <a href="#">Explorar mais</a>
            <FaArrowRight size={14} color="#314862" />
          </span>

          <Swiper spaceBetween={150} slidesPerView={4}>
            {estates.map((estate) => (
              <SwiperSlide>
                <RecentEstate
                  imgUrl={estate.img}
                  name={estate.name}
                  location={estate.location}
                  rooms={estate.rooms}
                  bathrooms={estate.bathrooms}
                  price={estate.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <session className="how-works">
          <span>Serviços</span>
          <h2>Como funciona</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
            veritatis! Quisquam perspiciatis quidem cum voluptas libero.
          </p>

          <div className="services-wrapper container">
            <div className="service">
              <FaSearch size={30} color="#2289ff" />
              <span>Encontre um lar</span>
              <p>
                Seja um apartamento ou uma casa simples. Encontre propriedades
                de diversos tipos preços e escolha uma de acordo com seu gosto
              </p>
            </div>

            <div className="service">
              <FaHandshake size={30} color="#2289ff" />
              <span>Corretores</span>
              <p>
                Nosso sistema consta com uma gama de corretores, você pode
                filtrar pelos melhores corretores e também avalia-los de acordo
                com seus serviços
              </p>
            </div>

            <div className="service">
              <FaPiggyBank size={30} color="#2289ff" />
              <span>Seja um vendedor</span>
              <p>
                Caso não queira comprar uma propriedade e queira vender uma,
                você também pode colocar suas propriedades a venda
              </p>
            </div>
          </div>
        </session>

        <session className="highlights">
          <span>Destaques</span>
          <h2>Propriedades em destaque</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
            veritatis! Quisquam perspiciatis quidem cum voluptas libero.
          </p>

          <div className="houses container">
            {estates.map((estate) => (
              <RecentEstate
                imgUrl={estate.img}
                name={estate.name}
                location={estate.location}
                rooms={estate.rooms}
                bathrooms={estate.bathrooms}
                price={estate.price}
              />
            ))}
          </div>

          <button type="button">Carregar mais</button>
        </session>

        <session className="help">
          <h2>Alguma dúvida?</h2>
          <h2>Deixe-nos ajudar você</h2>

          <form className="container" action="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
            <button type="submit">Enviar</button>
          </form>
        </session>
      </main>
      <Footer />
      <style jsx>{homeStyle}</style>
    </>
  );
}

export default LandingPage;
