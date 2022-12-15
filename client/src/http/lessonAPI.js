import {$authHost, $host} from "./index";

export const createLesson = async (lesson) => {
    const {data} = await $authHost.post('/lesson/LessonCreate', lesson);
    return data;
}

export const getAll = async () => {
    const {data} = await $host.get('/lesson/LessonGet');
    return data;
}

