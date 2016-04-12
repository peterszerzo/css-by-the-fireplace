import fs from 'fs';
import marked from 'marked';
import {highlightAuto} from 'highlight.js';
import Handlebars from 'handlebars';

marked.setOptions({
  highlight: (code) => highlightAuto(code).value
});

Handlebars.registerHelper('each', (context, options) => {
  return context.map(contextItem => options.fn(contextItem)).join('');
});

function getTemplate() {
  return new Promise((resolve, reject) => {
    fs.readFile('src/slides/index.hbs', 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(Handlebars.compile(data));
    });
  });
}

function getSlideHtmls() {
  return new Promise((resolve, reject) => {
    fs.readdir('content', (err, files) => {
      const promises = files.map((file) => {
        return new Promise((resolve, reject) => {
          fs.readFile(`content/${file}`, 'utf-8', (err, data) => {
            resolve(data);
          });
        });
      });
      Promise.all(promises).then(data => data.map((md, i) => ({
        html: marked(md),
        id: i
      }))).then(htmls => resolve(htmls));
    });
  });
}

Promise.all([getSlideHtmls(), getTemplate()]).then((res) => {
  const slides = res[0];
  const template = res[1];
  const html = template({slides: slides});
  fs.writeFile('slides.html', html);
}).catch(err => {
  console.log(err);
});
