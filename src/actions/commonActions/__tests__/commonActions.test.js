import {
  updateMovieDetails,
  fetchMovieDetails
} from '../commonActions';

const defaultPayloadForApi = {
  url: '/data',
  method: 'GET',
  data: null,
  accessToken: null,
  onSuccess:  () => {},
  onFailure: () => {},
  label: 'GET_MOVIE_DETAILS',
  headersOverride: null
};

describe('Random rating Details Actions', () => {
  it('updateMovieDetails should create UPDATE_MOVIE_DETAILS action', () => {
    expect(updateMovieDetails()).toEqual({
      type: 'UPDATE_MOVIE_DETAILS'
    })
  });

  it('fetchMovieDetails should create API action', () => {
    expect(JSON.stringify(fetchMovieDetails(1))).toEqual(JSON.stringify({
      type: 'API',
      payload: defaultPayloadForApi
    }))
  })
});
