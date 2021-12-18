import { ChangeEvent } from "react";
import { IQuestion } from "../../Pages/StartQuiz/Interfaces/Question";

export type TAppContext = {
	// Functions
	consumerAPI: (numQuestions: number, numCategory: number) => Promise<object>;
	setUserName: (name: string) => void;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	sendName: () => void;
	isLogged: () => boolean;
	setNumberQuestion: (value: number) => void;
	nextQuestion: () => void;
	arrayOptions: () => string[];
	validateResponse: (option: string) => void;

	// Variables
	userName: string;
	isError: boolean;
	numberQuestion: number;
	DBQuestions: IQuestion[];
	isLoading: boolean;
	isSelected: boolean;
	isCorrectResponse: boolean;
	score: number;
};
