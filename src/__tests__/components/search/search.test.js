import React from "react";
import Enzyme from "enzyme"
import { shallow, mount } from "enzyme";
import mockStore from "../../../mockStore";
import searchReducer from "../../../reducers/searchReducer";
import { SearchResults, onClickHandler } from "../../../components/search/SearchResults";
import { SearchForm, inputStyleDisplay } from "../../../components/search/SearchForm";
import { getSearchData } from "../../../actions/getSearchDataAction";
import Adapter from 'enzyme-adapter-react-16';



Enzyme.configure({ adapter: new Adapter() })



 fetch = require("jest-fetch-mock");


 it("test the component", () => {
  const match = { params: { type: "title" } };
  const results = [
    {
      "author": {
          "id": 57,
          "photo": "",
          "bio": "",
          "fun_fact": "",
          "time_when_updated": "2019-01-23T12:01:18.228700Z",
          "favorite_article": [],
          "user": 115
      },
      "body": "<h2>What Is Happiness?</h2><p>Ah, happiness, that elusive state. Philosophers, theologians, psychologists, and even economists have long sought to define it, and since the 1990s, a whole branch of psychology—<a href=\"https://www.psychologytoday.com/us/basics/positive-psychology\" target=\"_blank\" style=\"color: rgb(44, 45, 48);\">positive psychology</a>—has been dedicated to pinning it down and propagating it. More than simply positive mood, happiness is a state of well-being that encompasses living a good life—that is, with a sense of meaning and deep satisfaction.</p><p>A growing body of research also suggests that happiness can improve your physical&nbsp;<a href=\"https://www.psychologytoday.com/us/basics/health\" target=\"_blank\" style=\"color: rgb(44, 45, 48);\">health</a>. Feelings of positivity and contentment seem to benefit cardiovascular health, the immune system, inflammation levels, and blood pressure, among other things. Happiness has even been linked to a longer lifespan—providing more years to continue striving for fulfillment.</p><p>Attaining happiness is a global pursuit. Researchers find that people from every corner of the world rate happiness more important than other desirable personal outcomes, such as having a meaningful life,&nbsp;becoming rich, and getting into heaven.</p>",
      "createdAt": "2019-01-24T17:38:26.275761+00:00",
      "description": "Whether it’s a job we hope for or a relationship we dream of, happiness is often at the top of our pursuits. We want to feel good about heading into any avenue of our lives.\nThe satisfaction from this sense of completion would close the door to our helplessness, our desire to never…",
      "slug": "first-title-9bi4rthnqt",
      "title": "Happiness: A Deadly Modern Illusion",
      "updatedAt": "2019-01-24T22:00:19.741725+00:00",
      "score": 0,
      "images": [],
      "likes": 0,
      "dislikes": 0,
      "tagList": []
  },
  ];

   const params = 'http://localhost:3000/searchresults/title/Happiness:%20A%20Deadly%20Modern%20Illusion?type=title&searchData=Happiness%3A+A+Deadly+Modern+Illusion';
  const wrapper = shallow(
    <SearchResults
      getSearchData={jest.fn()}
      params={params}
      match={match}
      searchResults={results}
    />
  );
});

 it("test the search component", () => {
  const match = { params: { type: "title" } };
  const props = { searchResults: { length: undefined } };
  const params = "http://localhost:3000/searchresults/title/Happiness:%20A%20Deadly%20Modern%20Illusion?type=title&searchData=Happiness%3A+A+Deadly+Modern+Illusion";
  const wrapper = shallow(
    <SearchResults
      getSearchData={jest.fn()}
      params={params}
      match={match}
      {...props}
    />
  );
});

 it("test the search component", () => {
  const match = { params: { type: "title" } };
  const results = [];

   const params = "http://localhost:3000/searchresults/title/Happiness:%20A%20Deadly%20Modern%20Illusion?type=title&searchData=Happiness%3A+A+Deadly+Modern+Illusion";
  const wrapper = shallow(
    <SearchResults
      getSearchData={jest.fn()}
      params={params}
      match={match}
      searchResults={results}
    />
  );
});

 test("tests reducer", () => {
  const action = {
    type: "GET_SEARCH_DATA",
    payload: {}
  };
  expect(searchReducer(undefined, action));


});


test("tests Form functionality", () => {
  const action = {
    type: "GET_SEARCH_DATA",
    payload: {}
  };
  expect(searchReducer(undefined, action));
});



 it("test the search form", () => {
  const state = {
    searchData: "",
    type: ""
  };
  const history = { push: jest.fn() };
  const wrapper = shallow(<SearchForm state={state} history={history} />);

   const instance = wrapper.instance();
  const Event = {};
  instance.onSubmit(Event);
});


it("test the onChange function ", () => {
  const wrapper = shallow(<SearchForm />);

   wrapper.find("#searchData").simulate("change", {
    target: { value: "searchData", name: "searchData" }
  });
  expect(wrapper.state("searchData")).toBe("searchData");
});



 it("test function in search form", () => {
  const state = {
    type: "title"
  };
  const history = { push: jest.fn() };
  const searchData = "searchData";
  const wrapper = mount(
    <SearchForm state={state} history={history} searchData={searchData} />
  );

   const instance = wrapper.instance();

   const e = { target: { name: "mike", value: "mike" }, preventDefault: jest.fn() };

   instance.setFormState(e);
});

it("test single component", () => {
  console.log(onClickHandler("slug", "date")({}));
  onClickHandler("slug", "date")({});
});


 it("Test input box", () => {
  const type = "title";
  expect(inputStyleDisplay(type)).toBe("displayBlock");
});

 test("test getSearchData ", () => {
  fetch.mockResponse(JSON.stringify({ access_token: "k0788110486" }));
  const store = mockStore({});
  store.dispatch(getSearchData());
});


test("test getSearchData", () => {
  fetch.mockResponse(JSON.stringify({ access_token: "k0779211758" }));
  const store = mockStore({});
});
