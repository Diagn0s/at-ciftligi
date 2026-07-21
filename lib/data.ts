export const siteInfo = {
  name: "B-Horse",
  legalName: "B-Horse Atçılık Ltd. Şti.",
  address: "42000 Konya, Karatay Mah. At Çiftliği Sokak No:67",
  phone: "+90 532 700 7777",
  phoneSecondary: "+90 332 700 7777",
  email: "info@ornekdomain.com",
  emailSales: "satis@ornekdomain.com",
  taxId: "1234567890",
  bankAccount: "TR12 0006 4000 0011 2345 6789 01",
  hours: [
    { label: "Pzt - Cuma", value: "08:00 - 17:00" },
    { label: "Cumartesi", value: "08:00 - 12:00" },
    { label: "Pazar", value: "Kapalı" },
  ],
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://www.linkedin.com/",
    maps: "https://maps.app.goo.gl/bFtYDMr8mNH7VdQo8",
  },
};

export const navLinks = [
  { href: "/en", label: "Anasayfa" },
  { href: "/en/all-products", label: "Atlar" },
  { href: "/en/services", label: "Hizmetler" },
  { href: "/en/blog", label: "Blog" },
  { href: "/en/about-us", label: "Hakkımızda" },
  { href: "/en/frequently-asked-questions", label: "SSS" },
  { href: "/en/contacts", label: "İletişim" },
];

export const footerMenu = [
  { href: "/en", label: "Anasayfa" },
  { href: "/en/frequently-asked-questions", label: "SSS" },
  { href: "/en/privacy-policy-description", label: "Gizlilik Politikası" },
  { href: "/en/about-us", label: "Hakkımızda" },
  { href: "/en/contacts", label: "İletişim" },
];

export const newsletterText =
  "Yeni atlarımızdan, kampanyalarımızdan ve sektörle ilgili haberlerden ilk siz haberdar olun. Bültenimize kaydolun, fırsatları kaçırmayın.";

export const stats = [
  { value: "2763", suffix: "+", label: "Mutlu Müşteri", label2: "Yıllar içinde güvenle hizmet verdiğimiz müşteri sayısı" },
  { value: "10", suffix: "", label: "Yıllık Tecrübe", label2: "Atçılık sektöründe edindiğimiz profesyonel deneyim" },
  { value: "63", suffix: "+", label: "Satılan At", label2: "Yeni sahipleriyle buluşturduğumuz atların sayısı" },
  { value: "153", suffix: "", label: "Tamamlanan İş Birliği", label2: "Başarıyla sonuçlandırdığımız alım-satım süreçleri" },
];

export const homeServiceFeatures = [
  { title: "Alım Danışmanlığı", description: "İhtiyacınıza en uygun atı bulmanız için uzman desteği sunuyoruz." },
  { title: "Satış Süreci Yönetimi", description: "Atınızı en doğru alıcıyla buluşturuyor, tüm süreci sizin adınıza yürütüyoruz." },
  { title: "Veteriner Kontrolü", description: "Bağımsız veteriner muayenesiyle sağlıklı ve güvenli bir alım yapmanızı sağlıyoruz." },
  { title: "Uluslararası Tedarik", description: "İspanya ve Portekiz başta olmak üzere yurt dışından kaliteli atlar temin ediyoruz." },
  { title: "Nakliye Organizasyonu", description: "Atınızın güvenli ve konforlu bir şekilde yeni yuvasına ulaşmasını sağlıyoruz." },
  { title: "Evrak ve Sözleşme İşlemleri", description: "Tüm resmi işlemleri ve sözleşme süreçlerini sizin için eksiksiz yönetiyoruz." },
];

export type Horse = {
  slug: string;
  name: string;
  category: string;
  image: string;
  sku: string;
};

export const horses: Horse[] = [
  { slug: "bandolero", name: "Bandolero", category: "Safkan Atlar", image: "/images/horse1.jpg", sku: "BH-SKU-001" },
  { slug: "fuego", name: "Fuego", category: "Safkan Atlar", image: "/images/horse2.jpg", sku: "BH-SKU-002" },
  { slug: "valiente", name: "Valiente", category: "Safkan Atlar", image: "/images/horse3.jpg", sku: "BH-SKU-003" },
  { slug: "hidalgo", name: "Hidalgo", category: "Safkan Atlar", image: "/images/horse4.jpg", sku: "BH-SKU-004" },
];

