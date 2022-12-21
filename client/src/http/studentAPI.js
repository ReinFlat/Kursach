import {$authHost, $host} from "./index";

export const signOne = async (basket) => {
    const {data} = await $authHost.post('api/student/', basket);
    return data;
}

export const getAll = async () => {
    const {data} = await $host.get('api/student/');
    return data;
}

export const getOne = async (id) => {
    const {data} = await $host.get('api/student/' + id);
    return data;
}

export const getCountLesson = async (id) => {
    const {data} = await $host.get('api/student/count/' + id);
    return data;
}

export const getSigned = async (id) => {
    const {data} = await $host.get('api/student/signed/' + id);
    return data;
}