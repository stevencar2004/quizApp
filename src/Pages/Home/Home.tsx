import { Link } from "react-router-dom";
// Cpmponenets MUI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

export const Home = () => {
	return (
		<div className="header">
			<AppBar position="fixed" color="transparent" elevation={0}>
				<Toolbar>
					<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/" className="header__logo">
							QuizApp
						</Link>
					</Typography>

					<Button className="header__btn" variant="outlined" color="warning">
						<Link to="/validateUser">Start Quiz</Link>
					</Button>
				</Toolbar>
			</AppBar>

			<Stack
				spacing={2}
				direction="column"
				justifyContent="center"
				alignItems="center"
				className="banner"
			>
				<Typography variant="h2" component="h2">
					Sports Questions
				</Typography>

				<Typography variant="subtitle1" component="div">
					Questions about your favorite sports
				</Typography>

				<Button variant="contained" size="large" color="warning">
					<Link to="/validateUser">Start</Link>
				</Button>
			</Stack>
		</div>
	);
};
