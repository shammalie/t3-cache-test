/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import path from 'path';
import { env } from 'process';


// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    cacheHandler: process.env.NODE_ENV === 'production' ? path.resolve(process.cwd(), 'cache-handler.mjs') : undefined,
    output: 'standalone',
    generateBuildId: async () => {
      // This could be anything, using the latest git hash
      const id = env.GIT_HASH ?? null
      return id
    },
  }
   
  export default nextConfig