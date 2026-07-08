import { useRef, useState } from "react";
import "./App.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaCalendarAlt,
  FaSearch,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaStar,
  FaExternalLinkAlt,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import ownerImage from "./assets/yuma.jpg";
import gallery1 from "./assets/1.jpeg";
import gallery2 from "./assets/2.jpeg";
import gallery3 from "./assets/3.jpeg";
import gallery4 from "./assets/4.jpeg";
import gallery5 from "./assets/5.jpeg";
import gallery6 from "./assets/6.jpeg";
import gallery7 from "./assets/7.jpeg";
import gallery8 from "./assets/8.jpeg";
import servicePopular from "./assets/service-popularne.jpeg";
import servicePaznokcie from "./assets/service-paznokcie.jpeg";
import serviceBrwi from "./assets/service-brwi.jpeg";
import serviceRzesy from "./assets/service-rzesy.jpeg";
import servicePedicure from "./assets/service-pedicure.jpeg";
import servicePielegnacja from "./assets/service-pielegnacja-dloni.jpeg";
import serviceMakijaz from "./assets/service-makijaz-permanentny.jpeg";
import servicePakiet from "./assets/service-pakiet-brwi-rzesy.jpeg";
import serviceDepilacja from "./assets/service-depilacja.jpg";

const booksyUrl =
  "https://booksy.com/pl-pl/276080_yuma_salon-kosmetyczny_12883_wodzislaw-slaski#ba_s=sh_1";

const socialLinks = {
  instagram: "https://www.instagram.com/yuma_yuliia/",
  facebook: "https://www.facebook.com/profile.php?id=61567230148524",
  tiktok: "https://www.tiktok.com/@yuma.yuliia",
};

