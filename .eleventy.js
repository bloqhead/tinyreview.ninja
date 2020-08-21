const { DateTime } = require("luxon")
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"))

  eleventyConfig.addPassthroughCopy({ "src/images": "images" })
  eleventyConfig.addPassthroughCopy({ "src/css": "css" })
  eleventyConfig.addPassthroughCopy({ "src/js": "js" })

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy")
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd')
  })

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n)
    }

    return array.slice(0, n)
  })
  
  return {
    dir: {
      includes: 'src/_includes',
      dataTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk'
    }
  }
}