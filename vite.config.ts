import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/React-KoreanMapAPIs/",
  server: {
    host: true,
    allowedHosts: [
        'xezoless.tplinkdns.com',
    ],
  },
})
