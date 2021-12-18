import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/Context";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup, CardActions, Stack } from "@mui/material";

export const ResultQuiz = () => {
	const { userName, numberQuestion, arrayOptions, DBQuestions, score } =
		useContext(AppContext);

	return (
		<Stack className="resultsUser">
			<Typography gutterBottom variant="h4" component="div">
				Results
			</Typography>

			<Typography variant="h6" color="text.secondary">
				Username: {userName}
			</Typography>

			<Typography variant="h6" color="text.secondary">
				Score: {score}/{DBQuestions.length}
			</Typography>

			<Typography variant="h6" gutterBottom color="text.secondary">
				your percentage of success is {Math.floor((score * 100) / DBQuestions.length)}%
			</Typography>

			<ButtonGroup className="btn__check">
				<Button variant="outlined" size="medium" color="primary">
					<Link to="/">Home</Link>
				</Button>

				<Button variant="contained" size="medium" color="warning">
					<Link to="/validateUser">Try Again</Link>
				</Button>
			</ButtonGroup>
		</Stack>
	);
};