export const horseCategories = [
  "Safkan Atlar",
  "Yarış Atları",
  "Binicilik Atları",
  "Damızlık Atlar",
  "Taylar",
  "Midilliler",
  "Dresaj Atları",
  "Engel Atlama Atları",
  "Batı Biniciliği Atları",
  "Sporcu Atları",
];

export const productShortDescription =
  "Sakin mizacı, güçlü yapısı ve yüksek performansıyla dikkat çeken, deneyimli eğitmenler tarafından yetiştirilmiş sağlıklı bir at.";

export const productFeatureList = [
  "Düzenli veteriner kontrolünden geçmiştir",
  "Deneyimli binicilerle uyumlu çalışır",
  "Dresaj ve engel eğitimi almıştır",
  "Sakin ve güvenilir bir mizaca sahiptir",
  "Tüm sağlık kayıtları ve pedigrisi mevcuttur",
];

export const productTag = "safkan";

export const productLongParagraph =
  "Bu at, doğumundan itibaren titizlikle takip edilmiş ve profesyonel eğitmenler eşliğinde adım adım geliştirilmiştir. Düzenli veteriner kontrolleri, dengeli beslenme programı ve düzenli antrenmanlarla hem fiziksel hem de zihinsel açıdan en iyi seviyeye getirilmiştir. Sakin mizacı sayesinde yeni binicilerle de kolayca uyum sağlar, aynı zamanda deneyimli sporcuların beklentilerini de karşılayacak performansa sahiptir. Soy kütüğü ve tüm sağlık belgeleri eksiksiz olarak alıcıya teslim edilir. Talep edilmesi halinde deneme binişi ve bağımsız veteriner muayenesi için randevu oluşturulabilir.";

export const productMiniCards = [
  { title: "Sağlık Garantisi", description: "Bağımsız veteriner raporuyla desteklenen tam sağlık garantisi." },
  { title: "Eğitim Geçmişi", description: "Uzman eğitmenler eşliğinde tamamlanmış düzenli eğitim programı." },
  { title: "Güvenli Teslimat", description: "Türkiye genelinde sigortalı ve konforlu nakliye imkânı." },
];

export const productIconRow = ["Sağlık", "Huy", "Beslenme", "Bakım"];

export const productChecklist = [
  "Satın alma öncesi bağımsız bir veteriner tarafından detaylı sağlık muayenesi yapılmasını öneririz.",
  "Deneme biniş talepleri için önceden randevu alınması gerekmektedir.",
  "Tüm belgeler ve soy kütüğü kayıtları teslimat sırasında alıcıya eksiksiz olarak sunulur.",
];

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
};

export const services: Service[] = [
  {
    slug: "at-alim-danismanligi",
    title: "At Alım Danışmanlığı",
    excerpt:
      "İhtiyacınıza, bütçenize ve deneyim seviyenize en uygun atı bulmanız için baştan sona danışmanlık sağlıyoruz. Görüşme, deneme biniş ve veteriner kontrolü sürecinin tamamında yanınızdayız.",
  },
  {
    slug: "satis-surec-yonetimi",
    title: "Satış Süreci Yönetimi",
    excerpt:
      "Atınızı doğru alıcıyla buluşturmak için ilan hazırlığından pazarlığa kadar tüm süreci sizin adınıza yönetiyoruz. Şeffaf ve güvenilir bir satış deneyimi sunuyoruz.",
  },
  {
    slug: "veteriner-kontrol-hizmeti",
    title: "Veteriner Kontrol Hizmeti",
    excerpt:
      "Alım öncesi bağımsız veteriner muayenesi organize ederek atın sağlık durumu hakkında net ve güvenilir bilgi edinmenizi sağlıyoruz.",
  },
  {
    slug: "uluslararasi-tedarik",
    title: "Uluslararası Tedarik",
    excerpt:
      "İspanya ve Portekiz başta olmak üzere yurt dışındaki güvenilir yetiştiricilerden kaliteli atlar temin ediyor, tüm ithalat sürecini sizin için yönetiyoruz.",
  },
];

const serviceParaFull =
  "Bu hizmetimizde, sürecin her aşamasında yanınızda olacak deneyimli bir ekiple çalışırsınız. İlk görüşmeden başlayarak ihtiyaçlarınızı, bütçenizi ve beklentilerinizi birlikte netleştiriyor, size en uygun çözümü sunuyoruz. Alanında uzman veterinerler ve eğitmenlerle iş birliği yaparak her adımda güvenilir ve şeffaf bir hizmet sağlıyoruz.";

