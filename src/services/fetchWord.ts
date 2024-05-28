import axios from "axios";

const fetchWord = async (): Promise<string> => {
    return axios
        .get<string[]>("https://random-word-api.herokuapp.com/word?length=5")
        .then((response) => response.data[0])
}

export default fetchWord;
