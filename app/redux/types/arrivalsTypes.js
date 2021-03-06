const ARRIVALS = {
  DATA_REQUEST: 'ARRIVALS_DATA_REQUEST',
  DATA_SUCCESS: 'ARRIVALS_DATA_SUCCESS',
  DATA_FAILURE: 'ARRIVALS_DATA_FAILURE',
  // Only for requesting new pages
  NEXT_PAGE_REQUEST: 'ARRIVALS_NEXT_PAGE_REQUEST',
  NEXT_PAGE_SUCCESS: 'ARRIVALS_NEXT_PAGE_SUCCESS',
  NEXT_PAGE_FAILURE: 'ARRIVALS_NEXT_PAGE_FAILURE',
  // Handling last page case
  LAST_PAGE_REACHED: 'ARRIVALS_LAST_PAGE_REACHED',
  // Handling search type change
  TYPE_CHANGE: 'ARRIVALS_TYPE_CHANGE',
};

export default ARRIVALS;
