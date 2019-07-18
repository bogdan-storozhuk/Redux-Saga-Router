export default class ChatService {
    _apiUrl = 'https://api.myjson.com/bins/1hiqin';
    
    getMessages = async () => {
        const result = await fetch(`${this._apiUrl}`);
        if (!result.ok) {
            throw Error(`Could not fetch ${this._apiUrl}` + `, received ${result.status}`);
        }

        const body = await result.json();
        return body;
    };
}