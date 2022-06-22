# How To

## Setup

1. Create a folder
2. Add a `src` folder
3. Add `.gitignore` with the following content:

```
# Misc

_.log
npm-debug._ > _.scssc
_.swp
.DS_Store
Thumbs.db
.sass-cache
.env
.cache

# Node modules and output

node_modules
dist
src/\_includes/css
```

4. Add `.eleventy.js` with the following content:

```
module.exports = config => {
	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist'
		}
	};
};
```

5. Create `package.json` with: `npm init -y`
6. Install `eleventy` with: `npm install @11ty/eleventy`
7. Add the start script to `package.json`: `"start": "npx eleventy --serve"`
8. Create templates: `mkdir -p src/_includes/layouts`
