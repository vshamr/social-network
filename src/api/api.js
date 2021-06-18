import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {"API-KEY": "49a221c0-893a-436a-ab46-97d6ac0efe00"}
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    ...settings
})

export const usersAPI = {
   getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    }
}
