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

export const getFakeBooksApi = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      books: [
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 1,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 2,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 3,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 4,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 5,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 6,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 7,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 8,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 9,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 10,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 11,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 12,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 13,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 14,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 15,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 16,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 17,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 18,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 19,
        },
        {
          book_author: ['xxxxxx'],
          book_pages: 23,
          book_publication_city: 'xxxxxx',
          book_publication_country: 'xxxxxx',
          book_publication_year: 'xxxxxx',
          book_title: 'xxxxxx',
          id: 20,
        },
      ],
      count: 2018,
    };
};

export default {
  getBooksApi,
  getFakeBooksApi,
};
