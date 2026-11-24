// Sitedeki tüm metin ve iletişim bilgileri bu dosyada tutulur.
// İçerik, Türkiye Barolar Birliği Meslek Kuralları ve Reklam Yasağı Yönetmeliği
// gereği bilgilendirme amaçlı ve ölçülü bir dille yazılmıştır.

export const contact = {
  office: 'Alaçam Avukatlık ve Arabuluculuk Bürosu',
  addressLines: [
    'Helenium Twins, Soğanlık Yeni Mah.',
    'Baltacı Mehmet Paşa Sk. No: 1/1',
    'A Blok D: 16',
    '34880 Kartal / İstanbul',
  ],
  phoneMobile: '+90 530 035 43 59',
  phoneMobileHref: 'tel:+905300354359',
  whatsapp: 'https://wa.me/905300354359',
  // Adres, spam botlarının toplamasını zorlaştırmak için parçalı tutulur ve sayfada gösterilmez.
  emailParts: ['barkinalacam', 'gmail.com'],
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Helenium+Twins+Baltac%C4%B1+Mehmet+Pa%C5%9Fa+Sk+Kartal+%C4%B0stanbul',
  mapEmbed:
    'https://maps.google.com/maps?q=Helenium%20Twins%2C%20Kartal%2C%20%C4%B0stanbul&z=15&output=embed',
  hours: 'Hafta içi 09:00 – 18:00 · Randevu ile',
};

export const getEmail = () => contact.emailParts.join('@');

export const nav = [
  { href: '#kurumsal', label: 'Kurumsal Danışmanlık' },
  { href: '#uzmanlik', label: 'Uzmanlık Alanları' },
  { href: '#hakkinda', label: 'Hakkında' },
  { href: '#iletisim', label: 'İletişim' },
];

export const corporateServices = [
  {
    icon: 'Briefcase',
    title: 'Sürekli Hukuki Danışmanlık',
    text: 'Şirketin günlük işleyişinde ortaya çıkan hukuki sorulara aylık sözleşme modeliyle hızlı ve süreklilik arz eden destek; yazılı görüş, toplantı ve yazışma takibi.',
  },
  {
    icon: 'FileSignature',
    title: 'Sözleşme Hazırlama ve Müzakere',
    text: 'Satış, tedarik, hizmet, distribütörlük, kira ve gizlilik sözleşmelerinin hazırlanması, karşı taraf taslaklarının incelenmesi ve risk maddelerinin müzakeresi.',
  },
  {
    icon: 'Building2',
    title: 'Şirketler ve Ticaret Hukuku',
    text: 'Şirket kuruluşu, esas sözleşme değişiklikleri, genel kurul ve yönetim kurulu işlemleri, pay devirleri, ortaklar arası uyuşmazlıklar ve ticari uyuşmazlıklar.',
  },
  {
    icon: 'Landmark',
    title: 'Gayrimenkul Hukuku',
    text: 'Taşınmaz alım-satımında hukuki inceleme, tapu iptali ve tescil davaları, kat karşılığı inşaat sözleşmeleri ve ortaklığın giderilmesi.',
  },
  {
    icon: 'Gavel',
    title: 'Ticari Uyuşmazlık ve Alacak Takibi',
    text: 'Ticari davaların yürütülmesi, alacakların icra yoluyla takibi ve uyuşmazlık doğmadan önce ihtarname ve delil hazırlığı ile pozisyonun güçlendirilmesi.',
  },
  {
    icon: 'Handshake',
    title: 'Arabuluculuk',
    text: 'Ticari, iş, kira, tüketici ve ortaklık uyuşmazlıkları dahil her türlü dava şartı ve ihtiyari arabuluculuk işleminde arabuluculuk ve taraf vekilliği; Adalet Bakanlığı siciline kayıtlı arabulucu deneyimiyle uzlaşma odaklı çözüm.',
  },
];

export const corporateBenefits = [
  'Tek muhatap: dosyanızı baştan sona aynı avukat takip eder.',
  'Önleyici yaklaşım: sözleşme ve süreçlerde riskler uyuşmazlık doğmadan ele alınır.',
  'Öngörülebilir maliyet: kapsamı yazılı olarak belirlenmiş aylık danışmanlık modeli.',
  'Hızlı dönüş: acil sorular için doğrudan telefon ve e-posta erişimi.',
];

