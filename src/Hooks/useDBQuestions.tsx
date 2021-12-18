// DATA API
import React, { useEffect, useState } from "react";
import { IQuestion } from "../Pages/StartQuiz/Interfaces/Question";
import { consumerAPI } from "../Server/getQuestions";

export const useDBQuestions = () => {
	const [DBQuestions, setDBQuestions] = useState<IQuestion[]>([]);

	// Check is data from api is ready
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		consumerAPI(12, 21).then((data) => {
			setDBQuestions(data);
			setIsLoading(false);
		});
	}, []);

	return { DBQuestions, isLoading };
};
