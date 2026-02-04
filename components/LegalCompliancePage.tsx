import React from 'react';
import { motion } from 'framer-motion';

interface LegalCompliancePageProps {
  onBack: () => void;
  theme: 'light' | 'dark';
}

const LegalCompliancePage: React.FC<LegalCompliancePageProps> = ({ onBack, theme }) => {
  const isLight = theme === 'light';
  const accentColor = '#D9B16F';

  const dataSubjectRights = [
    {
      article: 'Art. 15',
      title: 'Auskunftsrecht',
      description: 'Sie haben das Recht, eine Bestätigung zu erhalten, ob personenbezogene Daten verarbeitet werden, und Zugang zu diesen Daten zu erhalten.'
    },
    {
      article: 'Art. 16',
      title: 'Recht auf Berichtigung',
      description: 'Sie können die Berichtigung unrichtiger personenbezogener Daten verlangen.'
    },
    {
      article: 'Art. 17',
      title: 'Recht auf Löschung',
      description: 'Sie können die Löschung Ihrer Daten verlangen ("Recht auf Vergessenwerden").'
    },
    {
      article: 'Art. 18',
      title: 'Recht auf Einschränkung',
      description: 'Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.'
    },
    {
      article: 'Art. 20',
      title: 'Recht auf Datenübertragbarkeit',
      description: 'Sie haben das Recht, Ihre Daten in einem strukturierten Format zu erhalten.'
    },
    {
      article: 'Art. 21',
      title: 'Widerspruchsrecht',
      description: 'Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen.'
    }
  ];

  const legalBases = [
    { basis: 'Einwilligung', description: 'Freiwillig, spezifisch und informiert erteilt' },
    { basis: 'Vertragserfüllung', description: 'Notwendig zur Durchführung eines Vertrags' },
    { basis: 'Rechtliche Verpflichtung', description: 'Gesetzlich vorgeschrieben' },
    { basis: 'Berechtigtes Interesse', description: 'Nach Interessenabwägung zulässig' }
  ];

  const dataCategories = [
    { category: 'Kontaktdaten', examples: 'Name, E-Mail, Telefon', protection: 'Standard' },
    { category: 'Buchungsdaten', examples: 'Kurstermine, Zahlungen', protection: 'Standard' },
    { category: 'Gesundheitsdaten', examples: 'Zertifizierungen, Qualifikationen', protection: 'Erhöht (Art. 9)' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative min-h-screen py-32 md:py-48 px-6 lg:px-24 ${isLight ? 'bg-[#FAFAF9]' : 'bg-[#050505]'}`}
    >
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <button
          onClick={onBack}
          className="vogue-serif text-[10px] tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase flex items-center group"
        >
          <span className="mr-4 group-hover:-translate-x-2 transition-transform">←</span> Zurück
        </button>
      </nav>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24 space-y-6 md:space-y-8">
          <h4 className="text-[10px] md:text-[11px] font-black tracking-[0.6em] uppercase" style={{ color: accentColor }}>
            DSGVO Konformität
          </h4>
          <h1 className={`font-black italic tracking-tighter leading-none uppercase text-4xl md:text-6xl lg:text-8xl ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>
            Legal &<br />Compliance
          </h1>
          <p className="text-lg md:text-xl italic tracking-tight" style={{ color: accentColor }}>
            Datenschutz nach höchsten europäischen Standards
          </p>
        </div>

        <div className={`p-6 md:p-12 lg:p-16 rounded-[32px] md:rounded-[40px] border mb-8 md:mb-12 ${isLight ? 'bg-white border-black/5' : 'bg-[#1C1917]/80 border-white/5 backdrop-blur-3xl'} shadow-2xl`}>
          <h2 className={`text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 md:mb-8 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>
            Ihre Datenschutzrechte
          </h2>
          <p className={`text-base md:text-lg font-light mb-8 md:mb-12 ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>
            Nach der DSGVO haben Sie umfassende Rechte bezüglich Ihrer personenbezogenen Daten. Wir bearbeiten alle Anfragen innerhalb von 30 Tagen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {dataSubjectRights.map((right, i) => (
              <motion.div
                key={right.article}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-5 md:p-6 rounded-2xl md:rounded-3xl border ${isLight ? 'bg-[#FAFAF9] border-black/5' : 'bg-black/20 border-white/5'}`}
              >
                <span className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: accentColor }}>
                  {right.article}
                </span>
                <h3 className={`text-base md:text-lg font-bold mt-2 mb-3 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>
                  {right.title}
                </h3>
                <p className={`text-sm font-light leading-relaxed ${isLight ? 'text-[#78716C]' : 'text-white/40'}`}>
                  {right.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className={`p-6 md:p-12 rounded-[32px] md:rounded-[40px] border ${isLight ? 'bg-white border-black/5' : 'bg-[#1C1917]/80 border-white/5 backdrop-blur-3xl'} shadow-2xl`}>
            <h2 className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-6 md:mb-8 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>
              Rechtsgrundlagen (Art. 6)
            </h2>
            <div className="space-y-4">
              {legalBases.map((item, i) => (
                <div key={i} className={`p-4 rounded-xl border ${isLight ? 'border-black/5' : 'border-white/5'}`}>
                  <span className="text-sm font-bold" style={{ color: accentColor }}>{item.basis}</span>
                  <p className={`text-sm font-light mt-1 ${isLight ? 'text-[#78716C]' : 'text-white/40'}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-6 md:p-12 rounded-[32px] md:rounded-[40px] border ${isLight ? 'bg-white border-black/5' : 'bg-[#1C1917]/80 border-white/5 backdrop-blur-3xl'} shadow-2xl`}>
            <h2 className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-6 md:mb-8 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>
              Datenkategorien
            </h2>
            <div className="space-y-4">
              {dataCategories.map((item, i) => (
                <div key={i} className={`p-4 rounded-xl border ${isLight ? 'border-black/5' : 'border-white/5'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-sm font-bold ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>{item.category}</span>
                    <span className="text-[10px] font-black tracking-wider px-2 py-1 rounded-full" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                      {item.protection}
                    </span>
                  </div>
                  <p className={`text-sm font-light ${isLight ? 'text-[#78716C]' : 'text-white/40'}`}>
                    {item.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`p-6 md:p-12 lg:p-16 rounded-[32px] md:rounded-[40px] border mb-8 md:mb-12 ${isLight ? 'bg-white border-black/5' : 'bg-[#1C1917]/80 border-white/5 backdrop-blur-3xl'} shadow-2xl`}>
          <h2 className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-6 md:mb-8 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>
            Einwilligungsmanagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className={`p-5 md:p-6 rounded-2xl border ${isLight ? 'bg-[#FAFAF9] border-black/5' : 'bg-black/20 border-white/5'}`}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${accentColor}20` }}>
                <span style={{ color: accentColor }}>✓</span>
              </div>
              <h3 className={`text-base font-bold mb-2 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>Notwendige Cookies</h3>
              <p className={`text-sm font-light ${isLight ? 'text-[#78716C]' : 'text-white/40'}`}>
                Erforderlich für den Betrieb der Website. Können nicht deaktiviert werden.
              </p>
            </div>
            <div className={`p-5 md:p-6 rounded-2xl border ${isLight ? 'bg-[#FAFAF9] border-black/5' : 'bg-black/20 border-white/5'}`}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${accentColor}20` }}>
                <span style={{ color: accentColor }}>📊</span>
              </div>
              <h3 className={`text-base font-bold mb-2 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>Analytik</h3>
              <p className={`text-sm font-light ${isLight ? 'text-[#78716C]' : 'text-white/40'}`}>
                Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
              </p>
            </div>
            <div className={`p-5 md:p-6 rounded-2xl border ${isLight ? 'bg-[#FAFAF9] border-black/5' : 'bg-black/20 border-white/5'}`}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${accentColor}20` }}>
                <span style={{ color: accentColor }}>🎯</span>
              </div>
              <h3 className={`text-base font-bold mb-2 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>Marketing</h3>
              <p className={`text-sm font-light ${isLight ? 'text-[#78716C]' : 'text-white/40'}`}>
                Personalisierte Werbung basierend auf Ihren Interessen.
              </p>
            </div>
          </div>
        </div>

        <div className={`p-6 md:p-12 lg:p-16 rounded-[32px] md:rounded-[40px] border mb-8 md:mb-12 ${isLight ? 'bg-white border-black/5' : 'bg-[#1C1917]/80 border-white/5 backdrop-blur-3xl'} shadow-2xl`}>
          <h2 className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-6 md:mb-8 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>
            Datenspeicherung & Aufbewahrung
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className={`border-b ${isLight ? 'border-black/10' : 'border-white/10'}`}>
                  <th className={`text-left py-4 text-sm font-bold ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>Datentyp</th>
                  <th className={`text-left py-4 text-sm font-bold ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>Aufbewahrungsfrist</th>
                  <th className={`text-left py-4 text-sm font-bold ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>Grundlage</th>
                </tr>
              </thead>
              <tbody>
                <tr className={`border-b ${isLight ? 'border-black/5' : 'border-white/5'}`}>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>Kontaktanfragen</td>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>6 Monate</td>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>Berechtigtes Interesse</td>
                </tr>
                <tr className={`border-b ${isLight ? 'border-black/5' : 'border-white/5'}`}>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>Buchungsdaten</td>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>10 Jahre</td>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>Gesetzliche Aufbewahrungspflicht</td>
                </tr>
                <tr className={`border-b ${isLight ? 'border-black/5' : 'border-white/5'}`}>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>Zertifizierungsnachweise</td>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>Unbegrenzt</td>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>Vertragserfüllung</td>
                </tr>
                <tr>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>Analysedaten</td>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>26 Monate</td>
                  <td className={`py-4 text-sm ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>Einwilligung</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={`p-6 md:p-12 lg:p-16 rounded-[32px] md:rounded-[40px] border ${isLight ? 'bg-gradient-to-br from-[#D9B16F]/10 to-transparent border-[#D9B16F]/20' : 'bg-gradient-to-br from-[#D9B16F]/5 to-transparent border-[#D9B16F]/10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
            <div>
              <h2 className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-3 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>
                Datenschutzanfrage stellen
              </h2>
              <p className={`text-sm md:text-base font-light ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>
                Für Auskunfts-, Löschungs- oder andere DSGVO-Anfragen kontaktieren Sie unseren Datenschutzbeauftragten.
              </p>
            </div>
            <a
              href="mailto:datenschutz@beautyakademy.com"
              className="w-full md:w-auto px-8 md:px-12 py-4 btn-money text-[11px] tracking-[0.3em] uppercase rounded-full text-center whitespace-nowrap"
            >
              DSAR Anfrage
            </a>
          </div>
          <div className={`mt-6 md:mt-8 pt-6 md:pt-8 border-t ${isLight ? 'border-black/10' : 'border-white/10'}`}>
            <p className={`text-xs md:text-sm ${isLight ? 'text-[#78716C]' : 'text-white/40'}`}>
              <strong>Datenschutzbeauftragter:</strong> datenschutz@beautyakademy.com<br />
              <strong>Antwortzeit:</strong> Innerhalb von 30 Tagen (max. 60 Tage bei komplexen Anfragen)
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[#D9B16F]/20">
          <p className={`text-[10px] md:text-xs tracking-[0.2em] uppercase ${isLight ? 'text-[#78716C]' : 'text-white/30'}`}>
            Letzte Aktualisierung: Februar 2026 · Alle Rechte vorbehalten · DSGVO-konform
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LegalCompliancePage;