const serviceParaSecond =
  "Süreç boyunca sizi bilgilendirmeye ve tüm sorularınızı yanıtlamaya özen gösteriyoruz. Gerekli belgelerin hazırlanmasından nakliye organizasyonuna kadar her detayı titizlikle takip ediyoruz, böylece siz sadece doğru kararı vermeye odaklanabilirsiniz.";

const serviceParaThird =
  "Yıllar içinde edindiğimiz tecrübe ve geniş iş birliği ağımız sayesinde, hem alım hem satım süreçlerinde müşterilerimize en yüksek memnuniyeti sunmayı hedefliyoruz. Sorularınız için bizimle iletişime geçmekten çekinmeyin.";

export const serviceDetailParagraphs = [serviceParaFull, serviceParaSecond, serviceParaThird];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
};

export const blogExcerptText =
  "Atçılıkla ilgilenen herkes için faydalı bilgiler, pratik öneriler ve sektörden güncel gelişmeleri bu yazımızda bir araya getirdik. Konuyla ilgili merak edilen detaylara birlikte göz atalım...";

export const blogPosts: BlogPost[] = [
  { slug: "atlarda-dogru-beslenme-rehberi", title: "Atlarda Doğru Beslenme Rehberi", date: "2025-01-28", tags: ["beslenme", "bakım", "sağlık"] },
  { slug: "dresaj-egitimine-baslarken", title: "Dresaj Eğitimine Başlarken Bilmeniz Gerekenler", date: "2025-01-28", tags: ["eğitim", "dresaj"] },
  { slug: "yeni-at-alirken-dikkat-edilmesi-gerekenler", title: "Yeni Bir At Alırken Dikkat Edilmesi Gerekenler", date: "2025-01-28", tags: ["satın alma", "rehber"] },
  { slug: "kis-aylarinda-at-bakimi", title: "Kış Aylarında At Bakımı Nasıl Yapılır", date: "2025-01-28", tags: ["bakım", "sağlık"] },
  { slug: "atlarda-saglik-kontrolu-sikligi", title: "Atlarda Sağlık Kontrolü Ne Sıklıkla Yapılmalı", date: "2025-01-28", tags: ["sağlık", "veteriner", "bakım"] },
  { slug: "antrenman-sonrasi-dinlenme", title: "Antrenman Sonrası Atların Dinlendirilmesi", date: "2025-01-28", tags: ["eğitim"] },
  { slug: "dogru-eyer-secimi", title: "Doğru Eyer Seçimi Nasıl Yapılır", date: "2025-01-28", tags: ["ekipman"] },
  { slug: "yaris-atlari-icin-kondisyon-programi", title: "Yarış Atları İçin Kondisyon Programı", date: "2025-01-28", tags: ["eğitim", "sağlık"] },
  { slug: "at-nakliyesinde-dikkat-edilmesi-gerekenler", title: "At Nakliyesinde Dikkat Edilmesi Gerekenler", date: "2025-01-28", tags: ["nakliye", "rehber"] },
  { slug: "tay-egitimine-ne-zaman-baslanmali", title: "Tay Eğitimine Ne Zaman Başlanmalı", date: "2025-01-28", tags: ["eğitim", "tay"] },
];

export const blogPostBody = [
  "Atların sağlıklı ve mutlu bir yaşam sürmesi için düzenli bakım, dengeli beslenme ve doğru eğitim programı büyük önem taşır. Her atın ihtiyaçları yaşına, ırkına ve aktivite düzeyine göre değişiklik gösterir; bu nedenle bireysel bir bakım planı oluşturmak, uzun vadede hem sağlık hem de performans açısından fark yaratır. Deneyimli bir veteriner ve eğitmenle düzenli iş birliği yapmak, olası sorunların erken teşhis edilmesini sağlar.",
  "Ayrıca atın yaşadığı ortamın konforu, düzenli egzersiz imkânı ve sosyal etkileşim de göz ardı edilmemesi gereken unsurlardır. Küçük değişikliklerin bile zamanla atın genel refahı üzerinde büyük etkisi olabileceğini unutmamak gerekir. Bu yazıda paylaştığımız öneriler, gerek yeni at sahipleri gerekse deneyimli biniciler için faydalı bir başlangıç noktası olacaktır.",
];

export const blogCategories = ["beslenme", "eğitim", "sağlık", "bakım", "rehber"];

export const author = {
  name: "Ahmet Yıldız",
  role: "blog yazarı, uzman",
  image: "/images/author.jpg",
};

