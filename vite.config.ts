import {defineConfig} from 'vite'
import pluginChecker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), pluginChecker({typescript: true})],
})
