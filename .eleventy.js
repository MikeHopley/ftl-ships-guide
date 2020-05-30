module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('css')
	eleventyConfig.addPassthroughCopy('js')
	eleventyConfig.addPassthroughCopy('img')
	return {
		passthroughFileCopy: true
	}
}