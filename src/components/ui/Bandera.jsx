// Banderas en SVG para mostrar el país de cada ponente
// pais: código de dos letras (co, mx, de, ar, ve, ec, ca), si no está en la lista no se muestra nada

export const PAISES = {
  co: 'Colombia',
  mx: 'México',
  de: 'Alemania',
  ar: 'Argentina',
  ve: 'Venezuela',
  ec: 'Ecuador',
  ca: 'Canadá',
};

// Dibujo de cada bandera en una caja de 30x20
const DIBUJOS = {
  co: (
    <>
      <rect width="30" height="10" fill="#FCD116" />
      <rect y="10" width="30" height="5" fill="#003893" />
      <rect y="15" width="30" height="5" fill="#CE1126" />
    </>
  ),
  ec: (
    <>
      <rect width="30" height="10" fill="#FFDD00" />
      <rect y="10" width="30" height="5" fill="#034EA2" />
      <rect y="15" width="30" height="5" fill="#ED1C24" />
      <ellipse cx="15" cy="10" rx="2.2" ry="2.8" fill="#6E4B23" opacity="0.85" />
    </>
  ),
  mx: (
    <>
      <rect width="10" height="20" fill="#006847" />
      <rect x="10" width="10" height="20" fill="#FFFFFF" />
      <rect x="20" width="10" height="20" fill="#CE1126" />
      <circle cx="15" cy="10" r="2.6" fill="#8C5A2B" />
      <path d="M12.6 11.6 Q15 13.8 17.4 11.6" stroke="#006847" strokeWidth="0.8" fill="none" />
    </>
  ),
  de: (
    <>
      <rect width="30" height="6.67" fill="#000000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </>
  ),
  ar: (
    <>
      <rect width="30" height="6.67" fill="#74ACDF" />
      <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
      <rect y="13.33" width="30" height="6.67" fill="#74ACDF" />
      <circle cx="15" cy="10" r="2.2" fill="#F6B40E" stroke="#85340A" strokeWidth="0.3" />
    </>
  ),
  ve: (
    <>
      <rect width="30" height="6.67" fill="#FFCC00" />
      <rect y="6.67" width="30" height="6.67" fill="#00247D" />
      <rect y="13.33" width="30" height="6.67" fill="#CF142B" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angulo = Math.PI * (0.15 + (0.7 * i) / 7);
        return <circle key={i} cx={15 - 4.4 * Math.cos(angulo)} cy={13.3 - 4.4 * Math.sin(angulo)} r="0.55" fill="#FFFFFF" />;
      })}
    </>
  ),
  ca: (
    <>
      <rect width="30" height="20" fill="#FFFFFF" />
      <rect width="7.5" height="20" fill="#D52B1E" />
      <rect x="22.5" width="7.5" height="20" fill="#D52B1E" />
      <path
        d="M15 3.5 L16.2 5.8 L17.6 5.2 L17.2 8.6 L19.3 6.5 L19.8 7.7 L21.8 7.3 L21.1 9.6 L22 10 L18.6 12.8 L19 14 L15.4 13.5 L15.5 17 L14.5 17 L14.6 13.5 L11 14 L11.4 12.8 L8 10 L8.9 9.6 L8.2 7.3 L10.2 7.7 L10.7 6.5 L12.8 8.6 L12.4 5.2 L13.8 5.8 Z"
        fill="#D52B1E"
        transform="translate(15 10) scale(0.82) translate(-15 -10)"
      />
    </>
  ),
};

// redonda: la bandera se recorta en círculo (para ponerla sobre la foto)
const Bandera = ({ pais, redonda = false, className = '' }) => {
  const codigo = pais?.toLowerCase();
  if (!DIBUJOS[codigo]) return null;

  return (
    <svg
      viewBox={redonda ? '5 0 20 20' : '0 0 30 20'}
      preserveAspectRatio="xMidYMid slice"
      className={`${redonda ? 'rounded-full' : 'rounded-[3px]'} ${className}`}
      role="img"
      aria-label={`Bandera de ${PAISES[codigo]}`}
    >
      <title>{PAISES[codigo]}</title>
      {DIBUJOS[codigo]}
    </svg>
  );
};

export default Bandera;
