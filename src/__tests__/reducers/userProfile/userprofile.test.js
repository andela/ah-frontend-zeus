import { USER_PROFILE,EDIT_USER_PROFILE } from '../../../constants';
import userprofile from '../../../reducers/userprofile';

const initialState = {
  userprofile: {},
  loading: false
};
let state ={};

it.only("tests whether get profile reducer works", () => {
 
  const action = {
    type: USER_PROFILE,
    payload: {
      fun_fact:"swimming",
      bio: "I love android",
      photo:
        "https://res.cloudinary.com/dksxmwjqs/image/upload/v1544192758/hqqg0sil5sifcvigi5lx.jpg",
    }
  };
  console.log(">>>>>>>>>>>>>>>>>>>>",userprofile);
  expect(userprofile(undefined, action)) !== initialState;

});

it.only("tests whether edit reducer works", () => {
 
  const action = {
    type: EDIT_USER_PROFILE,
    payload: {
      fun_fact:"swimming",
      bio: "I love android",
      photo:
        "https://res.cloudinary.com/dksxmwjqs/image/upload/v1544192758/hqqg0sil5sifcvigi5lx.jpg",
    }
  };
  console.log(">>>>>>>>>>>>>>>>>>>>",userprofile);
  expect(userprofile(undefined, action)) !== initialState;

});


it.only("tests for default", () => {
 
  const action = {
    payload: {
      fun_fact:"swimming",
      bio: "I love android",
      photo:
        "https://res.cloudinary.com/dksxmwjqs/image/upload/v1544192758/hqqg0sil5sifcvigi5lx.jpg",
    }
  };
  console.log(">>>>>>>>>>>>>>>>>>>>",userprofile);
  expect(userprofile(undefined, action)) !== initialState;

});