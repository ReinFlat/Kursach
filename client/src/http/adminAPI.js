import {$authHost, $host} from "./index";

export const getCompany = async () => {
    const {data} = await $host.get('api/admin/company');
    return data;
}

export const getPosition = async () => {
    const {data} = await $host.get('api/admin/position');
    return data;
}

export const getDepartment = async () => {
    const {data} = await $host.get('api/admin/department');
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

export const getEmails = async () => {
    const {data} = await $host.get('api/admin/emails');
    return data;
}

export const getIds = async () => {
    const {data} = await $host.get('api/admin/ids');
    return data;
}

export const createCompany = async (company) => {
    const {data} = await $authHost.post('api/admin/addcompany', company);
    return data;
}
export const removeCompany = async (id) => {
    const {data} = await $host.post('api/admin/removeCompany/' + id);
    return data;
}
export const updateCompany = async (company) => {
    const {data} = await $authHost.post('api/admin/updatecompany', company);
    return data;
}


export const createPosition = async (position) => {
    const {data} = await $authHost.post('api/admin/addposition', position);
    return data;
}

export const createDepartment = async (department) => {
    const {data} = await $authHost.post('api/admin/adddepartment', department);
    return data;
}

export const createStudent = async (student) => {
    const {data} = await $authHost.post('api/admin/addstudent', student);
    return data;
}
export const removeStudent = async (id) => {
    const {data} = await $host.post('api/admin/removeStudent/' + id);
    return data;
}
export const updateStudent = async (student) => {
    const {data} = await $authHost.post('api/admin/updatestudent', student);
    return data;
}