const serviceGroups = [
  {
    title: "Popularne usługi",
    badge: "Top",
    summary: "Najczęściej wybierane wizyty w YUMA.",
    className: "manicure",
    image: servicePopular,
    items: [
      { name: "Korekta żelowa", price: "150 zł+", time: "1g 40min" },
      { name: "Manicure hybrydowy", price: "130 zł", time: "1g 30min" },
      { name: "Pedicure hybrydowy", price: "180 zł", time: "1g 45min" },
    ],
  },
  {
    title: "Stylizacja paznokci",
    badge: "11 usług",
    summary: "Manicure, żel, hybryda, przedłużanie i naprawy.",
    className: "manicure",
    image: servicePaznokcie,
    items: [
      { name: "Manicure japoński", price: "110 zł", time: "55min" },
      { name: "Korekta żelowa", price: "150 zł+", time: "1g 40min" },
      { name: "Manicure klasyczny", price: "100 zł", time: "45min" },
      { name: "Żel na naturalnej płytce", price: "140 zł", time: "1g 30min" },
      { name: "Laminacja paznokci", price: "120 zł", time: "50min" },
      { name: "Naprawa paznokcia", price: "15 zł", time: "20min" },
      { name: "Manicure klasyczny biznesowy dla Panów", price: "100 zł", time: "1g" },
      { name: "Ściąganie stylizacji, manicure + odżywka", price: "110 zł", time: "1g 30min" },
      { name: "Manicure hybrydowy", price: "130 zł", time: "1g 30min" },
      { name: "French / Babyboomer", price: "20 zł+", time: "15min" },
      { name: "Przedłużanie żelowe", price: "170 zł", time: "2g 30min" },
      { name: "Ściąganie stylizacji", price: "50 zł", time: "45min" },
    ],
  },
  {
    title: "Stylizacja brwi",
    badge: "7 usług",
    summary: "Laminacja, farbka, regulacja i geometria brwi.",
    className: "brows",
    image: serviceBrwi,
    items: [
      { name: "Laminacja brwi + koloryzacja", price: "140 zł+", time: "1g" },
      { name: "Laminacja brwi bez koloryzacji", price: "110 zł", time: "40min" },
      { name: "Regulacja brwi", price: "40 zł", time: "30min" },
      { name: "Farbka na brwi", price: "50 zł", time: "30min" },
      { name: "Farbka z regulacją i geometrią", price: "100 zł", time: "1g" },
      { name: "Męskie brwi", price: "70 zł", time: "30min" },
      { name: "Farbowanie brwi + regulacja", price: "80 zł", time: "45min" },
    ],
  },
  {
    title: "Stylizacja rzęs",
    badge: "3 usługi",
    summary: "Laminacja, koreańska laminacja i koloryzacja rzęs.",
    className: "lashes",
    image: serviceRzesy,
    items: [
      { name: "Laminacja rzęs + koloryzacja", price: "160 zł", time: "1g 15min" },
      { name: "Koreańska laminacja rzęs", price: "220 zł", time: "1g 10min" },
      { name: "Koloryzacja rzęs", price: "50 zł", time: "30min" },
    ],
  },
  {
    title: "Pedicure",
    badge: "5 usług",
    summary: "Pedicure klasyczny, hybrydowy i luksusowe SPA.",
    className: "pedicure",
    image: servicePedicure,
    items: [
      { name: "Pedicure hybrydowy", price: "180 zł", time: "1g 45min" },
      { name: "Pedicure Hybrydowy SPA", price: "230 zł", time: "1g 50min" },
      { name: "Pedicure SPA bez malowania", price: "170 zł", time: "1g 40min" },
      { name: "Hybryda - stylizacja w stopach", price: "120 zł", time: "1g" },
      { name: "Pedicure klasyczny", price: "130 zł", time: "1g" },
    ],
  },
  {
    title: "Pielęgnacja dłoni",
    badge: "2 usługi",
    summary: "Dodatkowa pielęgnacja i regeneracja dłoni.",
    className: "manicure",
    image: servicePielegnacja,
    items: [
      { name: "Rękawice kolagenowe", price: "40 zł", time: "30min" },
      { name: "Rytuał SPA na dłonie", price: "70 zł", time: "30min" },
    ],
  },
  {
    title: "Makijaż permanentny",
    badge: "3 usługi",
    summary: "Makijaż permanentny brwi oraz odświeżenia.",
    className: "brows",
    image: serviceMakijaz,
    items: [
      { name: "Odświeżenie makijażu permanentnego", price: "400 zł", time: "2g" },
      { name: "Makijaż permanentny brwi", price: "800 zł", time: "2g 30min" },
      { name: "Dopigmentowanie po 6 tygodniach", price: "Darmowa", time: "2g" },
    ],
  },
  {
    title: "Pakiety brwi i rzęsy",
    badge: "3 usługi",
    summary: "Zestawy usług dla pełnej oprawy oka.",
    className: "lashes",
    image: servicePakiet,
    items: [
      { name: "Laminacja brwi + laminacja rzęs", price: "270 zł+", time: "2g 15min" },
      { name: "Koloryzacja brwi i rzęs", price: "90 zł", time: "1g" },
      { name: "Kompleks brwi i rzęsy", price: "110 zł", time: "1g 30min" },
    ],
  },
  {
    title: "Depilacja",
    badge: "2 usługi",
    summary: "Szybka depilacja woskiem twarzy.",
    className: "brows",
    image: serviceDepilacja,
    items: [
      { name: "Depilacja woskiem wąsik i broda", price: "50 zł", time: "30min" },
      { name: "Depilacja woskiem wąsik lub broda", price: "30 zł", time: "20min" },
    ],
  },
];

