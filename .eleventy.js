const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj).toFormat('dd.MM.yyyy');
    });

    eleventyConfig.addFilter('htmlYear', (dateObj) => {
      return DateTime.fromJSDate(dateObj).toFormat('yyyy');
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
        output: "build-11ty"
      }
    };
};
