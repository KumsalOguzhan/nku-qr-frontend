import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signIn";

import Classroom from "./pages/classroom"
import Department from "./pages/department"
import Inspection from "./pages/inspection"
import Lecture from "./pages/lecture"
import Student from "./pages/student"
import StudentPassword from "./pages/studentPassword"
import Subject from "./pages/subject"


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>

            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/department" element={<Department />} />
            <Route path="/inspection" element={<Inspection />} />
            <Route path="/lecture" element={<Lecture />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student-password" element={<StudentPassword />} />
            <Route path="/subject" element={<Subject />} />

              {/* <Route path="/classroom" element={<Outlet />}>
                <Route index element={<Classroom />} />
                <Route path="action/:path" element={<ClassroomAction />}>
                  <Route path=":id" element={<ClassroomAction />} />
                </Route>
              </Route> */}

          </Route>
          
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
