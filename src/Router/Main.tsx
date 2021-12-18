import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Home } from "../Pages/Home/Home";
import { Page404 } from "../Pages/NotFound/404";
import { ValidateUser } from "../Pages/ValidateUser/ValidateUser";
import { StartQuiz } from "../Pages/StartQuiz/StartQuiz";
import { PrivateRoute } from "./PrivateRoute";
import { ResultQuiz } from "../Pages/ResultQuiz/ResultQuiz";

export const AppRouter = () => {
	return (
		<Router>
			<Switch>
				{/* Show Questions Quiz */}
				<PrivateRoute exact path="/quiz" component={StartQuiz} key={"startQuiz"} />

				{/* Show Info about result quiz */}
				<PrivateRoute
					exact
					path="/quiz/result"
					component={ResultQuiz}
					key={"resultQuiz"}
				/>

				<Route exact path="/validateUser" component={ValidateUser} />
				<Route exact path="/" component={Home} />

				{/* PAGE NOT FOUND - NOT EXIST */}
				<Route path="/404" component={Page404} />
				<Route path="*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</Router>
	);
};
