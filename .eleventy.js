module.exports = function(eleventyConfig) {
  // Copy CSS to output directory
  eleventyConfig.addPassthroughCopy("src/css/output.css");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
