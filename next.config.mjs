/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/stueck/bang-olufsen-surround-anlage', destination: '/', permanent: true },
      { source: '/stueck/donghia-lounge-chair', destination: '/', permanent: true },
      { source: '/stueck/eames-lounge-chair-670-vitra-lizenzproduktion', destination: '/', permanent: true },
      { source: '/stueck/gallotti-radice-president-junior-glasschreibtisch-1971', destination: '/', permanent: true },
      { source: '/stueck/eames-lounge-chair-670-herman-miller', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
