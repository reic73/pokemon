export const createQuery = (data: any) => {
  const queryString =
    '?' +
    Object.keys(data)
      .map((key) => key + '=' + (data[key] === undefined ? '' : data[key]))
      .join('&');
  return queryString;
};

export const readQuery = () => {
const  urlParams = new URLSearchParams(window.location.search);

return urlParams;
}; 