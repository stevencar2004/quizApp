import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../../Context/Context";
// STYLES MUI
import LinearProgress from "@mui/material/LinearProgress";
import { Alert, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const StartQuiz = () => {
	const {
		userName,
		numberQuestion,
		nextQuestion,
		arrayOptions,
		validateResponse,
		DBQuestions,
		isLoading,
		isCorrectResponse,
		score,
		isSelected,
	} = useContext(AppContext);

	/* Que aparezca en pantalla
		* Pergunta + Numero de la pregunta
		* La pregunta
		* hasta que no se seleccione la pregunta no aparezca 
			el boton de ir a la siguiente
		* Al darle al boton me debe aparecen la siguiente pregunta y se repite el proceso
	*/

	return (
		<Stack className="quizPage">
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				className="infoUser"
			>
				<Grid item xs={6}>
					<Typography variant="h5" gutterBottom component="div">
						<strong> UserName: </strong> {userName}
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography variant="h5" gutterBottom component="div">
						<strong> Score: </strong> {score}
					</Typography>
				</Grid>
			</Grid>

			{isLoading ? (
				<LinearProgress color="warning" />
			) : (
				<Box>
					<Typography variant="h5" gutterBottom component="div" marginTop={2}>
						<strong> Question {numberQuestion + 1}</strong>
					</Typography>

					<Box className="containerQuestion">
						<Typography variant="h5" gutterBottom component="div">
							{DBQuestions[numberQuestion].question}
						</Typography>
					</Box>

					<Typography variant="h6" gutterBottom component="div">
						Select the correct answer
					</Typography>

					{isCorrectResponse && <Alert severity="success">correct answer</Alert>}

					<Stack spacing={2}>
						{arrayOptions().map((option) => (
							<Button
								disabled={isSelected}
								key={option}
								value={option}
								onClick={() => {
									validateResponse(option);
								}}
								variant="contained"
								color="info"
							>
								{option}
							</Button>
						))}
					</Stack>

					{numberQuestion <= 10 && (
						<div className="btn__check">
							<Button
								variant="contained"
								color="warning"
								onClick={nextQuestion}
								disabled={!isSelected}
								size="large"
							>
								Next
							</Button>
						</div>
					)}

					{numberQuestion == 11 && <Redirect to="quiz/result" />}
				</Box>
			)}
		</Stack>
	);
};
