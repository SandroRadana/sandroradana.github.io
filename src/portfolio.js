/* Portfolio content for Sandro Romaddana */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: false
};

const greeting = {
  username: "Sandro Romaddana",
  title: "Halo, Saya Sandro",
  subTitle: emoji(
    "Fresh graduate Ilmu Komunikasi Universitas Muhammadiyah Malang dengan pengalaman praktis dalam Public Relations, Crisis Handling, Event Management, content strategy, dan komunikasi pemasaran digital. Terbiasa melakukan riset kebutuhan audiens, menyusun konten strategis, serta berkoordinasi dengan stakeholder untuk memastikan kelancaran proyek."
  ),
  resumeLink: require("./containers/greeting/CV ATS Sandro Romaddana.pdf"),
  resumeFileName: "CV ATS Sandro Romaddana.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sandro-romaddana/",
  gmail: "sandroromadana@gmail.com",
  facebook: "https://www.facebook.com/share/16Y7YpZ8vc/",
  instagram: "https://www.instagram.com/sandroromaddana/",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Public Relations, Event Management, Marketing Communication, Media, dan Brand Activation.",
  skills: [
    emoji("⚡ Event planning, riset audiens, konsep acara, dan eksekusi."),
    emoji("⚡ Strategi komunikasi, crisis handling, dan mitigasi risiko."),
    emoji("⚡ Content strategy untuk media sosial, publikasi, dan promosi."),
    emoji("⚡ Koordinasi stakeholder, talent, dekorasi, publikasi, dan dokumentasi.")
  ],
  softwareSkills: [
    {
      skillName: "Event Planning & Execution",
      fontAwesomeClassname: "fas fa-calendar-check"
    },
    {
      skillName: "Talent & Stakeholder Coordination",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "Community Engagement",
      fontAwesomeClassname: "fas fa-hands-helping"
    },
    {
      skillName: "Public Relations & Media Handling",
      fontAwesomeClassname: "fas fa-newspaper"
    },
    {
      skillName: "Content Strategy & Social Media",
      fontAwesomeClassname: "fas fa-hashtag"
    },
    {
      skillName: "Crisis Handling",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Canva",
      fontAwesomeClassname: "fas fa-palette"
    },
    {
      skillName: "Adobe Illustrator",
      fontAwesomeClassname: "fas fa-pen-nib"
    },
    {
      skillName: "Adobe Photoshop",
      fontAwesomeClassname: "fas fa-image"
    },
    {
      skillName: "CapCut",
      fontAwesomeClassname: "fas fa-video"
    },
    {
      skillName: "Microsoft Office",
      fontAwesomeClassname: "fas fa-file-alt"
    },
    {
      skillName: "Problem Solving & Time Management",
      fontAwesomeClassname: "fas fa-clock"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universitas Muhammadiyah Malang",
      logo: require("./assets/images/Logo UMM.png"),
      subHeader: "Gelar Sarjana, Ilmu Komunikasi — IPK 3,35/4.00",
      duration: "Oktober 2020 - Agustus 2024",
      desc: "Mempelajari teori dan praktik komunikasi, public relations, komunikasi pemasaran digital, media sosial, serta manajemen komunikasi.",
      descBullets: [
        "Mengembangkan keterampilan analisis media, penulisan naskah, riset komunikasi, dan strategi kampanye.",
        "Melaksanakan proyek praktikum dalam pembuatan konten kreatif, event management, dan penelitian akademik komunikasi.",
        "Menyelesaikan penelitian akademik tentang komunikasi pemasaran digital dan brand awareness pada startup pengelolaan sampah."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Public Relations",
      progressPercentage: "90%"
    },
    {
      Stack: "Event Management",
      progressPercentage: "85%"
    },
    {
      Stack: "Content Strategy",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Event Organizer - Praktikum",
      company: "Bank Sampah Malang",
      companylogo: require("./assets/images/LOGO BSM.jpeg"),
      date: "Februari 2023 - Juni 2023",
      desc: "Merancang dan melaksanakan Event Great Waste Solution secara menyeluruh, mulai dari riset klien dan audiens, pengembangan konsep, hingga koordinasi antar tim. Acara ini berhasil diliput oleh Jawapos.com dan BACAMALANG.COM.",
      descBullets: [
        "Melakukan riset audiens untuk menentukan konsep dan posisi acara.",
        "Mengelola seluruh pelaksanaan acara, termasuk perencanaan, jadwal, dan koordinasi tim.",
        "Berkoordinasi dengan talenta dari Putra Putri Kampus UMM, Miss Teen Star Jatim 2023, dan Miss Cyber Mall Malang 2022.",
        "Menyelaraskan tim dekorasi, publikasi, dan dokumentasi untuk menyelesaikan acara tepat waktu."
      ]
    },
    {
      role: "Public Relations Specialist - Praktikum",
      company: "Sosialoka Indonesia",
      companylogo: require("./assets/images/LOGO SOSIALOKA.png"),
      date: "September 2022 - Januari 2023",
      desc: "Terlibat dalam analisis krisis komunikasi dari brand nyata dan pengembangan proposal manajemen krisis yang dipresentasikan langsung kepada klien.",
      descBullets: [
        "Melakukan analisis mendalam terhadap 5 kasus krisis brand nyata: Heinz ABC, Arema, IDETimur, Cover Clearance, dan NOIS.",
        "Mengidentifikasi celah komunikasi dan potensi risiko reputasi dari setiap kasus krisis.",
        "Mengembangkan proposal manajemen krisis komprehensif yang mencakup key messages, strategi respons multi-channel, dan rencana mitigasi risiko terukur.",
        "Mempresentasikan rekomendasi strategis secara profesional kepada klien dan menghasilkan action plan yang siap diimplementasikan."
      ]
    },
    {
      role: "In-House Magazine Management - Praktikum",
      company: "BUMDes Amanah Karangsuko",
      companylogo: require("./assets/images/BUMDES AMANAH.jpg"),
      date: "Maret 2022 - Agustus 2022",
      desc: "Mengembangkan in-house magazine untuk meningkatkan aliran informasi dan keterlibatan internal organisasi.",
      descBullets: [
        "Melakukan analisis kebutuhan komunikasi internal sebagai dasar pengembangan majalah.",
        "Merancang struktur dan tata letak konten yang selaras dengan kebutuhan audiens organisasi.",
        "Berkolaborasi dengan anggota tim untuk memastikan pengiriman semua materi konten tepat waktu."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Selected Projects",
  subtitle:
    "Kumpulan proyek yang menunjukkan kemampuan saya dalam event management, public relations, crisis handling, publikasi, dan komunikasi pemasaran digital.",
  projects: [
    {
      image: require("./assets/images/Logo FKS.png"),
      projectName: "Festival Kreasi Sampah",
      projectDesc:
        "Event fashion show bersama Bank Sampah Malang yang mencakup riset audiens, konsep acara, koordinasi talent, koordinasi tim, publikasi, dokumentasi, dan pelaksanaan acara.",
      footerLink: [
        {
          name: "Proposal Kreatif",
          url: "https://www.canva.com/design/DAG41CdMkQc/BFUSxKkiY44Uy9rm-5OmJg/edit"
        },
        {
          name: "Laporan Pertanggungjawaban",
          url: "https://drive.google.com/file/d/1m0wmC7nAUiAykTBCn8UfnEyiEJBxJsGC/view?usp=sharing"
        },
        {
          name: "Artikel Tugumalang.id",
          url: "https://tugumalang.id/mahasiswa-prodi-ilmu-komunikasi-umm-ramaikan-acara-bank-sampah-malang-otr/"
        },
        {
          name: "Artikel Kabarpasti.com",
          url: "https://kabarpasti.com/antusias-masyarakat-ikuti-aksi-pilah-sampah-bersama-bsm-on-the-road-hingga-terkumpul-ratusan-sampah-botol-plastik-dalam-waktu-sekejap/"
        },
        {
          name: "Artikel Bacamalang.com",
          url: "https://bacamalang.com/great-waste-solution-event-kolaborasi-apik-untuk-solusi-pengelolaan-sampah/"
        },
        {
          name: "Artikel Jawapos.com",
          url: "https://www.jawapos.com/berita-sekitar-anda/011814237/festival-kreasi-sampah-upaya-tingkatkan-kesadaran-masyakarat"
        }
      ]
    },
    {
      image: require("./assets/images/LOGO SOSIALOKA.png"),
      projectName: "Crisis Management",
      projectDesc:
        "Analisis 5 studi kasus krisis dan penyusunan proposal manajemen krisis yang mencakup pesan utama, rencana komunikasi, mitigasi risiko, dan rekomendasi tindakan.",
      footerLink: [
        {
          name: "Project 1 HEINZ",
          url: "https://drive.google.com/file/d/19_9nN_i0eDg2MDew_zVrxr-XQmgkzGRf/view?usp=sharing"
        },
        {
          name: "Project 2 IDETimur",
          url: "https://drive.google.com/file/d/1TDQEEkBZOmmBBv_hqXq7EBW8I41n2D_h/view?usp=sharing"
        },
        {
          name: "Project 3 AREMA",
          url: "https://drive.google.com/file/d/1M1YNFyDpy12HVbn3Qq-y28OT7sJnx1qr/view?usp=sharing"
        },
        {
          name: "Project 4 NOIS",
          url: "https://drive.google.com/file/d/1M8Wuu5dtcyZw17PBqPSp5mB8qYd8K1gk/view?usp=sharing"
        },
        {
          name: "Project 5 Cover Clearance",
          url: "https://drive.google.com/file/d/1OD49QGQ0yGRJEMG8HjFJ9_22OCgaNW9q/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/Cover Dummy 2.png"),
      projectName: "Tirta Rhea In-House Magazine",
      projectDesc:
        "Proyek in-house magazine untuk BUMDes Amanah Karangsuko, mencakup riset kebutuhan komunikasi internal, struktur konten, layout, dan penyelesaian materi bersama tim.",
      footerLink: [
        {
          name: "Dummy In-House Magazine",
          url: "https://drive.google.com/file/d/1Dc-3YAVeiGd6cyRbbJB1xbw_dcpTa2lH/view?usp=sharing"
        },
        {
          name: "Proposal Kreatif",
          url: "https://drive.google.com/file/d/1wrMg2YHhKUZxi_xWOJjViW2yTCaZU-ml/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/Logo UMM.png"),
      projectName: "PMM Desa Torongrejo",
      projectDesc:
        "Program Pengabdian kepada Masyarakat oleh Mahasiswa sebagai divisi publikasi, desain, dan dokumentasi. Membuat konten publikasi, membantu UMKM desa mendesain label produk, dan mendukung sosialisasi digital marketing.",
      footerLink: [
        {
          name: "Artikel Ecoenzym",
          url: "https://www.kompasiana.com/sandroromaddana_3150255/652ffb16110fce761173f0d3/pmm-kelompok-42-mengubah-sampah-organik-menjadi-ecoenzym-bersama-kelompok-wanita-tani-kwt-desa-torongrejo"
        },
        {
          name: "Artikel Digital Marketing",
          url: "https://www.kompasiana.com/sandroromaddana_3150255/6523ab074cc2af131a210293/antusias-ibu-ibu-kwt-desa-torongrejo-mengikuti-sosialisasi-digital-marketing-yang-diadakan-mahasiswa-pmm-umm"
        }
      ]
    },
    {
      image: require("./assets/images/Logo UMM.png"),
      projectName: "Skripsi",
      projectDesc:
        "Penelitian tentang implementasi komunikasi pemasaran digital pada media sosial Instagram Ilitterless dalam membangun brand awareness sebagai startup pengelolaan sampah.",
      footerLink: [
        {
          name: "Naskah Skripsi",
          url: "https://drive.google.com/file/d/1FrUML2XrlV71otqwzzXWGA_iUH6Bv_ik/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Sertifikasi dan pencapaian yang mendukung kompetensi profesional saya.",
  achievementsCards: [
    {
      title: "ITP TOEFL",
      subtitle: "Centre of Language Improvement - ITP TOEFL Score 547",
      image: require("./assets/images/TOEFL LOGO.png"),
      imageAlt: "ITP TOEFL Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1O_AW1yEJKRu8FAHXlESMw4UNbi57-xpF/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Articles",
  subtitle: "Tulisan saya tentang kegiatan sosial, komunikasi, dan pemberdayaan masyarakat.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://www.kompasiana.com/sandroromaddana_3150255/652ffb16110fce761173f0d3/pmm-kelompok-42-mengubah-sampah-organik-menjadi-ecoenzym-bersama-kelompok-wanita-tani-kwt-desa-torongrejo",
      title:
        "PMM Kelompok 42 Mengubah Sampah Organik Menjadi Ecoenzym bersama Kelompok Wanita Tani Desa Torongrejo",
      description:
        "Artikel kegiatan pemberdayaan masyarakat terkait pengolahan sampah organik menjadi ecoenzym."
    },
    {
      url: "https://www.kompasiana.com/sandroromaddana_3150255/637ab9a34addee346063b802/muktamar-muhammadiyah-aisyiyah-ke-48-memajukan-bangsa",
      title: "Muktamar Muhammadiyah - Aisyiyah ke-48 Memajukan Bangsa",
      description:
        "Tulisan tentang kolaborasi dakwah, pendidikan, kemanusiaan, dan semangat membangun bangsa."
    },
    {
      url: "https://www.kompasiana.com/sandroromaddana_3150255/6523ab074cc2af131a210293/antusias-ibu-ibu-kwt-desa-torongrejo-mengikuti-sosialisasi-digital-marketing-yang-diadakan-mahasiswa-pmm-umm",
      title:
        "PMM UMM Kelompok 42 Mengadakan Sosialisasi Digital Marketing Bersama Ibu-Ibu KWT Desa Torongrejo",
      description:
        "Artikel edukasi pemasaran digital untuk mendukung kapasitas UMKM lokal."
    }
  ],
  display: true
};

const talkSection = {
  display: false
};

const podcastSection = {
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Unduh resume terbaru saya untuk melihat pengalaman dan kompetensi secara lebih lengkap.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  subtitle:
    "Terbuka untuk posisi Public Relations, Event Organizer, Marketing Communication, Media, Brand Activation, magang, dan kolaborasi proyek komunikasi.",
  number: "+62 85337729198",
  email_address: "sandroromadana@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
