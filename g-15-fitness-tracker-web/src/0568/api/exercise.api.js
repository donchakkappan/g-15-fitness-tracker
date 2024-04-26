import axios from "axios";
import { EXCERCISE_API } from "../../utils";

// bodypart, equipment, target, exercise
const cache = {};
const headers = {
	'X-RapidAPI-Key': 'USE_YOUR_API_KEY',
    'X-RapidAPI-Host': 'USE_YOUR_API_HOST'
};
export const getExercises = async () => {
	try {
		const response = await axios.request({
			method: "GET",
			url: `${EXCERCISE_API}/exercises/bodyPart`,
			headers: headers
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getBodyPartList = async () => {
	const url = `${EXCERCISE_API}/exercises/bodyPart/chest`;
	try {
		const response = await axios.request({
			method: "GET",
			url,
			headers: headers
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getLIstByBodyPart = async (bodyPart, page = 1) => {
	const url = `${EXCERCISE_API}/exercise?bodyPart=${bodyPart}`;
	try {
		const response = await axios.get(url, {
			params: { bodyPart}
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getEquipmentList = async () => {
	const url = `${EXCERCISE_API}/equipment`;

	try {
		const response = await axios.request({
			method: "GET",
			url,
			headers: headers
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getListByEquipment = async (equipment) => {
	const url = `${EXCERCISE_API}/exercise?equipment=${equipment}`;
	if (cache[equipment]) {
		console.log("cache hit");
		return cache[equipment];
	}
	try {
		console.log("fetching.....");
		const response = await axios.request({
			method: "GET",
			url,
			headers: headers
		});
		cache[equipment] = response.data;
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getMusculeTargetList = async () => {
	const url = `${EXCERCISE_API}/target`;
	try {
		const response = await axios.request({
			method: "GET",
			url,
			headers: headers
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getListByMusculeTarget = async (target) => {
	const url = `${EXCERCISE_API}/exercise?target=${target}`;
	if (cache[target]) {
		console.log("cache hit");
		return cache[target];
	}
	try {
		const response = await axios.request({
			method: "GET",
			url,
			headers: headers
		});
		cache[target] = response.data;
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getListByName = async (name) => {
	const url = `${EXCERCISE_API}/exercise?name=${name}`;

	try {
		const response = await axios.request({
			method: "GET",
			url, // hammer,abs,chest
			headers: headers
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
