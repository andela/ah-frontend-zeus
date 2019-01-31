import Enzyme from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { BOOK_MARKED_ARTICLES } from '../../constants/ActionTypes';
import { getBookMarkedArticles } from '../../actions/GetBookMarkedArticlesAction';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_HOST_URL = process.env.API_URL;
it('test getBookmarkedAtricle action', () => {
  const url = `${API_HOST_URL}/articles/bookmark/`;

  fetchMock.getOnce(url, {
    body:  {
        "author": {
            "id": 3,
            "photo": "https://res.cloudinary.com/dhmiym9kh/image/upload/v1548848379/xgls2s4u1h9tcf46szhf.jpg",
            "bio": "300 - 44  ~ +256 Ewaffe Jenva",
            "fun_fact": "#Kampala Bwoba Fala, Ofa Oli Yala",
            "time_when_updated": "2019-01-31T03:36:04.512000Z",
            "favorite_article": [
                "how-to-become-good-at-swiming-vrkc5f59cv",
                "people-power-cbsrzfm1xu"
            ],
            "user": 3
        },
        "body": "<p>tags test</p>",
        "createdAt": "2019-01-31T12:10:43.749880+00:00",
        "description": "tags33",
        "slug": "tags33-ry98btghp5",
        "title": "tags33",
        "updatedAt": "2019-01-31T12:10:43.749923+00:00",
        "score": 0,
        "images": [],
        "likes": 0,
        "dislikes": 0,
        "tagList": [
            "tags",
            "test"
        ]
    },
    headers: { 'content-type': 'application/json' }
  });
  const expectedActions = [
    {
      type: BOOK_MARKED_ARTICLES,
      payload: 
        {
            "author": {
                "id": 3,
                "photo": "https://res.cloudinary.com/dhmiym9kh/image/upload/v1548848379/xgls2s4u1h9tcf46szhf.jpg",
                "bio": "300 - 44  ~ +256 Ewaffe Jenva",
                "fun_fact": "#Kampala Bwoba Fala, Ofa Oli Yala",
                "time_when_updated": "2019-01-31T03:36:04.512000Z",
                "favorite_article": [
                    "how-to-become-good-at-swiming-vrkc5f59cv",
                    "people-power-cbsrzfm1xu"
                ],
                "user": 3
            },
            "body": "<p>tags test</p>",
            "createdAt": "2019-01-31T12:10:43.749880+00:00",
            "description": "tags33",
            "slug": "tags33-ry98btghp5",
            "title": "tags33",
            "updatedAt": "2019-01-31T12:10:43.749923+00:00",
            "score": 0,
            "images": [],
            "likes": 0,
            "dislikes": 0,
            "tagList": [
                "tags",
                "test"
            ]
      }
    }
  ];
  const store = mockStore();

  return store
    .dispatch(getBookMarkedArticles())
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});