export const faqIntro = [
  "Aşağıda müşterilerimizin en sık sorduğu soruları ve yanıtlarını bulabilirsiniz. Aradığınız cevabı bulamazsanız, iletişim formunu doldurarak bize doğrudan ulaşabilirsiniz.",
  "Tüm atlarımız satış öncesinde detaylı bir sağlık kontrolünden geçirilir ve soy kütüğü kayıtları eksiksiz olarak hazırlanır.",
  "Talep etmeniz halinde deneme biniş ve bağımsız veteriner muayenesi için sizin için uygun bir randevu planlarız.",
];

export const faqItems = [
  {
    q: "Bir at satın almak için hangi belgeler gereklidir?",
    a: "Satın alma sürecinde kimlik bilgileriniz ve gerekli sözleşme evrakları yeterlidir. Atın soy kütüğü, sağlık raporu ve aşı kayıtları tarafımızca hazırlanarak teslimat sırasında size sunulur.",
  },
  {
    q: "Satın almadan önce atı deneyebilir miyim?",
    a: "Elbette. Randevu oluşturarak seçtiğiniz atla deneme binişi yapabilir, uzman ekibimiz eşliğinde atın hareketlerini ve mizacını yakından tanıyabilirsiniz.",
  },
  {
    q: "Yurt dışından at temin ediyor musunuz?",
    a: "Evet, başta İspanya ve Portekiz olmak üzere güvenilir yetiştiricilerle çalışıyor, uluslararası tedarik ve ithalat sürecinin tamamını sizin adınıza yönetiyoruz.",
  },
  {
    q: "Nakliye hizmeti sunuyor musunuz?",
    a: "Türkiye genelinde ve yurt dışından sigortalı, konforlu nakliye organizasyonu sağlıyoruz. Atınızın güvenli bir şekilde yeni yuvasına ulaşmasını garanti ediyoruz.",
  },
  {
    q: "Satın almadan önce veteriner kontrolü yapılıyor mu?",
    a: "Talep etmeniz halinde bağımsız bir veteriner tarafından detaylı bir sağlık muayenesi organize ediyoruz, böylece güvenle karar verebilirsiniz.",
  },
  {
    q: "Atımı satmak istiyorum, nasıl bir süreç izleniyor?",
    a: "İlk görüşmede atınız hakkında bilgi alıyor, ardından ilan hazırlığı, potansiyel alıcılarla görüşme ve satış sürecinin tamamını sizin adınıza yönetiyoruz.",
  },
  {
    q: "Ödeme seçenekleri nelerdir?",
    a: "Banka havalesi ve taksitli ödeme seçenekleri sunuyoruz. Detaylı bilgi için satış danışmanlarımızla iletişime geçebilirsiniz.",
  },
  {
    q: "Satış sonrası destek veriyor musunuz?",
    a: "Evet, satış sonrasında da atın adaptasyon süreciyle ilgili sorularınızda ve ihtiyaç duyduğunuz danışmanlık konularında yanınızdayız.",
  },
  {
    q: "Randevu almadan çiftliği ziyaret edebilir miyim?",
    a: "Daha iyi bir deneyim yaşamanız için ziyaretlerinizi önceden randevu alarak planlamanızı öneririz. İletişim formu üzerinden bizimle kolayca iletişime geçebilirsiniz.",
  },
];

export const partners = [
  "Adidas", "Aldi", "Burger King", "CBA", "Dell", "KFC", "Lidl", "McDonald's",
  "Netflix", "Philips", "Pizza Hut", "Samsung", "Tesco", "Viber", "Wendy's",
];

export const teamMembers = [
  { name: "Ayşe Kaya", email: "ornek@domain.com", bio: "Müşteri ilişkileri ve satış süreçlerinden sorumludur." },
  { name: "Mehmet Demir", email: "ornek@domain.com", bio: "At eğitimi ve antrenman programlarını yönetir." },
  { name: "Elif Şahin", email: "ornek@domain.com", bio: "Veteriner kontrol süreçlerinin koordinasyonunu sağlar." },
  { name: "Can Öztürk", email: "ornek@domain.com", bio: "Uluslararası tedarik ve nakliye organizasyonundan sorumludur." },
];

