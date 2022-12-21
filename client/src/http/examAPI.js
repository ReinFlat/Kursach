import {$authHost, $host} from "./index";

export const createExam = async (exam) => {
    const {data} = await $authHost.post('api/exam/create', exam);
    return data;
}

export const getExam = async (id) => {
    const {data} = await $host.get('api/exam/' + id);
    return data;
}

export const getMark = async (id) => {
    const {data} = await $host.get('api/exam/mark/' + id);
    return data;
}