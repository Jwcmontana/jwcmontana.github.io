
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import HomeHeader from '../Home/HomeHeader';
import ProjectDetails from '../Projects/views/ProjectDetails';
import Projects from '../Projects/views/Projects';
import Resume from '../Resume/Resume';
import SpaceGame from '../SpaceGame/SpaceGame';
import './App.css';

function App() {

  const state = useAppSelector((state) => state)

  return (
    <Routes>
      <Route path="/" element={<HomeHeader />} />
      <Route
        path="/projects"
        element={
          <Projects
            projects={state.projects.projects}
          />
        }
      />
      <Route
        path="/projects/:projectId"
        element={
          <ProjectDetails />
        }
      />
      <Route
        path="/resume"
        element={
          <Resume
            educationExperience={state.resume.education}
            workExperiences={state.resume.workExperiences}
            technologyExperience={state.resume.technologies}
            objective={state.resume.objective}
          />
        }
      />
      <Route
        path="/space-game"
        element={
          <SpaceGame />
        }
      />
    </Routes>

  );
}

export default App;
