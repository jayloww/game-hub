import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key : "0d4a9b9eea134ac3b40d3a391d028538"
    }
})