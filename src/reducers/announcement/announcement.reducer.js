import {
  CREATE_ANNOUNCEMENT_PENDING,
  CREATE_ANNOUNCEMENT_SUCCESS,
  CREATE_ANNOUNCEMENT_ERROR,
  GET_ALL_ANNOUNCEMENTS_PENDING,
  GET_ALL_ANNOUNCEMENTS_SUCCESS,
  GET_ALL_ANNOUNCEMENTS_ERROR,
  GET_ANNOUNCEMENT_PENDING,
  GET_ANNOUNCEMENT_SUCCESS,
  GET_ANNOUNCEMENT_ERROR,
} from "../../actions/types/announcement.types.js";

const initialState = {
  createdData: {
    pending: false,
    error: null,
    success: false,
    announcement: null,
  },
  allAnnouncements: {
    pending: false,
    error: null,
    success: false,
    data: [],
  },
  announcement: {
    pending: false,
    error: null,
    success: false,
    data: null,
  },
};

const createAnnouncementReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ANNOUNCEMENT_PENDING:
      return {
        ...state,
        createdData: {
          ...state.createdData,
          pending: true,
          error: null,
          success: false,
          announcement: null,
        },
      };
    case CREATE_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        createdData: {
          ...state.createdData,
          pending: false,
          error: null,
          success: true,
          announcement: action.payload,
        },
      };
    case CREATE_ANNOUNCEMENT_ERROR:
      return {
        ...state,
        createdData: {
          ...state.createdData,
          pending: false,
          error: action.payload,
          success: false,
          announcement: null,
        },
      };
    case GET_ALL_ANNOUNCEMENTS_PENDING:
      return {
        ...state,
        allAnnouncements: {
          ...state.allAnnouncements,
          pending: true,
          error: null,
          success: false,
          data: [],
        },
      };
    case GET_ALL_ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        allAnnouncements: {
          ...state.allAnnouncements,
          pending: false,
          error: null,
          success: true,
          data: action.payload,
        },
      };
    case GET_ALL_ANNOUNCEMENTS_ERROR:
      return {
        ...state,
        allAnnouncements: {
          ...state.allAnnouncements,
          pending: false,
          error: action.payload,
          success: false,
          data: [],
        },
      };
    case GET_ANNOUNCEMENT_PENDING:
      return {
        ...state,
        announcement: {
          ...state.announcement,
          pending: true,
          error: null,
          success: false,
          data: null,
        },
      };
    case GET_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        announcement: {
          ...state.announcement,
          pending: false,
          error: null,
          success: true,
          data: action.payload,
        },
      };
    case GET_ANNOUNCEMENT_ERROR:
      return {
        ...state,
        announcement: {
          ...state.announcement,
          pending: false,
          error: action.payload,
          success: false,
          data: null,
        },
      };
    default:
      return state;
  }
};

export default createAnnouncementReducer;
