import { configureStore } from "@reduxjs/toolkit";
import resumeReducers from "../features/resume/resumeFeatures";
import userReducers from "../features/user/userFeatures";

export const resumeStore = configureStore({
  reducer: {
    editResume: resumeReducers,
    editUser: userReducers,
  },
});

export const userStore = configureStore({
  reducer: {
    editUser: userReducers,
  },
});
