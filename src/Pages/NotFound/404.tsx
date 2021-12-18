import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Page404 = () => {
	return (
		<Stack className="notfound">
			<Typography variant="h4" gutterBottom component="div">
				Page Not Found - 404
			</Typography>

			<Typography variant="h6" gutterBottom component="div" color="text.secondary">
				We are sorry the page you are looking for does not exist
			</Typography>

			<Button variant="contained" size="large" color="warning">
				<Link to="/">Home</Link>
			</Button>
		</Stack>
	);
};
