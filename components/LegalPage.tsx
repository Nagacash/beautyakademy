import React from 'react';
import { motion } from 'framer-motion';

interface LegalPageProps {
  type: 'privacy' | 'tos' | 'impressum';
  onBack: () => void;
  theme: 'light' | 'dark';
}

const LegalPage: React.FC<LegalPageProps> = ({ type, onBack, theme }) => {
  const content = {
    privacy: {
      title: 'Datenschutz',
      subtitle: 'Sicherheit Ihrer Daten im digitalen Zeitalter',
      text: [
        'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.',
        'Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
        'Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.'
      ]
    },
    tos: {
      title: 'AGB',
      subtitle: 'Allgemeine Geschäftsbedingungen der BeautyAkademy',
      text: [
        'Geltungsbereich: Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die zwischen der BeautyAkademy und ihren Kunden abgeschlossen werden. Mit der Anmeldung zu einem Modul oder Mentoring erkennt der Kunde diese Bedingungen an.',
        'Zahlungsbedingungen: Die Kursgebühren sind nach Rechnungserhalt ohne Abzug fällig. Eine Teilnahme ist nur nach vollständiger Bezahlung möglich. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.',
        'Stornierungen: Abmeldungen müssen schriftlich erfolgen. Bis 30 Tage vor Kursbeginn wird eine Bearbeitungsgebühr fällig. Danach ist die volle Kursgebühr zu entrichten, sofern kein Ersatzteilnehmer gestellt wird.'
      ]
    },
    impressum: {
      title: 'Impressum',
      subtitle: 'Angaben gemäß § 5 TMG',
      text: [
        'BeautyAkademy Excellence Center\nHamburg-Bergedorf\nDeutschland',
        'Vertreten durch:\nSonja Ackermann & Annette Fascher-Wendlandt',
        'Kontakt:\nTelefon: +49 (0) 176 12345678\nE-Mail: office@beautyakademy.com',
        'Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:\nDE 123 456 789',
        'Zuständige Kammer:\nGesundheitsamt Hamburg'
      ]
    }
  }[type];

  const isLight = theme === 'light';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative min-h-screen py-48 px-6 lg:px-24 ${isLight ? 'bg-[#FAFAF9]' : 'bg-[#050505]'}`}
    >
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <button 
          onClick={onBack}
          className="vogue-serif text-[10px] tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase flex items-center group"
        >
          <span className="mr-4 group-hover:-translate-x-2 transition-transform">←</span> Zurück
        </button>
      </nav>

      <div className="max-w-4xl mx-auto">
        <div className="mb-24 space-y-8">
          <h4 className="vogue-serif text-[10px] font-black tracking-[0.6em] text-[#CA8A04] uppercase">Rechtliches</h4>
          <h1 className={`vogue-serif text-5xl md:text-8xl font-black italic tracking-tighter leading-none uppercase ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>
            {content.title}
          </h1>
          <p className="vogue-serif text-xl md:text-2xl text-[#CA8A04] italic tracking-tight">{content.subtitle}</p>
        </div>

        <div className={`p-8 md:p-16 rounded-[40px] border ${isLight ? 'bg-white border-black/5' : 'bg-[#1C1917]/80 border-white/5 backdrop-blur-3xl'} shadow-2xl`}>
          <div className="space-y-12">
            {content.text.map((paragraph, i) => (
              <p key={i} className={`text-lg font-light leading-relaxed whitespace-pre-line ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-[#CA8A04]/20 flex flex-col md:flex-row justify-between gap-12">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#CA8A04] font-black mb-4">Support & Kontakt</p>
            <p className={`text-sm ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>Haben Sie Fragen zu unseren Inhalten? Wir sind jederzeit für Sie da.</p>
          </div>
          <button className="px-12 py-4 btn-money text-[11px] tracking-[0.3em] uppercase rounded-full">Concierge Service</button>
        </div>
      </div>
    </motion.div>
  );
};

export default LegalPage;