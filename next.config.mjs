/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Yeh line Next.js ko static HTML banane par majboor karegi
  images: {
    unoptimized: true, // Static export ke liye images optimize off karni padti hai
  },
};

export default nextConfig;
