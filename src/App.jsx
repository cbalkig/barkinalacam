import React, { useState, useEffect } from 'react';
import { Menu, X, Scale, Shield, Landmark, BookOpen, MapPin, Phone, Mail, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const practiceAreas = [
    {
      icon: <Scale size={32} />,
      title: "Şirketler Hukuku",
      description: "İşletmeler için stratejik hukuki danışmanlık, uyumluluğun sağlanması, uyuşmazlıkların çözümü ve büyümenin desteklenmesi."
    },
    {
      icon: <Shield size={32} />,
      title: "Ceza Hukuku",
      description: "Haklarınızı ve özgürlüğünüzü sarsılmaz bir adanmışlık ve stratejik hukuki yaklaşımla koruyan güçlü bir savunma."
    },
    {
      icon: <Landmark size={32} />,
      title: "Gayrimenkul Hukuku",
      description: "Karmaşık mülkiyet işlemleri, imar hukuku ve davalar sürecinde kapsamlı rehberlik."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Müzakere ve Uyuşmazlık Çözümü",
      description: "Mahkeme salonlarında kararlı savunuculuk ve alternatif çözüm yolları ile uyuşmazlıkların müvekkil lehine sonuçlandırılması."
    }
  ];

  const mapLink = "https://www.google.com/maps?vet=10CAAQoqAOahcKEwjI_Orq9bOVAxUAAAAAHQAAAAAQDA..i&pvq=Cg0vZy8xMXJjcmQ3dzZkIhIKDGFsYWNhbSBodWt1axACGAM&lqi=CgxhbGFjYW0gaHVrdWuSAQhsYXdfZmlybQ&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&ftid=0x14cac5f026582b27:0x6b14939faafc0a39";
  const emailAddress = "barkinalacam@gmail.com";

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className={`brand ${isScrolled ? 'dark-text' : ''}`}>
            Barkın <span>ALAÇAM</span>
          </a>
          
          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>ANA SAYFA</a>
            <a href="#expertise" onClick={() => setIsMobileMenuOpen(false)}>UZMANLIK</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>HAKKIMIZDA</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>İLETİŞİM</a>
          </div>

          <button className={`mobile-toggle ${isMobileMenuOpen || isScrolled ? 'dark-text' : ''}`} onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeUpVariant}>
              Haklarınızı <span>tavizsiz</span> bir mükemmellikle savunuyoruz.
            </motion.h1>
            <motion.p variants={fadeUpVariant}>
              Karmaşık hukuki zorluklar için stratejik, yüksek standartlı savunma ve kişiselleştirilmiş danışmanlık sunmaya adanmış seçkin bir hukuk bürosu.
            </motion.p>
            <motion.div className="hero-btns" variants={fadeUpVariant}>
              <a href="#contact" className="btn btn-primary">BİZE ULAŞIN</a>
              <a href="#expertise" className="btn btn-outline">UZMANLIK ALANLARIMIZ</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="section expertise">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <h2 className="section-title">Uzmanlık Alanlarımız</h2>
            <p className="section-subtitle">Her müvekkilin kendine özgü ihtiyaçlarını karşılayacak şekilde uyarlanmış sofistike hukuki çözümler sunuyoruz.</p>
          </motion.div>

          <motion.div 
            className="expertise-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {practiceAreas.map((area, index) => (
              <motion.div className="expertise-card" key={index} variants={fadeUpVariant}>
                <div className="expertise-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container about-container">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-image-wrapper">
               <img src={`${import.meta.env.BASE_URL}images/portrait.jpg`} alt="Barkın ALAÇAM" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div className="about-badge">
              <div className="years">25+</div>
              <div className="text">YILLIK<br/>TECRÜBE</div>
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Hukuki Mükemmellik Mirası</h2>
            <p>
              Marmara Üniversitesi mezunu olan Barkın ALAÇAM, 2000 yılından bu yana hukuk sektöründe kesintisiz ve başarılı bir kariyere sahiptir. KATILIM Hukuk Bürosu ve 16 yılı aşkın süreyle ÖZGÜL Hukuk Bürosu'nda edindiği derin tecrübelerin ardından, 2020 yılında kendi ofisi olan Alaçam Avukatlık ve Hukuk Danışmanlığı'nı kurmuştur.
            </p>
            <p>
              Çeyrek asırlık mesleki birikimiyle; müzakere, alternatif ihtilaf çözümü ve dava takibi süreçlerinde müvekkillerine yüksek standartlarda hukuki destek sağlamaktadır.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <CheckCircle2 className="feature-icon" size={24} />
                <div className="feature-text">
                  <h4>Stratejik Yaklaşım</h4>
                  <p>Karmaşık hukuki meseleler için yenilikçi çözümler geliştiriyoruz.</p>
                </div>
              </div>
              <div className="about-feature">
                <CheckCircle2 className="feature-icon" size={24} />
                <div className="feature-text">
                  <h4>Müvekkil Odaklılık</h4>
                  <p>Sizi her adımda bilgilendirmeye ve güçlendirmeye kararlıyız.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="section-title">İletişime Geçin</h2>
            <p className="section-subtitle">Hukuki ihtiyaçlarınızı güvenle ve gizlilikle görüşmek için büromuzla iletişime geçin.</p>
          </motion.div>

          <div className="contact-container">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}
            >
              
              <div className="contact-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '8px' }}>
                <MapPin className="contact-icon" size={32} />
                <div>
                  <h4>Alaçam Hukuk Bürosu</h4>
                  <p style={{ marginBottom: '1rem', fontSize: '0.9rem', lineHeight: '1.4' }}>
                    HELENİUM TWİNS, Soğanlık Yeni<br/>
                    Baltacı Mehmet Paşa Sk.<br/>
                    NO:1/1 A BLOK D:16<br/>
                    34880 Kartal/İstanbul
                  </p>
                  <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>HARİTADA GÖR</a>
                </div>
              </div>
              
              <div className="contact-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '8px' }}>
                <Phone className="contact-icon" size={32} />
                <div>
                  <h4>Telefon</h4>
                  <p style={{ marginBottom: '0.2rem', fontSize: '0.9rem' }}>Ofis: +90 216 309 00 22</p>
                  <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Mobil: +90 530 035 43 59</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a href="tel:+902163090022" className="btn btn-primary" style={{ padding: '0.5rem', fontSize: '0.8rem', flex: 1, textAlign: 'center' }}>OFİSİ ARA</a>
                    <a href="https://wa.me/905300354359" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem', fontSize: '0.8rem', flex: 1, textAlign: 'center' }}>WHATSAPP</a>
                  </div>
                </div>
              </div>
              
              <div className="contact-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '8px' }}>
                <Mail className="contact-icon" size={32} />
                <div>
                  <h4>E-Posta</h4>
                  <p style={{ marginBottom: '1rem' }}>Doğrudan e-posta gönderin.</p>
                  <a href={`mailto:${emailAddress}`} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', width: '100%' }}>E-POSTA YAZ</a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">Barkın <span>ALAÇAM</span></div>
          <p>&copy; {new Date().getFullYear()} Alaçam Hukuk Bürosu. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
