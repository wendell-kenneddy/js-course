const loadPage = async el => {
  const href = el.href;

  try {
    const response = await fetch(href);

    if (!`${response.status}`.startsWith('2')) {
      const errorMsg = `${response.status} - ${response.statusText}`;
      throw new Error(errorMsg);
    }

    const html = await response.text();
    printResponse(html);
  } catch (err) {
    printResponse(err);
  }
};

const printResponse = responseText => {
  const requestResultContainer = document.getElementById('request-result');
  requestResultContainer.innerHTML = responseText;
}

const watchClick = () => {
  const linkContainer = document.querySelector('.container');
  linkContainer.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
      e.preventDefault();

      loadPage(el);
    }
  });
};

watchClick();