export const featuredAreas = [
  {
    id: 'gayrimenkul',
    icon: 'Home',
    kicker: 'Öne Çıkan Alan',
    title: 'Gayrimenkul Hukuku',
    text: 'Taşınmaz, çoğu müvekkil için en değerli varlıktır. Alım-satım öncesi incelemeden tapu davalarına ve kat karşılığı inşaat projelerine kadar mülkiyetle ilgili her aşamada hukuki destek sağlanır.',
    items: [
      'Tapu iptali ve tescil davaları',
      'Kat karşılığı inşaat sözleşmeleri',
      'Ortaklığın giderilmesi (izale-i şuyu)',
      'Önalım (şufa) ve muris muvazaası davaları',
      'Alım-satım öncesi hukuki inceleme',
      'Kamulaştırma ve el atmanın önlenmesi',
    ],
  },
  {
    id: 'aile',
    icon: 'Users',
    kicker: 'Öne Çıkan Alan',
    title: 'Aile Hukuku',
    text: 'Boşanma süreçleri hem duygusal hem de mali açıdan yıpratıcı olabilir. Süreç, mahremiyete özen gösterilerek, mümkün olan durumlarda uzlaşma önceliğiyle ve gerektiğinde kararlı bir dava takibiyle yürütülür.',
    items: [
      'Anlaşmalı boşanma ve protokol hazırlığı',
      'Çekişmeli boşanma davaları',
      'Velayet ve çocukla kişisel ilişki',
      'Nafaka (tedbir, iştirak, yoksulluk)',
      'Mal rejiminin tasfiyesi ve katkı payı',
      'Maddi ve manevi tazminat talepleri',
      'Yabancı boşanma kararlarının tanınması',
      'Aile içi arabuluculuk ve uzlaşma',
    ],
  },
  {
    id: 'fikri-mulkiyet',
    icon: 'Lightbulb',
    kicker: 'Öne Çıkan Alan',
    title: 'Fikri ve Sınai Mülkiyet Hukuku',
    text: 'Marka, tasarım, patent ve telif hakları, bir işletmenin en değerli varlıkları arasındadır. Bu hakların ihlaline karşı açılan ve bu haklara yöneltilen davalar, tedbir ve delil tespiti aşamasından karara kadar takip edilir.',
    items: [
      'Marka hakkına tecavüz davaları',
      'Marka hükümsüzlüğü ve iptal davaları',
      'YİDK kararlarının iptali davaları',
      'Haksız rekabet davaları',
      'Tasarım ve patent uyuşmazlıkları',
      'Telif hakkı ihlallerine ilişkin davalar',
      'İhtiyati tedbir ve delil tespiti',
      'Lisans ve devir sözleşmeleri',
    ],
  },
];

export const otherAreas = [
  {
    icon: 'Shield',
    title: 'Ceza Hukuku',
    text: 'Soruşturma ve kovuşturma aşamalarında müdafilik ve katılan vekilliği; özellikle ekonomik ve ticari suçlarda şirket ve yöneticilerin temsili.',
  },
  {
    icon: 'Scale',
    title: 'Arabuluculuk',
    text: 'Ticari, kira, ortaklığın giderilmesi ve iş uyuşmazlıklarında arabulucu ya da taraf vekili olarak uzlaşma görüşmelerinin yürütülmesi.',
  },
];

export const process = [
  {
    title: 'Ön Görüşme',
    text: 'İhtiyacınızı ve mevcut durumu dinliyor, belgeleri birlikte gözden geçiriyoruz.',
  },
  {
    title: 'Hukuki Değerlendirme',
    text: 'Riskleri, seçenekleri ve olası sonuçları açık bir dille ortaya koyuyoruz.',
  },
  {
    title: 'Yazılı Sözleşme',
    text: 'Kapsam, süre ve ücret; Avukatlık Kanunu çerçevesinde yazılı olarak belirlenir.',
  },
  {
    title: 'Takip ve Raporlama',
    text: 'Her önemli gelişme size zamanında ve anlaşılır biçimde bildirilir.',
  },
];

export const timeline = [
  { year: '2000', text: 'Marmara Üniversitesi Hukuk Fakültesi’nden mezuniyet; KATILIM Hukuk Bürosu’nda avukatlık.' },
  { year: '16+ yıl', text: 'ÖZGÜL Hukuk Bürosu’nda 16 yılı aşkın süre boyunca ticaret, organize sanayi bölgeleri, şirketlere hukuki danışmanlık, gayrimenkul ve aile hukukuna ilişkin davalarda çalışmıştır.' },
  { year: '2020', text: 'Alaçam Avukatlık ve Arabuluculuk Bürosu’nun kuruluşu.' },
  { year: 'Bugün', text: 'Şirketlere sürekli danışmanlık, gayrimenkul ve aile hukuku davaları, arabuluculuk.' },
];
