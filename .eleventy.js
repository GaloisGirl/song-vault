module.exports = function(eleventyConfig) {
  // Copy CSS to output directory
  eleventyConfig.addPassthroughCopy("src/css/output.css");
  // Copy era images to output directory
  eleventyConfig.addPassthroughCopy({ "src/_data/eras": "eras" });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    pathPrefix: "/song-vault/"
  };
};
