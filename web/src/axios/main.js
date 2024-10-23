import axios from "axios";

const baseURL = "http://localhost:8080";

export const fetchWinners = async () => {
    const request = await axios.get(`${baseURL}/winner/all`);
    const response = request.data.winners;
    return response;
}