import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import axios from 'axios';
// import uuid from 'uuid/v1';

import Navbar from './components/Navbar';
import MainFeed from './components/MainFeed';
import Place from './components/Place';
import CreatePlace from './components/CreatePlace';
import SinglePost from './components/SinglePost';
// import { addingUser } from './actions';
// import { increment, decrement, fetchArticleDetails } from './actions';

// function App() {
//   const counter = useSelector(state => state.counter);
//   const logged = useSelector(state => state.isLogged);
//   const users = useSelector(state => state.users);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetchArticleDetails();
//     console.log(users);
//   }, [])

//   return (
//     <div className="App">
//       <h1>Counter {counter}</h1>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button  onClick={() => dispatch(decrement())}>-</button>
//       {logged ? <h3>Logged in</h3> : ''}
//     </div>
//   );
// }

// export default App;


// function App() {
//   const data = useSelector(state => state.users);
//   const [addUser, setAddUser] = useState();

//   const handlePost = (e) => {
//     e.preventDefault();

//     dispatch()
//     let id = uuid();
//     // setItems([...items, {id: id, name: addUser}]);
//     axios.post('http://localhost:3000/users', {
//       id: id,
//       name: addUser
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }
//   if(!data) {
//     return (
//       <div>
//       No Data
//       </div>
//       )
//   }
//   return (
//     <div>
//     <span>{console.log(data)}</span>
//     {data.map((dat) => {
//       return (
//         <div key={dat.id}>
//         Name: { dat.name }
//         </div>
//         )
//     })}
//       <form onSubmit={handlePost}>
//         <input type="text" onChange={(e) => setAddUser(e.target.value)} />
//         <button type="submit">Post</button>
//       </form>
//     </div>
//     );
// }

// const mapStateToProps = state => {
//   return {
//     data: state.users
//   };
// };

// export default connect(
//   mapStateToProps,
//   null
//   )(App);


const App = () => {
  return (
    <Router>
        <Navbar />
        <Switch>
        <Route exact path="/" component={MainFeed} />
        <Route exact path="/create" component={CreatePlace} />
        <Route path="/place/:id" component={Place} />
        <Route path="/posts/:id" component={SinglePost} />
      </Switch>
    </Router>
    )
}
export default App;