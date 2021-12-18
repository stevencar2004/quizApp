import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";

// Context
import { AppContext } from "./Context";
// API
import { consumerAPI } from "../Server/getQuestions";
// Interface
import { IProviderProps } from "./Interfaces/PropsProvider";
import { useDBQuestions } from "../Hooks/useDBQuestions";

const NAME = /^[a-zA-ZÀ-ÿ\s]{2,40}$/; // Letras y espacios, pueden llevar acentos.

export const Provider = ({ children }: IProviderProps) => {
	// STATE FOR QUIZ APP
	const { DBQuestions, isLoading } = useDBQuestions();
	const [isSelected, setisSelected] = useState<boolean>(false);
	const [isCorrectResponse, setIsCorrectResponse] = useState<boolean>(false);
	const [score, setScore] = useState<number>(0);
	const [numberQuestion, setNumberQuestion] = useState<number>(0);

	const nextQuestion = (): void => {
		if (numberQuestion < DBQuestions.length - 1) {
			setNumberQuestion(numberQuestion + 1);
			setisSelected(false);
			setIsCorrectResponse(false);
		}
	};

	const arrayOptions = (): string[] => {
		let opciones: string[] = [];
		opciones = [
			DBQuestions[numberQuestion].correct_answer,
			...DBQuestions[numberQuestion].incorrect_answers,
		];
		return opciones;
	};

	const validateResponse = (option: string): void => {
		setisSelected(true);

		if (option == DBQuestions[numberQuestion].correct_answer) {
			setScore(score + 1);
			setIsCorrectResponse(true);
		}
	};

	// INFO USER
	const [userName, setUserName] = useState<string>("");
	// Check user is valid, and not have any error
	const [isError, setIsError] = useState<boolean>(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserName(event.target.value);
	};

	// Validate field User-Name
	const sendName = () => {
		if (NAME.test(userName)) {
			setIsError(false);
		} else {
			setIsError(true);
		}
	};

	// Check exist user
	const isLogged = () => {
		if (isError == false && userName != "") {
			return true;
		}
		return false;
	};

	return (
		<AppContext.Provider
			value={{
				// Functions
				consumerAPI,
				setUserName,
				handleChange,
				sendName,
				isLogged,
				setNumberQuestion,
				nextQuestion,
				arrayOptions,
				validateResponse,

				// Variables
				userName,
				isError,
				numberQuestion,
				DBQuestions,
				isLoading,
				isSelected,
				isCorrectResponse,
				score,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