const reviews = [
  {
    name: "Karolina",
    service: "Pedicure hybrydowy",
    worker: "Yuliia Dąbrowska",
    text: "Zabieg cudowny, wykonany z najwyższą dbałością, polecam serdecznie.",
  },
  {
    name: "Lucyna",
    service: "Pedicure hybrydowy",
    worker: "Yuliia Dąbrowska",
    text: "Polecam! Pełen profesjonalizm i dbałość o szczegóły ❤️",
  },
  {
    name: "Agata",
    service: "Hybryda - stylizacja w stopach",
    worker: "Yuliia Dąbrowska",
    text: "Bardzo polecam - wszystko sterylne, paznokcie wykonane bardzo starannie!",
  },
  {
    name: "Edyta",
    service: "Korekta żelowa",
    worker: "Yuliia Dąbrowska",
    text: "Perfekcyjnie. Duża dbałość o szczegóły.",
  },
  {
    name: "Justyna",
    service: "Korekta żelowa",
    worker: "Yuliia Dąbrowska",
    text: "Jestem bardzo zadowolona z wizyty, na pewno będzie ich więcej :)",
  },
];


const galleryImages = [
  { src: gallery1, title: "Laminacja brwi", tag: "Brwi" },
  { src: gallery2, title: "Laminacja rzęs", tag: "Rzęsy" },
  { src: gallery3, title: "Stylizacja paznokci", tag: "Manicure" },
  { src: gallery4, title: "Delikatne zdobienie", tag: "Manicure" },
  { src: gallery5, title: "Kolorowy manicure", tag: "Manicure" },
  { src: gallery6, title: "Stylizacja brwi", tag: "Brwi" },
  { src: gallery7, title: "Pedicure", tag: "Pedicure" },
  { src: gallery8, title: "Lifting rzęs i brwi", tag: "Rzęsy" },
];

const workers = ["Yuliia Dąbrowska"];
const featuredServices = serviceGroups.flatMap((group) => group.items).slice(0, 9);

