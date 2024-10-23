import axios from "axios";

const baseURL = "https://polgo-challenge.onrender.com";

export const fetchWinners = async () => {
    const request = await axios.get(`${baseURL}/winner/all`);
    const response = request.data.winners;
    return response;
}