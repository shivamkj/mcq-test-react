module.exports = {
  plugins:
    process.env.NODE_ENV === "production"
      ? {
          tailwindcss: {},
          autoprefixer: {},
          cssnano: {},
        }
      : {
          tailwindcss: {},
        },
};

// Command to build css files seprately
// export NODE_ENV=production && postcss styles/tailwind.css -o tailwind.css
