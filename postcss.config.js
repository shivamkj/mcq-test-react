// module.exports = (ctx) => ({
//   // map: ctx.options.map,
//   // parser: ctx.options.parser,
//   plugins:
//     ctx.env === "production" || process.env.NODE_ENV === "production"
//       ? {
//           tailwindcss: {},
//           autoprefixer: {},
//           cssnano: {},
//         }
//       : {
//           tailwindcss: {},
//         },
// });

// export NODE_ENV=production
// postcss public/tailwind.css -o dist/tailwind.css
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}