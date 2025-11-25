import {
    GETALLPRODUCTS
} from '../../config/urls';
import { apiGet } from '../../utils.js/utils';


export function getAllProducts(url = '', data = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        apiGet(GETALLPRODUCTS, data, headers)
            .then(async res => {
                resolve(res);
            })
            .catch(error => reject(error));
    });
} 