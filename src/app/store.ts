import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import resumeReducer from '../components/Resume/ResumeSlice'
import projectsReducer from '../components/Projects/ProjectsSlice'

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    projects: projectsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
