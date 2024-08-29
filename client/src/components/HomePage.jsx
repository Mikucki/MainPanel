import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import * as THREE from "three";
import { DirectionalLight, Texture, Scene } from "three";
import modern from "../Modern.png";
import modernBoxLogo from "../modernBoxLogo.png";
import tlomodernBox from "../Tło_ModernBox.png";
import { useRef, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HomePage = () => {
  const dataText = [
    "Pracujemy",
    "Dzownimy",
    "Piszemy",
    "Sprzątamy",
    "Kupujemy",
  ];
  const textRef = useRef(null); // Użycie ref do odniesienia się do elementu h1

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      if (textRef.current) {
        // Sprawdzenie czy ref nie jest null
        textRef.current.innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      }
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 200);
    } else if (typeof fnCallback === "function") {
      setTimeout(fnCallback, 2000);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] === "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 2000);
    } else {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }

  useEffect(() => {
    StartTextAnimation(0); // Uruchomienie animacji po załadowaniu komponentu
  }, []);

  return (
    <div>
      <section className="top-nav">
        <h2>
          <Link className="logo" to="/">
            ModernBox
          </Link>
        </h2>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu navbar-ul">
          <li className="nav-li">
            <Link to="/" className="fakebutton">
              O nas
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/" className="fakebutton">
              <i className="fa-solid fa-map-pin"></i> Objkety
            </Link>
          </li>
          <li className="spcialli nav-li">
            <Link to="/" className="instagram fakebutton instagram-tag">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/login" className="fakebutton">
              <i className="fa-solid fa-right-to-bracket"></i> Login
            </Link>
          </li>
        </ul>
      </section>
      <div className="line"></div>
      <div className="convas1">
        <div className="discription">
          <div className="text-writing">
            <div>
              <p className="title">My</p>
              <h1 ref={textRef} className="animation-js">
                Kupujemy
              </h1>{" "}
              {/* Przypisanie ref do h1 */}
            </div>

            <p className="title-2">ty zarabiasz</p>
          </div>

          <p>
            Modernbox Apartments to firma wykorzystująca nowe technologie aby
            apartamenty naszych klnietów zarabiały jak najwięcej w jak
            najkrótszym czasie.
          </p>
          <p>
            Spod naszego ramienia wyszły takie apartamenty jak
            <a
              className="link-main"
              href="https://www.booking.com/hotel/pl/modern-box-apartment.pl.html?aid=2230202&sid=cc255b3c5fc935f8958408105011d692&dest_id=-501414&dest_type=city&room1=A%2CA&;group_adults=2;group_children=0;no_rooms=1;checkin=2023-02-10;checkout=2023-02-11;atlas_src=sr_iw_btn;from_sr_map=1;from=searchresults;ucfs=1"
            >
              ModernBox Apartament
            </a>{" "}
            które cechują się najlepszymi ocenami oraz wszystkimi zarezerowanymi
            terminami.
          </p>
          <button className="home-page-button">Click</button>
        </div>
      </div>
      <div className="line"></div>
      <div className="scroll">
        <div className="scroll-indicator">⇩ Scroll ⇩</div>
      </div>
      <div className="line"></div>
      <section>
        <ul className="cards-ul">
          <div className="custom-shape-divider-top-1675855739">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <li>
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="card-icon">
                    <i className="fa-solid fa-hand-sparkles"></i>
                  </div>
                  <h3 className="card-title">Sprzątanie</h3>
                </div>
                <p className="card-text">
                  Jesteśmy liderami w temacie czystość jeszcze żaden klient nie
                  odenił nas na mniej niż 10/10 co świaczy o naszym wkładzie i
                  cieżkiej pracy.
                </p>
              </div>
            </div>
            <div className="card-discription-right">
              <p>
                Czystość jest dla nas priorytetem, mamy cały zesół zadydykowany
                tylko temacie sprzątania dzięki czemu możemy urzymać nawyższy
                standard we wszystkich apartametnach. Użwamy wielu nowoczesnych
                roziązań.
              </p>
            </div>
          </li>
          <li>
            <div className="card-discription-right">
              <p>
                Specjalnie dla twojego apartamentu weźmieny naszych najbardziej
                zaufanych i sprawdzonych fotografów z wielo letnim dościaczeniem
                w fotografi nieruchomości aby to własnie twój apartament był
                zawsze klikany.
              </p>
            </div>
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="card-icon">
                    <i className="fa-solid fa-camera"></i>
                  </div>
                  <h3 className="card-title">Profesjonalne zdjęcia</h3>
                </div>

                <p className="card-text">
                  Dobre i profesionalne zdjęcia to priorytet jeśli chodzi o
                  pozycjonowanie apartamentu, to własnie zdjęcia tworzą pierwsze
                  wrażenie i własnie dlatego przykowamy do nich tyle uwagi.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="card-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <h3 className="card-title">Kontakt z klientem</h3>
                </div>
                <p className="card-text">
                  Bedziemy kontaktować się z klientem i zajmować się
                  przekazywaniem kluczy. Zawsze dostępni z gościnności mamy
                  śrenią ocenę 10/10
                </p>
              </div>
            </div>
            <div className="card-discription-right">
              <p>
                Sposób podejscia do klienta to najważniejsza rzecz jeśli chodzi
                o wynajem krótkoterminowy. Nasza profesionalna osbsłóga zajmie
                się wszystkim aby klient czół sie zaopiekowany.
              </p>
            </div>
          </li>
          <li>
            <div className="card-discription-right">
              <p>
                Zajemiemy sie pozycjownowaniem twojego apartametu i zrobimy
                wszystko co w naszej mocy aby twój apartament zawsze był na
                górze strony.
              </p>
            </div>
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="card-icon">
                    <i className="fa-solid fa-ranking-star"></i>
                  </div>
                  <h3 className="card-title">Marketing</h3>
                </div>
                <p className="card-text">
                  Mamy specjalnie przeznaczony budżet na marketing ponieważ to
                  właśnie marketing zdobędzie ci klientów.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="card-icon">
                    <i className="fa-regular fa-face-smile"></i>
                  </div>
                  <h3 className="card-title">Najlepsze oceny</h3>
                </div>
                <p className="card-text">
                  Nasze apartamenty zebrały śrenią ocene o nocie 9.8 w 2022 roku
                  gdzie medianą wszystkich ocen na bookingu było 8.3 co pokazuje
                  o naszej dominacji nad konkrecją. Dołącz do nas i zacznij
                  zarabiać.
                </p>
              </div>
            </div>
            <div className="card-discription-right">
              <p>
                Oceny to nie tylko narzędzie do marketingu ale również
                wyznacznik ciężkiej pracy i sukcesów w świecie nieruchomości.
                Nasze oceny pokazują, że zarządzanie z nami to przyjemność.
              </p>
            </div>
          </li>
          <div className="custom-shape-divider-bottom-1675855763">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
