function generateSummary(text) {
  return text.slice(0, 100) + "...";
}

function formatLinkedInPost(text) {
  return `🚀 ${text}\n\n#AI #Tech`;
}

function improveGrammar(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

module.exports = {
  generateSummary,
  formatLinkedInPost,
  improveGrammar
};

