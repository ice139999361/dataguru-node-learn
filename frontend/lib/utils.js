import marked from 'marked';
import HighLight from 'highlight.js'

export function redirectURL(url) {
  location = url;
}


marked.setOptions({
  highlight: function (code) {
    return HighLight.highlightAuto(code).value;
  }
})
export function renderMarkdown(text) {
  return marked(text);
}
