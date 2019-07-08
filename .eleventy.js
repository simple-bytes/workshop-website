const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
    });

    return {
      templateFormats: [
        'md',
        'njk',
        'html',
        'liquid'
      ],
      // passthroughFileCopy: true,
      markdownTemplateEngine: 'liquid',
      htmlTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      dir: {
        input: 'src',
        includes: "_includes",
        output: "web"
      }
    };
};
