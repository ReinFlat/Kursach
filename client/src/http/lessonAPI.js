import {$authHost, $host} from "./index";

export const createLesson = async (lesson) => {
    const {data} = await $authHost.post('api/lesson/LessonCreate', lesson);
    return data;
}

export const getAll = async () => {
    const {data} = await $host.get('api/lesson/LessonGet');
    return data;
}



