const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.addPassthroughCopy({ "src/images": "images" })
  eleventyConfig.addPassthroughCopy({ "src/css": "css" })
  eleventyConfig.addPassthroughCopy({ "src/js": "js" })
  
  return {
    dir: {
      includes: 'src/_includes',
      layouts: 'src/_layouts',
      dataTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk'
    }
  }
}