const searchableItems = serviceGroups.flatMap((group) =>
  group.items.map((item) => ({
    ...item,
    group: group.title,
  }))
);

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openService, setOpenService] = useState(null);

  const servicesRef = useRef(null);
  const reviewsRef = useRef(null);
  const galleryRef = useRef(null);

  const scrollMobile = (ref, direction) => {
    ref.current?.scrollBy({
      left: direction * 320,
      behavior: "smooth",
    });
  };

  const filteredSearchItems = searchableItems
    .filter((item) => {
      const text = `${item.name} ${item.group}`.toLowerCase();
      return searchValue.trim() && text.includes(searchValue.toLowerCase());
    })
    .slice(0, 6);

  const goToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : "☰"}
      </button>

      <aside className={`sidebar ${isMenuOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <h2>YUMA</h2>
          <p>Salon kosmetologiczny</p>
        </div>

        <nav>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Strona główna</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Usługi</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Opinie</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Galeria</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
        </nav>

        <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="book-btn">
          <FaCalendarAlt /> Zapisz się
        </a>

        <div className="social-links">
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram YUMA">
            <FaInstagram />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook YUMA">
            <FaFacebookF />
          </a>
          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok YUMA">
            <FaTiktok />
          </a>
        </div>
      </aside>

      {isMenuOpen && (
        <button
          type="button"
          className="menu-backdrop"
          aria-label="Zamknij menu"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <main className="content">
        <section className="hero" id="home">
          <div className="hero-top">
            <p className="eyebrow">Luxury beauty salon</p>
            <h1>YUMA</h1>
            <p className="subtitle">Salon kosmetologiczny</p>

            <div className="search-wrapper">
              <div className="search">
                <input
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="Wpisz np. paznokcie, brwi, rzęsy, pedicure..."
                />
                <FaSearch className="search-icon" />
              </div>

              {filteredSearchItems.length > 0 && (
                <div className="search-results premium-card">
                  {filteredSearchItems.map((item) => (
                    <button
                      type="button"
                      key={`${item.group}-${item.name}`}
                      onClick={() => {
                        goToServices();
                        setSearchValue("");
                      }}
                    >
                      <span>
                        <strong>{item.name}</strong>
                        <small>{item.group} • {item.time}</small>
                      </span>
                      <b>{item.price}</b>
                    </button>
                  ))}

                  <a href={booksyUrl} target="_blank" rel="noopener noreferrer">
                    Przejdź do rezerwacji →
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="hero-box premium-card">
            <div className="owner-img" style={{ backgroundImage: `url(${ownerImage})` }}></div>

            <div className="owner-text">
              <span>Właścicielka</span>
              <h2>Yuliia Dąbrowska</h2>
              <p>
                Cześć! Nazywam się Yuliia - czyli Julia :) Z pasją zajmuję się
                światem beauty. Posiadam 18letnie doświadczenie, które pozwala mi
                oferować usługi na najwyższym poziomie. Pracowałam w wielu
                renomowanych salonach, poznałam wielu prestiżowych firm, odbyłam
                kilkadziesiąt szkoleń, co pozwala że wizyta u mnie to coś więcej
                niż usługa.
              </p>
              <p>
                Każdego klienta traktuję indywidualnie, dostosowując zabiegi do
                jego unikalnych potrzeb i oczekiwań. Moim celem jest nie tylko
                poprawa wyglądu, ale także zapewnienie Ci chwili relaksu i
                odprężenia. Zapraszam do mojego gabinetu i odkrywania piękna
                razem ze mną!
              </p>
              <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="gold-link">
                Sprawdź wolne terminy →
              </a>
            </div>
          </div>
        </section>

        <section className="section about">
          <div className="about-text">
            <p className="eyebrow">O salonie</p>
            <h2>Piękno w eleganckiej oprawie</h2>
            <p>
              W YUMA dbamy o piękno, komfort i spokojną atmosferę podczas każdej
              wizyty. Oferujemy stylizację paznokci, brwi, rzęs, pedicure, makijaż
              permanentny, pakiety oraz pielęgnację dłoni. Do każdej osoby
              podchodzimy indywidualnie — staramy się dobrać usługę, tempo pracy i
              termin tak, aby wizyta była jak najlepiej dopasowana do klienta.
            </p>
          </div>

          <div className="stats premium-card">
            <div>
              <strong>5.0</strong>
              <span>średnia ocen</span>
            </div>
            <div>
              <strong>98</strong>
              <span>opinii na Booksy</span>
            </div>
            <div>
              <strong>39</strong>
              <span>usług w ofercie</span>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <p className="eyebrow center">Oferta</p>
          <h2>Usługi i ceny</h2>
          <p className="section-lead">
            Najedź na kategorię, żeby zobaczyć pełną listę zabiegów, ceny i czas
            wykonania. Kliknięcie usługi lub przycisku „Umów wizytę” przenosi do
            aktualnego kalendarza zapisów.
          </p>

          <div className="mobile-slider-header">
            <button type="button" onClick={() => scrollMobile(servicesRef, -1)}>‹</button>
            <button type="button" onClick={() => scrollMobile(servicesRef, 1)}>›</button>
          </div>

          <div className="service-groups mobile-slider" ref={servicesRef}>
            {serviceGroups.map((group) => (
              <article
                className={`service-group premium-card ${openService === group.title ? "service-open" : ""}`}
                key={group.title}
              >
                <div className="service-cover" style={{ backgroundImage: `url(${group.image})` }}>
                  <span>{group.badge}</span>
                </div>

                <div className="service-content">
                  <button
                    type="button"
                    className="service-title-row"
                    onClick={() =>
                      setOpenService(openService === group.title ? null : group.title)
                    }
                    aria-expanded={openService === group.title}
                  >
                    <h3>{group.title}</h3>
                    <FaChevronDown />
                  </button>
                  <p>{group.summary}</p>

                  <div className="service-list">
                    {group.items.map((item) => (
                      <a
                        href={booksyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="service-row"
                        key={`${group.title}-${item.name}`}
                      >
                        <span>
                          <strong>{item.name}</strong>
                          <small>{item.time}</small>
                        </span>
                        <b>{item.price}</b>
                      </a>
                    ))}
                  </div>

                  <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="booksy-mini-btn">
                    Umów wizytę <FaExternalLinkAlt />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <p className="eyebrow center">Opinie klientek</p>
          <h2>Co mówią klientki</h2>
          <p className="section-lead">Wybrane opinie klientek po wizytach w YUMA.</p>

          <div className="mobile-slider-header">
            <button type="button" onClick={() => scrollMobile(reviewsRef, -1)}>‹</button>
            <button type="button" onClick={() => scrollMobile(reviewsRef, 1)}>›</button>
          </div>

          <div className="reviews-grid premium-reviews mobile-slider" ref={reviewsRef}>
            {reviews.map((review) => (
              <article className="review" key={`${review.name}-${review.service}`}>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <p>“{review.text}”</p>
                <span>{review.name}</span>
                <small>{review.service} • {review.worker}</small>
              </article>
            ))}
          </div>

          <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="center-link">
            Zobacz więcej opinii <FaExternalLinkAlt />
          </a>
        </section>

        <section className="section gallery" id="gallery">
          <p className="eyebrow center">Galeria</p>
          <h2>Efekty naszej pracy</h2>
          <p className="section-lead">
            Zobacz wybrane realizacje i klimat gabinetu. Galeria najlepiej prezentuje
            realne efekty pracy oraz detale, które tworzą styl YUMA.
          </p>

          <div className="mobile-slider-header">
            <button type="button" onClick={() => scrollMobile(galleryRef, -1)}>‹</button>
            <button type="button" onClick={() => scrollMobile(galleryRef, 1)}>›</button>
          </div>

          <div className="pinterest-gallery mobile-slider" ref={galleryRef}>
            {galleryImages.map((image, index) => (
              <button
                type="button"
                className={`pin-card pin-${index + 1}`}
                key={image.title}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.title} />
                <span>{image.tag}</span>
                <strong>{image.title}</strong>
              </button>
            ))}
          </div>
        </section>

        <section className="section booking" id="booking">
          <div className="booking-heading">
            <p className="eyebrow">Rezerwacja</p>
            <h2>Umów wizytę</h2>
            <p>
              Sprawdź wolne terminy i wybierz dogodną godzinę. Kalendarz zapisów
              aktualizuje się na bieżąco, więc rezerwacja jest szybka i wygodna.
            </p>
          </div>

          <div className="booksy-panel premium-card">
            <div>
              <h3>Wybierz usługę i termin</h3>
              <p>Pełna oferta, ceny, pracownicy oraz dostępne godziny są dostępne w kalendarzu zapisów.</p>
            </div>
            <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="booksy-submit">
              Sprawdź terminy i zapisz się <FaExternalLinkAlt />
            </a>
          </div>

          <div className="worker-strip">
            {workers.map((worker) => (
              <a href={booksyUrl} target="_blank" rel="noopener noreferrer" key={worker}>
                <span>{worker}</span>
                <small>Zobacz dostępne terminy</small>
              </a>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-info">
            <p className="eyebrow">Kontakt</p>
            <h2>Odwiedź YUMA</h2>
            <p><FaPhoneAlt /> +48 575 393 277</p>
            <p><FaEnvelope /> yuliiadabrowska@gmail.com</p>
            <p><FaMapMarkerAlt /> YUMA Yuliia Dąbrowska</p>
            <p className="address-line">Kokoszycka 176D, 44-313 Wodzisław Śląski</p>
            <p><FaClock /> Terminy ustalane według dostępności i potrzeb klienta</p>
          </div>

          <div className="map premium-card">
            <iframe
              title="Mapa YUMA Yuliia Dąbrowska"
              src="https://www.google.com/maps?q=YUMA%20Yuliia%20D%C4%85browska%2C%20Kokoszycka%20176D%2C%2044-313%20Wodzis%C5%82aw%20%C5%9Al%C4%85ski&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button type="button" className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <FaTimes />
          </button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div>
              <span>{selectedImage.tag}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="floating-book-btn">
        <FaCalendarAlt /> Zapisz się
      </a>
    </div>
  );
}

export default App;
