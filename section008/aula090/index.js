const request = (configObj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(configObj.verb, configObj.url, true);
    xhr.send();

    xhr.onload = () => {
      if (!`${xhr.status}`.startsWith('2')) {
        reject(xhr.responseText);
        return;
      }

      resolve(xhr.responseText);
    };
  });
};

const loadPage = async el => {
  const href = el.href;
  const configObj = {
    verb: 'get',
    url: href
  };
  const response = await request(configObj);
  return response;
};

const printResponse = responseText => {
  const requestResultContainer = document.getElementById('request-result');
  requestResultContainer.innerHTML = responseText;
}

const executeJs = js => {
  eval(js);
}

const watchClick = () => {
  const linkContainer = document.querySelector('.container');
  linkContainer.addEventListener('click', async e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
      e.preventDefault();

      if (el.href.slice(-3) == '.js') {
        const js = await loadPage(el);
        executeJs(js);
        return;
      }

      const response = await loadPage((el));
      printResponse(response);
    }
  });
};

watchClick();
