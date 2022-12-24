import {$authHost, $host} from "./index";

export const getOne = async (id) => {
    const {data} = await $host.get('api/teacher/' + id);
    return data;
}

export const getCount = async (id) => {
    const {data} = await $host.get('api/teacher/count/' + id);
    return data;
}

export const removeLesson = async (id) => {
    const {data} = await $host.post('api/teacher/removeLesson/' + id);
    return data;
}

export const removeExam = async (id) => {
    const {data} = await $host.post('api/teacher/removeExam/' + id);
    return data;
}