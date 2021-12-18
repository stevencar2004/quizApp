// THIS FILE SO CAN EXPORT AND IMPORT OHTERS FILES
//
import { IQuestion } from "../Pages/StartQuiz/Interfaces/Question";
import { ApiQuestions } from "./API";

export const consumerAPI = async (
	numQuestions: number = 12,
	numCategory: number = 21,
): Promise<IQuestion[]> => {
	const response = await ApiQuestions.get(
		`api.php?amount=${numQuestions}&category=${numCategory}`,
	);

	const data = response.data.results;

	return data;
};
