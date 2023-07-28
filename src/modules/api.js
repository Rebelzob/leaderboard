const postRequest = async (data) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5AVHts8XtlYBfGgCSSC7/scores/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

const getRequest = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5AVHts8XtlYBfGgCSSC7/scores/');
    const data = await response.json();
    const scores = document.querySelector('.table-body');
    data.result.forEach((element) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${element.user}</td><td>${element.score}</td>`;
      scores.appendChild(row);
    });
  } catch (error) {
    return error;
  }
  return null;
};

export { postRequest, getRequest };