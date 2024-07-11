const callApi = async (url, method = "GET", body = undefined) => {
  const result = await fetch(url, {
    method,
    body, //כששם המשתנה זהה לערך  שלו אין צורך לכתוב פעמיים
  });
  return result.json();
};

export { callApi };
