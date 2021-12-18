import { Alert, Button, Input, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/Context";

export const ValidateUser = () => {
	const { isError, handleChange, sendName } = useContext(AppContext);

	return (
		<div>
			{/* Que el usuario ingrese el nombre y le de al boton continuar para comenzar el quiz*/}

			<Stack spacing={{ xs: 1, sm: 2, md: 4 }} direction="column" className="formUser">
				<Typography variant="h3" component="h4">
					Enter Your Name
				</Typography>

				<Input
					color="warning"
					placeholder="Name"
					name="nameUser"
					size="medium"
					onChange={handleChange}
					error={!isError ? false : true}
				/>

				<Button variant="contained" size="large" onClick={sendName} color="warning">
					<Link to="/quiz" style={{ width: "100%" }}>
						CONTINUE
					</Link>
				</Button>

				{isError && (
					<Alert severity="error">
						Please enter a <strong>valid name</strong>
					</Alert>
				)}
			</Stack>
		</div>
	);
};
