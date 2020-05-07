const getOptions = (pageNumber) => ({
  method: 'POST',
  body: JSON.stringify({
    page: pageNumber,
    itemsPerPage: 20,
    filters: [],
  }),
  headers: {
      'Content-Type': 'application/json'
  }
});

export const getBooksApi = (pageNumber) => fetch('http://nyx.vima.ekt.gr:3000/api/books', getOptions(pageNumber));

export default {
  getBooksApi,
};
