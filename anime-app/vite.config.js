import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


 export default defineConfig({
   plugins: [react()],
   server: {
    proxy: {
      '/api': 'http://localhost:3001', // Apunta a tu servidor backend
    },
  },
 })

// export default {
//   server: {
//     proxy: {
//       '/api': 'http://localhost:3001', // Apunta a tu servidor backend
//     },
//   },
// };