export default function LangSelector({ current, onChange }) {
  const langs = [
    { code: 'es', name: 'ES' },
    { code: 'en', name: 'EN' },
    { code: 'pt', name: 'PT' },
    { code: 'zh', name: '中文' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ar', name: 'العربية' },
    { code: 'fr', name: 'FR' },
    { code: 'ru', name: 'RU' },
    { code: 'ja', name: '日本語' },
    { code: 'de', name: 'DE' },
    { code: 'ko', name: '한국어' },
    { code: 'it', name: 'IT' },
    { code: 'nl', name: 'NL' },
    { code: 'tr', name: 'TR' }
  ]

  return (
    <select
      value={current}
      onChange={(e) => onChange(e.target.value)}
      className="border border-dimon-soft rounded-lg px-2 py-1.5 text-sm bg-white"
    >
      {langs.map(l => (
        <option key={l.code} value={l.code}>{l.name}</option>
      ))}
    </select>
  )
}
