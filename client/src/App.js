
import './App.css';
import{ Provider} from 'react-redux'
import store from './store/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//styles
import "./styles.css";

//component
import Home from './component/Home';

//store actions

import { getCourse } from './store/actions/courseAction';

/* Courses */
import AdminCourse from './component/Courses/AdminCourse';
 import Courses from "./component/Courses/Courses";
import UpdateCourse from "./component/Courses/UpdateCourse";
 import ViewCourse from "./component/Views/ViewCourse";
import AppNavbar from './component/AppNavbar';

//get datas

store.dispatch(getCourse());


function App() {
  return (
    <Provider {...{store}}>
        <Router>
          <AppNavbar />
          <Route path="/create-course" exact component={AdminCourse} />
          <Route path="/courses" component={Courses} exact />
          <Route path="/course/update/:slug" exact component={UpdateCourse} /> 
          <Route path="/about-course/:slug" exact component={ViewCourse} />
       
            <Route path='/' exact component={Home}/>
        </Router>
        
    </Provider>
    
  );
}

export default App;
