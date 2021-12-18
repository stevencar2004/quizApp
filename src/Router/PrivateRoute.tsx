import React, { ReactElement } from "react";
import { useContext } from "react";
import { useLocation, Route, Redirect } from "react-router-dom";
import { AppContext } from "../Context/Context";

//@ts-ignore
export function PrivateRoute({ component: Component, ...rest }) {
	const { isLogged } = useContext(AppContext);

	const location = useLocation();

	return (
		<Route {...rest}>
			{isLogged() ? (
				<Component />
			) : (
				<Redirect to={{ pathname: "/validateUser", state: { from: location } }} />
			)}
		</Route>
	);
}
