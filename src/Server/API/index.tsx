import axios from "axios";

export const ApiQuestions = axios.create({
	baseURL: "https://opentdb.com/",
});
