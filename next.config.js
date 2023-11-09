/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [ //new process to add 'img' url
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '**',
            },
        ],
    }
}

module.exports = nextConfig
