import React from "react";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import News from "./Components/News";
import Error from "./Components/Error";
import Navigation from "./Components/Navigation";
import Callback from "./Components/Callback";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

const App = (props) => {
	return (
		<section className="table-responsive">
			<Router>
				<div>
					<Navigation/>
					<Switch>
						<Route path="/" exact render={() => {
							return (
								props.store.auth.isAuthenticated() ?
									<News/>
									:
									<Home/>
							)
						}
						}/>
						<Route path="/profile" component={Profile}/>
						<Route path="/news" component={News}/>
						<Route path="/callback" component={Callback}/>
						<Route component={Error}/>
					</Switch>
				</div>
			</Router>
		</section>
	);
};

const mapStateToProps = state => ({store: state});

export default connect(mapStateToProps)(App);
