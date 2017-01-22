export default function loadTemplate(path) {
  const request = new XMLHttpRequest();
  let response = '';

  request.open('GET', `/lib/components/${path}.html`, false);
  request.send(null);

  if (request.status === 200) {
    response = request.responseText;
  } else {
    return null;
  }

  return response;
}
