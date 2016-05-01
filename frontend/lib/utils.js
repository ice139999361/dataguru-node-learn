import marked from 'marked';
import HighLight from 'highlight.js'
import xss from 'xss';

export function redirectURL(url) {
  location = url;
}


marked.setOptions({
  highlight: function (code) {
    return HighLight.highlightAuto(code).value;
  }
})

const xssOptions = {
  whiteList: Object.assign({}, xss.whiteList)
};
xssOptions.whiteList.code = ['class'];
xssOptions.whiteList.span = ['class'];
const myxss = new xss.FilterXSS(xssOptions);

export function renderMarkdown(text) {
  return myxss.process(marked(text));
}
