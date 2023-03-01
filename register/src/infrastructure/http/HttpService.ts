import axios from 'axios'

export class HttpService {
    post = async (url: string, body: any) => {
        const response = await axios.post(url, body)
        return response
    }
}