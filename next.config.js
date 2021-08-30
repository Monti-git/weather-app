/** @type {import('next').NextConfig} */

const {
  WEATHER_API_BASEURL
} = process.env;

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      's.gravatar.com',
      'storage.googleapis.com',
      'lh1.googleusercontent.com',
      'lh2.googleusercontent.com',
      'lh3.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh6.googleusercontent.com',
      'www.metaweather.com'
    ],
  },
  publicRuntimeConfig: {
    WEATHER_API_BASEURL
  },
}