export const aboutIntro = [
  "Atlara olan tutkumuz 25 yılı aşkın bir süredir hayatımıza yön veriyor. Bu yolculuk, küçük bir çocukken bir panayırda ilk kez at sırtına oturduğumuz o günden bugüne, sevgi ve saygıyla büyüyerek devam etti. Yıllar içinde yarış biniciliğinden yetiştiriciliğe, eğitmenlikten danışmanlığa kadar birçok alanda deneyim kazandık.",
  "Bugün, edindiğimiz bu deneyimi müşterilerimizle paylaşarak her birinin ihtiyacına en uygun atı bulmasına yardımcı oluyoruz. Titizlik, sabır ve atın bireysel özelliklerine gösterilen özenin, kaliteli hizmetin temelini oluşturduğuna inanıyoruz.",
  "Uzun vadeli hedefimiz, hem alıcılarımıza hem de atlarımıza en doğru eşleşmeyi sunarak sektörde güvenilir bir isim olmaya devam etmek.",
];

export const aboutNumbersIntro =
  "Yıllar içinde edindiğimiz tecrübeyi ve müşterilerimizin bize duyduğu güveni birkaç rakamla özetlemek gerekirse:";

export const homeHorsesIntro =
  "Atlara olan tutkum 25 yılı aşkın bir süredir hayatıma yön veriyor. Atlarla ilk tanışmam çocukluğuma dayanıyor: sadece 2 yaşındayken bir panayırda ilk kez at sırtına oturmuştum. Bu deneyim benim için belirleyici oldu ve o günden bu yana içimde taşıdığım sevgi ve saygının tohumlarını attı. 10 yaşımda ilk midillimi edindim ve o günden sonra hiç durmadım. Binicilik benim için sadece bir hobi değil, bir meslek ve yaşam biçimi haline geldi. Yarış binicisi olarak faaliyet gösteriyor; aynı zamanda at sahibi, yetiştirici, antrenör ve eğitmen olarak da çalışıyorum. Şu anda orta seviyeye kadar at eğitimi veriyorum, kendimi sürekli geliştirmeye devam ediyor ve uzun vadede üst düzey at ve binici eğitimine ulaşmayı hedefliyorum. Kaliteli işin temelinin özen, sabır ve atın bireysel özelliklerinin azami ölçüde göz önünde bulundurulmasından geçtiğine inanıyorum.";

export const homeWhatWeDoText =
  "Bizim için en önemli şey, atların kendilerine en uygun sahiplere kavuşması ve sizin de gerçekten size uygun, en iyi atı bulmanızdır. Türkiye'de alanında deneyimli uzmanlarla birlikte çalışarak, ilk ilgi gösteriminden teslimata kadar tüm alım-satım sürecini yüksek standartlarda yürütüyoruz. Beğendiğiniz bir at olduğunda, tüm işlemleri sizin adınıza üstleniyoruz; böylece siz sadece doğru seçimi yapmanın keyfine odaklanabilirsiniz. Atınızı satmak istediğinizde de aynı özen ve profesyonellikle yanınızdayız. Amacımız, kişisel deneyimimize ve atlar hakkındaki derin bilgimize dayanan, dürüst, şeffaf ve kaliteli bir alım-satım süreci sunmaktır. Uluslararası bağlantılarımız sayesinde İspanya ve Portekiz'den de kaliteli atlar sunuyoruz. Seçtiğiniz atı bizzat deneme imkânınız yoksa, sizin adınıza yerinde inceleme yapıyor, veteriner kontrollerini ve nakliyeyi eksiksiz organize ediyoruz. İster satmak ister satın almak isteyin, bize güvenle başvurabilirsiniz; amacımız sizin en doğru kararı vermeniz ve atın da en uygun yuvaya kavuşmasıdır.";

export const homeServicesIntro =
  "At dünyasını yakından tanıyoruz; bu sayede yeni atınızı bulmak, satın almak veya satmak, ilk görüşmeden atın yeni yuvasına ulaştığı güne kadar anlaşılır, bilgilendirici ve tamamen şeffaf bir deneyime dönüşüyor. Sunduğumuz hizmetlerle sürecin her aşamasında yanınızdayız.";

export const homeServicesOutro =
  "Sorularınız mı var? Deneyimli ekibimiz size yardımcı olmaktan mutluluk duyar. Hizmetlerimiz hakkında daha fazla bilgi almak için iletişime geçin.";

export const aboutGalleryImages = ["/images/gallery1.jpg", "/images/gallery2.jpg", "/images/gallery3.jpg", "/images/gallery4.jpg"];

export const aboutPartnersIntro =
  "Yıllar içinde kurduğumuz güçlü iş birlikleri sayesinde müşterilerimize daha kaliteli ve güvenilir bir hizmet sunabiliyoruz. Bugüne kadar birlikte çalışma fırsatı bulduğumuz kurumlardan bazıları:";
