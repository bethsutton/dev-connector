import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="profiles" element={<Profiles />} /> */}
          {/* <Route path="profile/:id" element={<Profile />} /> */}
          {/* <Route
            path="dashboard"
            element={<PrivateRoute component={Dashboard} />}
          /> */}
          {/* <Route
            path="create-profile"
            element={<PrivateRoute component={ProfileForm} />}
          /> */}
          {/* <Route
            path="edit-profile"
            element={<PrivateRoute component={ProfileForm} />}
          /> */}
          {/* <Route
            path="add-experience"
            element={<PrivateRoute component={AddExperience} />}
          /> */}
          {/* <Route
            path="add-education"
            element={<PrivateRoute component={AddEducation} />}
          /> */}
          {/* <Route path="posts" element={<PrivateRoute component={Posts} />} /> */}
          {/* <Route path="posts/:id" element={<PrivateRoute component={Post} />} /> */}
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
