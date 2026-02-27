module.exports = function(eleventyConfig) {
  // Pass through the compiled Tailwind CSS
  eleventyConfig.addPassthroughCopy("./src/styles/style.css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
