import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { isAdminLoggedIn } from "./actions";
import PrivateRoute from "./components/HOC/PrivateRoute";
import ManageInvitation from "./containers/Invitation/ManageInvitation";
import Main from "./containers/Main";
import NotFound from "./containers/NotFound";
import ListNotification from "./containers/Notification/ListNotification";
import InforPost from "./containers/Post//InforPost";
import ListPost from "./containers/Post//ListPost";
import AddPost from "./containers/Post/AddPost";
import EditPost1 from "./containers/Post/EditPost";
import InforPost1 from "./containers/Post/InforPost1";
import ListPostShare from "./containers/Post/ListPostShare";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import ManageSuggestion from "./containers/Suggestion/ManageSuggestion";
import InforTutor from "./containers/Tutor/InforTutor";
import ListTutor from "./containers/Tutor/ListTutor";
import UpdatePass from "./containers/UpdatePass";
import UpdateStudent from "./containers/UpdateStudent";
import UpdateTutor from "./containers/UpdateTutor";
import InviteTutor from "./containers/InviteTutor";
import ListBill from "./containers/Bill/ListBill";
import ListMyClassTutor from "./containers/MyClassTutor/ListMyClassTutor";
import ListMyClassStudent from "./containers/MyClassStudent/ListMyClassStudent";
import MyScheduleTutor from "./containers/MyClassTutor/MyScheduleTutor";
import MyScheduleStudent from "./containers/MyClassStudent/MyScheduleStudent";
import AddRate from "./containers/Comment/AddRate";





function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isAdminLoggedIn());
    }
  }, [auth.authenticate]);
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/updatepass" component={UpdatePass} />

        <PrivateRoute path="/listpost" component={ListPost} />
        <PrivateRoute path="/listpostedit/:postId" component={EditPost1} />
        <PrivateRoute path="/addpost" component={AddPost} />
        <PrivateRoute path="/mypostview/:postId" component={InforPost1} />

        <Route path="/listpostshare" component={ListPostShare} />
        <PrivateRoute path="/postview/:postId" component={InforPost} />
        <PrivateRoute path="/updatestudent" component={UpdateStudent} />

        <Route path="/listtutor" component={ListTutor} />
        <PrivateRoute path="/tutorview/:tutorId" component={InforTutor} />
        <PrivateRoute path="/updatetutor" component={UpdateTutor} />

        <PrivateRoute path="/manageinvitation" component={ManageInvitation} />
        <PrivateRoute path="/managesuggestion" component={ManageSuggestion} />
        <PrivateRoute path="/notifycation" component={ListNotification} />


        <PrivateRoute path="/invite-tutor/:tutorId" component={InviteTutor} />

        <Route path="/listbill" component={ListBill} />
        
        <Route path="/list-myclass-tutor" component={ListMyClassTutor} />
        <PrivateRoute path="/viewschedule-tutor/:classId" component={MyScheduleTutor} />

        <Route path="/list-myclass-student" component={ListMyClassStudent} />
        <PrivateRoute path="/viewschedule-student/:classId" component={MyScheduleStudent} />

        <Route path="/add-rate/:classId" component={AddRate} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
