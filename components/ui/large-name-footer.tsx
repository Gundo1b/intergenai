"use client";
import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { ColorChangingText } from "../ColorChangingText";
import { Globe, Check, ChevronDown, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

// Language Context
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Español', nativeName: 'Español' },
  { code: 'fr', name: 'Français', nativeName: 'Français' },
  { code: 'de', name: 'Deutsch', nativeName: 'Deutsch' },
  { code: 'pt', name: 'Português', nativeName: 'Português' },
  { code: 'it', name: 'Italiano', nativeName: 'Italiano' },
  { code: 'ar', name: 'العربية', nativeName: 'العربية' },
  { code: 'hi', name: 'हिंदी', nativeName: 'हिंदी' },
  { code: 'ja', name: '日本語', nativeName: '日本語' },
  { code: 'ko', name: '한국어', nativeName: '한국어' },
  { code: 'zh', name: '中文', nativeName: '中文' },
  { code: 'ru', name: 'Русский', nativeName: 'Русский' },
  { code: 'tr', name: 'Türkçe', nativeName: 'Türkçe' },
  { code: 'nl', name: 'Nederlands', nativeName: 'Nederlands' },
  { code: 'sv', name: 'Svenska', nativeName: 'Svenska' },
  { code: 'no', name: 'Norsk', nativeName: 'Norsk' },
  { code: 'da', name: 'Dansk', nativeName: 'Dansk' },
  { code: 'fi', name: 'Suomi', nativeName: 'Suomi' },
  { code: 'pl', name: 'Polski', nativeName: 'Polski' },
  { code: 'cs', name: 'Čeština', nativeName: 'Čeština' },
  { code: 'hu', name: 'Magyar', nativeName: 'Magyar' },
  { code: 'ro', name: 'Română', nativeName: 'Română' },
  { code: 'bg', name: 'Български', nativeName: 'Български' },
  { code: 'el', name: 'Ελληνικά', nativeName: 'Ελληνικά' },
  { code: 'he', name: 'עברית', nativeName: 'עברית' },
  { code: 'th', name: 'ไทย', nativeName: 'ไทย' },
  { code: 'vi', name: 'Tiếng Việt', nativeName: 'Tiếng Việt' },
  { code: 'id', name: 'Bahasa Indonesia', nativeName: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Bahasa Melayu', nativeName: 'Bahasa Melayu' },
  { code: 'sw', name: 'Kiswahili', nativeName: 'Kiswahili' }
];

// Translations object
const translations = {
  en: {
    footer: {
      builtBy: "Built by",
      team: "Integen Team",
      followUpdates: "Follow Updates On",
      socialMedia: {
        facebook: "Facebook",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
      },
      copyright: "All Rights Reserved.",
      product: "Product",
      aiChat: "AI Chat",
      aiImage: "AI Image",
      aiVideo: "AI Video",
      aiCode: "AI Code",
      pricing: "Pricing",
      resources: "Resources",
      documentation: "Documentation",
      apiReference: "API Reference",
      community: "Community",
      company: "Company",
      about: "About Us",
      blog: "Blog",
      careers: "Careers",
      contact: "Contacts",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms and Condition",
      language: "Language"
    }
  },
  es: {
    footer: {
      builtBy: "Construido por",
      team: "Equipo Integen",
      followUpdates: "Seguir Actualizaciones en",
      socialMedia: {
        facebook: "Facebook",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
      },
      copyright: "Todos los derechos reservados.",
      product: "Producto",
      aiChat: "Chat GEN IA",
      aiImage: "Imagen IA",
      aiVideo: "Video IA",
      aiCode: "Código IA",
      pricing: "Precios",
      resources: "Recursos",
      documentation: "Documentación",
      apiReference: "Referencia API",
      community: "Comunidad",
      company: "Empresa",
      about: "Acerca de",
      blog: "Blog",
      careers: "Carreras",
      contact: "Contacto",
      legal: "Legal",
      privacy: "Privacy and Policy",
      terms: "Terms and Condition",
      language: "Idioma"
    }
  },
  fr: {
    footer: {
      builtBy: "Construit par",
      team: "Équipe Integen",
      followUpdates: "Suivre les mises à jour sur",
      socialMedia: {
        facebook: "Facebook",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
      },
      copyright: "Tous droits réservés.",
      product: "Produit",
      aiChat: "Chat GEN IA",
      aiImage: "Image IA",
      aiVideo: "Vidéo IA",
      aiCode: "Code IA",
      pricing: "Tarifs",
      resources: "Ressources",
      documentation: "Documentation",
      apiReference: "Référence API",
      community: "Communauté",
      company: "Entreprise",
      about: "À propos",
      blog: "Blog",
      careers: "Carrières",
      contact: "Contact",
      legal: "Légal",
      privacy: "Privacy and Policy",
      terms: "Terms and Condition",
      language: "Langue"
    }
  },
  de: {
    footer: {
      builtBy: "Erstellt von",
      team: "Integen Team",
      followUpdates: "Updates folgen auf",
      socialMedia: {
        facebook: "Facebook",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
      },
      copyright: "Alle Rechte vorbehalten.",
      product: "Produkt",
      aiChat: "GEN KI Chat",
      aiImage: "KI Bild",
      aiVideo: "KI Video",
      aiCode: "KI Code",
      pricing: "Preise",
      resources: "Ressourcen",
      documentation: "Dokumentation",
      apiReference: "API Referenz",
      community: "Gemeinschaft",
      company: "Unternehmen",
      about: "Über uns",
      blog: "Blog",
      careers: "Karriere",
      contact: "Kontakt",
      legal: "Rechtliches",
      privacy: "Privacy and Policy",
      terms: "Terms and Condition",
      language: "Sprache"
    }
  },
  pt: {
    footer: {
      builtBy: "Construído por",
      team: "Equipe Integen",
      followUpdates: "Seguir Atualizações em",
      socialMedia: {
        facebook: "Facebook",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
      },
      copyright: "Todos os direitos reservados.",
      product: "Produto",
      aiChat: "Chat IA",
      aiImage: "Imagem IA",
      aiVideo: "Vídeo IA",
      aiCode: "Código IA",
      pricing: "Preços",
      resources: "Recursos",
      documentation: "Documentação",
      apiReference: "Referência API",
      community: "Comunidade",
      company: "Empresa",
      about: "Sobre",
      blog: "Blog",
      careers: "Carreiras",
      contact: "Contato",
      legal: "Legal",
      privacy: "Privacy and Policy",
      terms: "Terms and Condition",
      language: "Idioma"
    }
  },
  it: {
    footer: {
      builtBy: "Costruito da",
      team: "Team Integen",
      followUpdates: "Segui Aggiornamenti su",
      socialMedia: {
        facebook: "Facebook",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
      },
      copyright: "Tutti i diritti riservati.",
      product: "Prodotto",
      aiChat: "Chat GEN IA",
      aiImage: "Immagine IA",
      aiVideo: "Video IA",
      aiCode: "Codice IA",
      pricing: "Prezzi",
      resources: "Risorse",
      documentation: "Documentazione",
      apiReference: "Riferimento API",
      community: "Comunità",
      company: "Azienda",
      about: "Chi siamo",
      blog: "Blog",
      careers: "Carriere",
      contact: "Contatto",
      legal: "Legale",
      privacy: "Privacy and Policy",
      terms: "Terms and Condition",
      language: "Lingua"
    }
  },
  ar: {
    footer: {
      builtBy: "مبني بواسطة",
      team: "فريق إنتجين",
      followUpdates: "تابع التحديثات على",
      socialMedia: {
        facebook: "فيسبوك",
        linkedin: "لينكد إن",
        github: "جيت هاب",
        instagram: "إنستجرام"
      },
      copyright: "جميع الحقوق محفوظة.",
      product: "المنتج",
      aiChat: "دردشة GEN الذكية",
      aiImage: "الصورة الذكية",
      aiVideo: "الفيديو الذكي",
      aiCode: "الكود الذكي",
      pricing: "الأسعار",
      resources: "الموارد",
      documentation: "التوثيق",
      apiReference: "مرجع API",
      community: "المجتمع",
      company: "الشركة",
      about: "حولنا",
      blog: "المدونة",
      careers: "الوظائف",
      contact: "اتصل بنا",
      legal: "قانوني",
      privacy: "Privacy and Policy",
      terms: "Terms and Condition",
      language: "اللغة"
    }
  },
  hi: {
    footer: {
      builtBy: "द्वारा निर्मित",
      team: "इंटेजेन टीम",
      followUpdates: "अपडेट्स फॉलो करें",
      socialMedia: {
        facebook: "फेसबुक",
        linkedin: "लिंक्डइन",
        github: "गिटहब",
        instagram: "इंस्टाग्राम"
      },
      copyright: "सभी अधिकार सुरक्षित।",
      product: "उत्पाद",
      aiChat: "GEN AI चैट",
      aiImage: "एआई छवि",
      aiVideo: "एआई वीडियो",
      aiCode: "एआई कोड",
      pricing: "मूल्य निर्धारण",
      resources: "संसाधन",
      documentation: "दस्तावेज़ीकरण",
      apiReference: "API संदर्भ",
      community: "समुदाय",
      company: "कंपनी",
      about: "हमारे बारे में",
      blog: "ब्लॉग",
      careers: "करियर",
      contact: "संपर्क",
      legal: "कानूनी",
      privacy: "गोपनीयता",
      terms: "नियम",
      language: "भाषा"
    }
  },
  ja: {
    footer: {
      builtBy: "によって構築",
      team: "インテジェンチーム",
      followUpdates: "更新をフォロー",
      socialMedia: {
        facebook: "Facebook",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
      },
      copyright: "全著作権所有。",
      product: "製品",
      aiChat: "AIチャット",
      aiImage: "AI画像",
      aiVideo: "AI動画",
      aiCode: "AIコード",
      pricing: "料金",
      resources: "リソース",
      documentation: "ドキュメント",
      apiReference: "APIリファレンス",
      community: "コミュニティ",
      company: "会社",
      about: "会社概要",
      blog: "ブログ",
      careers: "採用情報",
      contact: "お問い合わせ",
      legal: "法的",
      privacy: "プライバシー",
      terms: "利用規約",
      language: "言語"
    }
  },
  ko: {
    footer: {
      builtBy: "에 의해 구축됨",
      team: "인테젠 팀",
      followUpdates: "업데이트 팔로우",
      socialMedia: {
        facebook: "페이스북",
        linkedin: "링크드인",
        github: "깃허브",
        instagram: "인스타그램"
      },
      copyright: "모든 권리 보유.",
      product: "제품",
      aiChat: "GEN AI 채팅",
      aiImage: "AI 이미지",
      aiVideo: "AI 비디오",
      aiCode: "AI 코드",
      pricing: "가격",
      resources: "리소스",
      documentation: "문서화",
      apiReference: "API 참조",
      community: "커뮤니티",
      company: "회사",
      about: "회사 소개",
      blog: "블로그",
      careers: "채용",
      contact: "문의하기",
      legal: "법적",
      privacy: "개인정보",
      terms: "약관",
      language: "언어"
    }
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && languages.find(lang => lang.code === savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (langCode: string) => {
    setLanguage(langCode);
    localStorage.setItem('language', langCode);
    document.documentElement.lang = langCode;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

function LargeNameFooter() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const sliderItems = [
    { name: "Academatrix", logo: "/splogos/Academatrix.png" },
    { name: "Cybluence", logo: "/splogos/Cybluence.png" },
    { name: "Decorexy", logo: "/splogos/Decorexy.png" },
    { name: "Finance Portal", logo: "/splogos/Finance Portal.png" },
    { name: "Icycon", logo: "/splogos/Icycon.png" },
    { name: "UMetha", logo: "/splogos/UMetha.png" },
    { name: "Viralitics", logo: "/splogos/Viralitics.png" }
  ];

  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Github, href: "#" },
    { Icon: Instagram, href: "#" },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <footer className="py-12 px-4 md:px-6 bg-white dark:bg-bg-dark border-t border-slate-200 dark:border-slate-800">
      {/* Infinite Slider Section */}


      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
          <div className="mb-8 lg:mb-0">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Logo />
            </a>

            <h1 className="text-slate-600 dark:text-gray-300 mt-4 text-sm md:text-base">
              {t('footer.builtBy')}{" "}
              <span className="text-brand-end dark:text-[#039ee4] font-semibold">
                {t('footer.team')}
              </span>
            </h1>

            <div className="mt-6 flex gap-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400 mt-5">
              © 2026 Integen AI. {t('footer.copyright')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            <div>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">{t('footer.product')}</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link to="/ai-chat" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">{t('footer.aiChat')}</Link>
                </li>
                <li>
                  <Link to="/ai-image" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">{t('footer.aiImage')}</Link>
                </li>
                <li>
                  <Link to="/ai-video" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">{t('footer.aiVideo')}</Link>
                </li>
                <li>
                  <Link to="/ai-coding" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">{t('footer.aiCode')}</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">{t('footer.pricing')}</Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">{t('footer.resources')}</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link to="/documentation" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    {t('footer.documentation')}
                  </Link>
                </li>
                <li>
                  <Link to="/api-reference" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    {t('footer.apiReference')}
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    {t('footer.community')}
                  </Link>
                </li>
              </ul>
            </div> */}
            <div>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">{t('footer.company')}</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link to="/about" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">{t('footer.about')}</Link>
                </li>
                <li>

                </li>
                <li>
                  <Link to="/blog" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">{t('footer.blog')}</Link>
                </li>
                <li>
                  <Link to="/careers" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">{t('footer.careers')}</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">{t('footer.contact')}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">{t('footer.legal')}</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    <Link to="/privacy" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">{t('footer.privacy')}</Link>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    <Link to="/terms" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:text-white transition-colors">{t('footer.terms')}</Link>
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative" ref={langMenuRef}>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">{t('footer.language')}</h3>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center justify-between w-full text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Globe size={20} />
                  {currentLanguage?.nativeName || 'English'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${langMenuOpen ? 'transform rotate-180' : ''}`} />
              </button>
              {langMenuOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-48 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="max-h-64 overflow-y-auto custom-scrollbar">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${language === lang.code ? 'text-brand-end font-medium' : 'text-slate-700 dark:text-slate-300'
                          }`}
                      >
                        <span>{lang.nativeName}</span>
                        {language === lang.code && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex mt-16 items-center justify-center overflow-hidden">
          <h1 className="text-center text-[12vw] md:text-[14vw] font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-400 dark:from-slate-800 dark:to-bg-dark select-none leading-none tracking-tighter opacity-50 dark:opacity-100">
            INTEGEN <ColorChangingText text="AI" />
          </h1>
        </div>
      </div>
    </footer>
  );
}

export { LargeNameFooter };