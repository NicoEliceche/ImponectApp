const fs = require('fs');
const path = require('path');

const KNOWLEDGE_PATH = path.join(__dirname, '../knowledge/platform-guide.md');
const MAX_RESULTS = 5;

const normalize = (value) => String(value || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

const tokenize = (value) => (
  normalize(value)
    .replace(/[^a-z0-9\s/.-]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 2)
);

const loadSections = () => {
  const content = fs.readFileSync(KNOWLEDGE_PATH, 'utf8');
  const sections = content.split(/\n(?=## )/g);

  return sections.map((section, index) => {
    const lines = section.trim().split('\n');
    const title = lines[0].replace(/^#+\s*/, '') || `Sección ${index + 1}`;
    const text = lines.slice(1).join('\n').trim();
    return { id: `platform-guide-${index + 1}`, title, text };
  }).filter(section => section.text);
};

const retrieve = (query, limit = MAX_RESULTS) => {
  const queryTokens = tokenize(query);
  const sections = loadSections();

  return sections
    .map((section) => {
      const titleTokens = tokenize(section.title);
      const bodyTokens = tokenize(section.text);
      const score = queryTokens.reduce((total, token) => {
        const titleMatches = titleTokens.filter(current => current.includes(token) || token.includes(current)).length;
        const bodyMatches = bodyTokens.filter(current => current === token).length;
        return total + (titleMatches * 5) + bodyMatches;
      }, 0);
      return { ...section, score };
    })
    .filter(section => section.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};

module.exports = { retrieve };
