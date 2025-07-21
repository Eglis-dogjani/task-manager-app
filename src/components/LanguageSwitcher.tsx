import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


type LanguageOption = {
  code: string;
  label: string;
  flag: string;
};

const flags: Record<string, string> = {
  en: 'https://flagcdn.com/gb.svg',
  it: 'https://flagcdn.com/it.svg',
  al: 'https://flagcdn.com/al.svg',
};

const languages: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '/flags/en.png' },
  { code: 'it', label: 'Italiano', flag: '/flags/it.png' },
  { code: 'al', label: 'Shqip', flag: '/flags/al.png' },
];


const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = (i18n.language?.split('-')[0] || 'en') as keyof typeof flags;
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

   return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        type="button"
        className="language-switcher-btn"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <img
          src={flags[currentLang]}
          alt={`${currentLang} flag`}
          className="language-switcher-flag"
        />
        <span className="language-switcher-label">{currentLang.toUpperCase()}</span>
        <span className={`language-switcher-arrow ${isOpen ? 'open' : ''}`} aria-hidden="true">
          ▼
        </span>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="language-switcher-dropdown"
          aria-activedescendant={`lang-${currentLang}`}
        >
          {languages.map(({ code, label }) => (
            <li
              key={code}
              id={`lang-${code}`}
              role="option"
              aria-selected={currentLang === code}
              tabIndex={0}
              className={`language-switcher-item ${
                currentLang === code ? 'selected' : ''
              }`}
              onClick={() => handleLanguageChange(code)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleLanguageChange(code);
                }
              }}
            >
              <img
                src={flags[code]}
                alt={`${label} flag`}
                className="language-switcher-flag"
              />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;