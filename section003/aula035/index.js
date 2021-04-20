const tagsArray = [
  { tag: 'p', content: 'Texto exemplo 1.' },
  { tag: 'div', content: 'Texto exemplo 2.' },
  { tag: 'section', content: 'Texto exemplo 3.' },
  { tag: 'article', content: 'Texto exemplo 4.' },
  { tag: 'footer', content: 'Texto exemplo 5.' },
  { tag: 'ul', content: 'Texto exemplo 6.', },
  { tag: 'ol', content: 'Texto exemplo 7.', }
];
const tagsContainer = document.getElementById('tags-container');

const clearTagsContainer = () => {
  tagsContainer.innerHTML = '';
  return;
}

const printTags = () => {
  for (let i = 0; i < tagsArray.length; i++) {
    const { tag, content } = tagsArray[i];
    const tagNode = document.createElement(tag);
    tagNode.innerHTML = content;
    tagsContainer.appendChild(tagNode);
  }

  return;
}

const appInit = () => {
  clearTagsContainer();
  printTags();
  return;
}

appInit();
