import { STATUSES } from '../../constants';

export const getBookSearchParams = (state) => state?.books?.searchParam ?? '';

export const getBookCollection = (state) => state.books.collection ?? [];

export const getTotalBooksCount = (state) => state?.books?.count ?? 0;

export const getNumberOfPages = (state) => state?.books?.numberOfPages ?? 0;

export const getBookApiStatus = (state) => state?.books?.status ?? STATUSES.PENDING;
