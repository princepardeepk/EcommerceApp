import axios from "axios";

export function apiGet(endPoint, data, headers = {}, requestOptions) {
    return apiReq(endPoint, data, 'get', headers, requestOptions);
}


export async function apiReq(
    endPoint,
    data,
    method,
    headers,
    requestOptions = {},
    uploadProgressBarData = () => { },
) {
    return new Promise(async (res, rej) => {
        console.log(requestOptions, 'requestOptions');
        headers = {
            ...headers,
        };

        if (method === 'get' || method === 'delete') {
            data = {
                ...requestOptions,
                ...data,
                headers,
            };
        }

        console.log(endPoint, '+++++endPoint');
        console.log(data, '+++++data');
        console.log(headers, '+++++headers');
        console.log(uploadProgressBarData, '+++++uploadProgressBarData');

        axios[method](endPoint, data, {
            headers,
            onUploadProgress: progressEvent => {
                console.log(progressEvent, 'progressEvent');
                const { loaded, total } = progressEvent;
                const percent = Math.floor((loaded * 100) / total);
                console.log(loaded, 'loaded');
                console.log(total, 'total');
                console.log(percent, 'percent');
                if (percent <= 100) {
                    if (uploadProgressBarData) {
                        uploadProgressBarData(percent);
                    }
                }
            },
        })
            .then(result => {
                const { data } = result;
                if (data.status === false) {
                    return rej(data);
                }
                return res(data);
            })
            .catch(error => {
                console.log(error, 'all error');
                if (error && error?.response && error?.response.status === 401 || error?.response.status === 403) {
                    rej(error?.response?.data);
                } else {
                    console.log(error, 'all error>>>>>>');
                    if (error && error?.response && error?.response?.data) {
                        if (!error?.response?.data?.error) {
                            return rej({
                                ...error?.response?.data,
                                error: error?.response?.data?.error || 'Network Error',
                            });
                        }
                        return rej(error?.response?.data);
                    } else {
                        return rej({ error: 'Network Error', message: 'Network Error' });
                    }
                }
            });
    });
}
