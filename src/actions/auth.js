
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    registerUser: (data) => (dispatchEvent) => {
        return request({
            url: `${api}/front/v1/users`,
            method: "POST",
            data: data,
            callback: function (data) {
                if (!data.success) return;
                dispatchEvent(({
                    type: actionsTypes.authLogin
                }));
                dispatchEvent(({
                    type: actionsTypes.authSetSession,
                    session: data.session
                }));
            }
        });
    },
    register: (data) => (dispatchEvent) => {
        return request({
            url: `${api}/users`,
            method: "POST",
            data: data,
            callback: function (data) {
                if (!data.success) return;
                dispatchEvent(({
                    type: actionsTypes.authLogin
                }));
                dispatchEvent(({
                    type: actionsTypes.authSetSession,
                    session: data.session
                }));
            }
        });
    },
}