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
export function renderMarkdown(text) {
  return xss(marked(text));
}
