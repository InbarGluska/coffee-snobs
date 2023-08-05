/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: [
            "www.ignant.com",
            "trendland.com",
            "cdn.th3rdwave.coffee",
            "lh5.googleusercontent.com",
            "images.happycow.net",
            "www.we-heart.com",
            "images.squarespace-cdn.com",
            "freight.cargo.site",
            "benrahim.de",
            "www.thecoolguide.net",
            "live.staticflickr.com",
            "www.thewaytocoffee.com",
            "sattundfroh.de",
            "www.petitepassport.com",
            "wheretodrink.coffee",
            "resizer.otstatic.com",
            "www.petitepassport.com",
            "wheretodrink.coffee",
        ],
    },
};

module.exports = nextConfig;
