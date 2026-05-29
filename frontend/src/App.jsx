import { Clock3, MapPin, MessageCircle, ShoppingBag, Sparkles } from "lucide-react";

import birthdayImage from "../images/candles-party-hat-balloons-horn-blowers-with-confetti-green-background.jpg";
import daraImage from "../images/IMG_5087.JPG";
import galaxyImage from "../images/IMG_5088.JPG";
import logoImage from "../images/IMG_5092.JPG";
import motImage from "../images/IMG_5080.JPG";
import tokyoImage from "../images/IMG_5081.JPG";
import univerImage from "../images/IMG_5082.JPG";
import { fallbackData as site } from "./siteData.js";

const formatPrice = (price) => new Intl.NumberFormat("ru-RU").format(price);

const setImages = {
  mot: motImage,
  galaxy: galaxyImage,
  dara: daraImage,
  univer: univerImage,
  company: tokyoImage,
};

const resolveSetImage = (set) => setImages[set.id] || set.image;
const getLocationName = (location) =>
  typeof location === "string" ? location : location.name;
const getPhoneHref = (phone) => {
  const digits = phone.replace(/\D/g, "");
  const normalized = digits.length === 11 && digits.startsWith("8")
    ? `7${digits.slice(1)}`
    : digits;

  return `tel:+${normalized}`;
};

function App() {
  const featuredSets = site.sets.slice(0, 5);
  const heroImage = featuredSets[1] ? resolveSetImage(featuredSets[1]) : motImage;

  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Go Sushi">
          <img className="brand-logo" src={logoImage} alt="" />
          <span>{site.displayBrand}</span>
        </a>
        <nav className="nav" aria-label="Главная навигация">
          <a href="#sets">Сеты</a>
          <a href="#promo">Акции</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="icon-action" href={site.whatsappLink} aria-label="Написать в WhatsApp">
          <MessageCircle size={20} />
        </a>
      </header>

      <main id="top">
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Алматы • суши • пицца • доставка</p>
            <h1>{site.displayBrand}</h1>
            <p className="hero-copy">
              Комбо-сеты для компании, встречи или вкусного вечера: роллы, пицца, напитки и подарки в одном заказе.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={site.whatsappLink}>
                <ShoppingBag size={20} />
                Заказать
              </a>
            </div>
          </div>
        </section>

        <section className="info-strip" aria-label="Преимущества">
          <div>
            <Clock3 size={20} />
            <span>Быстрая доставка по Алматы</span>
          </div>
          <div>
            <Sparkles size={20} />
            <span>Подарки в акционных сетах</span>
          </div>
          <div>
            <MapPin size={20} />
            <span>{site.locations.map(getLocationName).join(" • ")}</span>
          </div>
        </section>

        <section className="section" id="sets">
          <div className="section-heading">
            <p className="eyebrow menu-eyebrow">Меню</p>
            <h2>Популярные сеты</h2>
          </div>
          <div className="set-grid">
            {featuredSets.map((set) => (
              <article className="set-card" key={set.id}>
                <img src={resolveSetImage(set)} alt={set.name} />
                <div className="set-body">
                  <div className="set-title-row">
                    <h3>{set.name}</h3>
                    <strong>{set.priceLabel || `${formatPrice(set.price)} тг`}</strong>
                  </div>
                  <p className="set-badge">{set.badge}</p>
                  {set.split && <p className="split">{set.split}</p>}
                  <ul>
                    {set.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="card-button" href={site.whatsappLink}>
                    <MessageCircle size={18} />
                    Заказать в WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="promo-band"
          id="promo"
          style={{ backgroundImage: `url(${birthdayImage})` }}
        >
          <div>
            <p className="eyebrow">Акция</p>
            <h2>Туған күн иелеріне — Цезарь ролл сыйлыққа</h2>
            <p>
              GOSUSHI сет «УНИВЕР»: суши, пицца 4 сезона и каркадэ в подарок.
              Кел! Же! Қанық!
            </p>
          </div>
          <a className="primary-button" href={site.whatsappLink}>
            <MessageCircle size={20} />
            Написать
          </a>
        </section>

        <section className="contacts" id="contacts">
          <div>
            <p className="eyebrow">Контакты</p>
            <h2>Тек жаз, біз сені дәмге тойдырамыз</h2>
          </div>
          <div className="contact-actions">
            <a href={site.whatsappLink}>
              <MessageCircle size={20} />
              WhatsApp {site.whatsapp}
            </a>
          </div>
          <div className="location-list">
            {site.locations.map((location) => (
              <a
                href={typeof location === "string" ? undefined : location.url}
                key={getLocationName(location)}
                rel="noreferrer"
                target="_blank"
              >
                {getLocationName(location)}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src={logoImage} alt="" />
          <div>
            <strong>{site.brand}</strong>
            <span>{site.legalName}</span>
          </div>
        </div>
        <div className="footer-legal">
          <a href={getPhoneHref(site.orderPhone)}>Телефон: {site.orderPhone}</a>
          <a href={getPhoneHref(site.phone)}>Телефон: {site.phone}</a>
          <span>
            {site.legalAddress.includes(", индекс")
              ? <>
                  {site.legalAddress.split(", индекс")[0]},{" "}
                  <br className="footer-addr-br" />
                  индекс{site.legalAddress.split(", индекс")[1]}
                </>
              : site.legalAddress}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
