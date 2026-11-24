import { useState, useEffect } from 'react';
import {
  Menu, X, Scale, Shield, Landmark, MapPin, Phone, Mail, Clock, Briefcase,
  FileSignature, Building2, Gavel, Handshake, Home, Users, Lightbulb, Check, ArrowRight,
  MessageCircle, Send,
} from 'lucide-react';
import { motion, MotionConfig } from 'framer-motion';
import {
  contact, nav, corporateServices, corporateBenefits, featuredAreas,
  otherAreas, process, timeline, getEmail,
} from './content';
import './App.css';

const icons = {
  Scale, Shield, Landmark, Briefcase, FileSignature, Building2, Gavel, Handshake, Home, Users, Lightbulb,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const inView = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-80px' },
};

function SectionHeading({ eyebrow, title, text, light = false, align = 'center' }) {
  return (
    <motion.div className={`section-heading ${align} ${light ? 'light' : ''}`} {...inView} variants={fadeUp}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={close} aria-label="Ana sayfa">
          <span className="brand-mark">A</span>
          <span className="brand-text">
            <span className="brand-name">Av. Barkın Alaçam</span>
            <span className="brand-sub">Avukatlık &amp; Arabuluculuk</span>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Ana menü">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
          ))}
          <a href="#iletisim" className="btn btn-gold nav-cta" onClick={close}>Randevu Alın</a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div className="hero-content" initial="hidden" animate="visible" variants={stagger}>
          <motion.span className="eyebrow" variants={fadeUp}>İstanbul · 2000'den bu yana</motion.span>
          <motion.h1 variants={fadeUp}>
            Şirketiniz için <em>güvenilir</em> ve sürekli hukuki danışmanlık.
          </motion.h1>
          <motion.p variants={fadeUp}>
            Kurumsal müvekkillere sözleşmelerden ticari uyuşmazlıklara kadar önleyici ve
            çözüm odaklı destek; gayrimenkul, aile ve fikri mülkiyet hukukunda ise titiz dava takibi.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#iletisim" className="btn btn-gold">
              Ön Görüşme Planlayın <ArrowRight size={18} />
            </a>
            <a href="#kurumsal" className="btn btn-ghost">Kurumsal Hizmetler</a>
          </motion.div>

          <motion.dl className="hero-facts" variants={fadeUp}>
            <div>
              <dt>25+</dt>
              <dd>yıllık mesleki deneyim</dd>
            </div>
            <div>
              <dt>Arabulucu</dt>
              <dd>Adalet Bakanlığı siciline kayıtlı</dd>
            </div>
            <div>
              <dt>2020</dt>
              <dd>Alaçam Hukuk Bürosu kuruluşu</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="portrait-frame">
            <img
              src={`${import.meta.env.BASE_URL}images/portrait.jpg`}
              alt="Av. Barkın Alaçam"
              width="1024"
              height="1024"
              fetchpriority="high"
            />
          </div>
          <div className="portrait-caption">
            <strong>Av. Barkın Alaçam</strong>
            <span>Kurucu Avukat · Arabulucu</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Corporate() {
  return (
    <section id="kurumsal" className="section corporate">
      <div className="container">
        <SectionHeading
          eyebrow="Kurumsal Danışmanlık"
          title="İşinize odaklanın; hukuki riskleri birlikte yönetelim."
          text="Şirketlerin ihtiyaç duyduğu şey çoğu zaman bir dava değil, doğru zamanda verilen doğru tavsiyedir. Büromuz, kurumsal müvekkillerine kesintisiz ve öngörülebilir bir hukuki destek sunar."
        />

        <motion.div className="service-grid" {...inView} variants={stagger}>
          {corporateServices.map((s) => {
            const Icon = icons[s.icon];
            return (
              <motion.article className="service-card" key={s.title} variants={fadeUp}>
                <div className="service-icon"><Icon size={26} strokeWidth={1.5} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div className="retainer" {...inView} variants={fadeUp}>
          <div className="retainer-text">
            <span className="eyebrow">Aylık Danışmanlık Modeli</span>
            <h3>Şirketiniz için bir hukuk departmanı gibi çalışırız.</h3>
            <p>
              Kendi hukuk birimini kurmak istemeyen ya da mevcut birimine dış destek arayan
              şirketler için kapsamı yazılı olarak belirlenen sürekli danışmanlık.
            </p>
            <a href="#iletisim" className="btn btn-gold">Teklif İsteyin <ArrowRight size={18} /></a>
          </div>
          <ul className="retainer-list">
            {corporateBenefits.map((b) => (
              <li key={b}><Check size={18} strokeWidth={2.5} /> <span>{b}</span></li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="uzmanlik" className="section expertise">
      <div className="container">
        <SectionHeading
          eyebrow="Uzmanlık Alanları"
          title="Derinlemesine deneyim gerektiren alanlar."
          text="Yirmi beş yılı aşan meslek hayatında en çok yoğunlaşılan alanlar; hem şirketler hem bireyler için."
        />

        <div className="featured">
          {featuredAreas.map((area, i) => {
            const Icon = icons[area.icon];
            return (
              <motion.article
                id={area.id}
                className={`featured-card ${i % 2 ? 'alt' : ''}`}
                key={area.id}
                {...inView}
                variants={fadeUp}
              >
                <div className="featured-head">
                  <div className="featured-icon"><Icon size={30} strokeWidth={1.5} /></div>
                  <span className="eyebrow">{area.kicker}</span>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <a href="#iletisim" className="text-link">Görüşme talep edin <ArrowRight size={16} /></a>
                </div>
                <ul className="featured-list">
                  {area.items.map((item) => (
                    <li key={item}><span className="dot" />{item}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div className="other-areas" {...inView} variants={stagger}>
          {otherAreas.map((a) => {
            const Icon = icons[a.icon];
            return (
              <motion.div className="other-card" key={a.title} variants={fadeUp}>
                <Icon size={24} strokeWidth={1.5} />
                <div>
                  <h4>{a.title}</h4>
                  <p>{a.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process">
      <div className="container">
        <SectionHeading
          light
          eyebrow="Çalışma Şekli"
          title="Açık, planlı ve şeffaf bir süreç."
        />
        <motion.ol className="process-steps" {...inView} variants={stagger}>
          {process.map((p, i) => (
            <motion.li key={p.title} variants={fadeUp}>
              <span className="step-no">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="hakkinda" className="section about">
      <div className="container about-grid">
        <motion.div className="about-text" {...inView} variants={fadeUp}>
          <span className="eyebrow">Hakkında</span>
          <h2>Av. Barkın Alaçam</h2>
          <p className="lead">
            Marmara Üniversitesi Hukuk Fakültesi mezunu olan Av. Barkın Alaçam, 2000 yılından bu
            yana kesintisiz olarak avukatlık yapmaktadır.
          </p>
          <p>
            Meslek hayatına KATILIM Hukuk Bürosu’nda başlamış, ardından 16 yılı aşkın süre
            ÖZGÜL Hukuk Bürosu’nda ticari, gayrimenkul ve aile hukuku alanlarında çok sayıda
            dosya yürütmüştür. 2020 yılında Alaçam Avukatlık ve Arabuluculuk Bürosu’nu
            kurmuştur.
          </p>
          <p>
            Adalet Bakanlığı siciline kayıtlı arabulucu olması, uyuşmazlıklara yalnızca dava
            perspektifinden değil, uzlaşma imkânları açısından da bakabilmesini sağlar. Bu
            yaklaşım, özellikle zaman ve maliyetin kritik olduğu ticari ilişkilerde müvekkillere
            önemli avantaj sunar.
          </p>
          <blockquote>
            “İyi hukuki danışmanlık, sorunu çözmekten önce sorunun doğmasını engellemekle başlar.”
          </blockquote>
        </motion.div>

        <motion.ol className="timeline" {...inView} variants={stagger}>
          {timeline.map((t) => (
            <motion.li key={t.year} variants={fadeUp}>
              <span className="t-year">{t.year}</span>
              <p>{t.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ type: 'Kurumsal', name: '', company: '', phone: '', topic: '', message: '', consent: false });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = `Görüşme Talebi – ${form.type}${form.topic ? ` – ${form.topic}` : ''}`;
    const body = [
      `Müvekkil türü: ${form.type}`,
      `Ad Soyad: ${form.name}`,
      form.type === 'Kurumsal' && form.company ? `Şirket: ${form.company}` : null,
      `Telefon: ${form.phone}`,
      form.topic ? `Konu: ${form.topic}` : null,
      '',
      form.message,
    ].filter((l) => l !== null).join('\n');
    window.location.href = `mailto:${getEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <h3>Görüşme Talebi</h3>
      <div className="segmented" role="radiogroup" aria-label="Müvekkil türü">
        {['Kurumsal', 'Bireysel'].map((t) => (
          <button
            type="button"
            key={t}
            role="radio"
            aria-checked={form.type === t}
            className={form.type === t ? 'active' : ''}
            onClick={() => setForm({ ...form, type: t })}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="form-row">
        <label>
          <span>Ad Soyad *</span>
          <input required value={form.name} onChange={update('name')} autoComplete="name" />
        </label>
        {form.type === 'Kurumsal' && (
          <label>
            <span>Şirket</span>
            <input value={form.company} onChange={update('company')} autoComplete="organization" />
          </label>
        )}
      </div>
      <div className="form-row">
        <label>
          <span>Telefon *</span>
          <input required type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" />
        </label>
        <label>
          <span>Konu</span>
          <select value={form.topic} onChange={update('topic')}>
            <option value="">Seçiniz</option>
            <option>Kurumsal Danışmanlık</option>
            <option>Sözleşmeler</option>
            <option>Gayrimenkul</option>
            <option>Fikri Mülkiyet / Marka</option>
            <option>Boşanma / Aile</option>
            <option>Arabuluculuk</option>
            <option>Ceza</option>
            <option>Diğer</option>
          </select>
        </label>
      </div>
      <label>
        <span>Mesajınız *</span>
        <textarea required rows="4" value={form.message} onChange={update('message')} placeholder="Konuyu kısaca özetleyebilirsiniz." />
      </label>
      <label className="consent">
        <input type="checkbox" required checked={form.consent} onChange={update('consent')} />
        <span>
          Paylaştığım kişisel verilerin, 6698 sayılı KVKK kapsamında yalnızca talebime dönüş
          yapılması amacıyla işlenmesini kabul ediyorum.
        </span>
      </label>
      <button type="submit" className="btn btn-gold btn-block">
        Gönder <Send size={17} />
      </button>
      <p className="form-note">Gönder’e bastığınızda e-posta uygulamanız mesajınız hazır şekilde açılır.</p>
    </form>
  );
}

function Contact() {
  return (
    <section id="iletisim" className="section contact">
      <div className="container">
        <SectionHeading
          light
          eyebrow="İletişim"
          title="Bir ön görüşme planlayalım."
          text="Kurumsal danışmanlık, gayrimenkul, boşanma ve arabuluculuk talepleriniz için büromuza ulaşabilirsiniz."
        />

        <div className="contact-grid">
          <motion.div className="contact-info" {...inView} variants={stagger}>
            <motion.div className="info-item" variants={fadeUp}>
              <MapPin size={22} />
              <div>
                <h4>Adres</h4>
                <p>{contact.addressLines.map((l) => <span key={l}>{l}<br /></span>)}</p>
                <a href={contact.mapLink} target="_blank" rel="noopener noreferrer" className="text-link">Yol tarifi al <ArrowRight size={15} /></a>
              </div>
            </motion.div>
            <motion.div className="info-item" variants={fadeUp}>
              <Phone size={22} />
              <div>
                <h4>Telefon</h4>
                <p>
                  <a href={contact.phoneMobileHref}>{contact.phoneMobile}</a>
                </p>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">WhatsApp ile yazın <ArrowRight size={15} /></a>
              </div>
            </motion.div>
            <motion.div className="info-item" variants={fadeUp}>
              <Mail size={22} />
              <div>
                <h4>E-posta</h4>
                <p>Talebinizi yandaki form ile iletebilir ya da doğrudan e-posta gönderebilirsiniz.</p>
                <button
                  type="button"
                  className="btn btn-outline-gold btn-sm"
                  onClick={() => { window.location.href = `mailto:${getEmail()}?subject=${encodeURIComponent('Görüşme Talebi')}`; }}
                >
                  E-posta Gönder <Send size={15} />
                </button>
              </div>
            </motion.div>
            <motion.div className="info-item" variants={fadeUp}>
              <Clock size={22} />
              <div>
                <h4>Çalışma Saatleri</h4>
                <p>{contact.hours}</p>
              </div>
            </motion.div>
            <motion.div className="map" variants={fadeUp}>
              <iframe
                title="Büro konumu"
                src={contact.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          <motion.div {...inView} variants={fadeUp}>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-mark">A</span>
            <div>
              <strong>Alaçam Avukatlık ve Arabuluculuk Bürosu</strong>
              <span>Kartal / İstanbul</span>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Alt menü">
            {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <p className="disclaimer">
          Bu internet sitesi, Türkiye Barolar Birliği Meslek Kuralları ve Reklam Yasağı
          Yönetmeliği’ne uygun olarak yalnızca bilgilendirme amacıyla hazırlanmıştır. Sitede
          yer alan bilgiler hukuki görüş niteliğinde değildir; somut durumunuz için bir avukata
          danışmanız önerilir.
        </p>
        <div className="footer-bottom">
          <span>© {year} Alaçam Avukatlık ve Arabuluculuk Bürosu. Tüm hakları saklıdır.</span>
          <span>Web tasarım: C. Balkı GEMİRTER</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#kurumsal" className="skip-link">İçeriğe geç</a>
      <Navbar />
      <main>
        <Hero />
        <Corporate />
        <Expertise />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <a
        href={contact.whatsapp}
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <MessageCircle size={26} />
      </a>
    </MotionConfig>
  );
}
