// action types declared as constants to avoid duplicates and typos
export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_SINGLE_ARTICLE = 'GET_SINGLE_ARTICLE';
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS';
export const ADD_ARTICLE_ERRORS = 'ADD_ARTICLE_ERRORS';
export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const GET_ERRORS = 'GET_ERRORS';
export const SUCCESS = 'SUCCESS';
export const WARNING = 'WARNING';
export const ERROR = 'WARNING';
export const Modules = {
  toolbar: {
    container: [
      [{ placeholder: ['[GuestName]', '[HotelName]'] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  }
};

export default Modules;
