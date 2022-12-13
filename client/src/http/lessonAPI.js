import {$authHost, $host} from "./index";

export const createLesson = async (lesson) => {
    const {data} = await $authHost.post('api/lesson', lesson)
    return data
}

export const fetchLesson = async (id) => {
    const {data} = await $host.get('api/lesson/' + id)
    return data
}