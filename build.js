import fs from 'fs';
import marked from 'marked';
import {highlightAuto} from 'highlight.js';
import Handlebars from 'handlebars';
import sass from 'node-sass';

marked.setOptions({
  highlight: (code) => highlightAuto(code).value
});

Handlebars.registerHelper('each', (context, options) => {
  return context.map(contextItem => options.fn(contextItem)).join('')
});

function getTemplate() {
  return new Promise((resolve, reject) => {
    fs.readFile('src/index.hbs', 'utf-8', (err, data) => {
      if (err) { return reject(err) }
      resolve(Handlebars.compile(data))
    })
  })
}

function getSlideHtmls() {
  return new Promise((resolve, reject) => {
    fs.readdir('slides', (err, files) => {
      const promises = files.map((file) => {
        return new Promise((resolve, reject) => {
          fs.readFile(`slides/${file}`, 'utf-8', (err, data) => {
            resolve(data)
          })
        })
      })
      Promise.all(promises).then(data => data.map(md => ({html: marked(md)}))).then(htmls => resolve(htmls))
    })
  })
}

Promise.all([getSlideHtmls(), getTemplate()]).then((res) => {
  const slides = res[0]
  const template = res[1]
  const html = template({slides: slides})
  fs.writeFile('index.html', html)
}).catch(err => {
  console.log(err)
})
