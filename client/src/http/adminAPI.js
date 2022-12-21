import {$authHost, $host} from "./index";

export const getCompany = async () => {
    const {data} = await $host.get('api/admin/company');
    return data;
}

export const getCountPassed = async (id) => {
    const {data} = await $host.get('api/admin/count/' + id);
    return data;
}

export const getAverageMark = async (id) => {
    const {data} = await $host.get('api/admin/average/' + id);
    return data;
}

export const getTraffic = async (id) => {
    const {data} = await $host.get('api/admin/traffic/' + id);
    return data;
}

export const getStudents = async (id) => {
    const {data} = await $host.get('api/admin/students/' + id);
    return data;
}