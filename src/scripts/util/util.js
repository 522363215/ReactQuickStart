import Types from '../actiontypes/types';
import 'whatwg-fetch';

const unhandled = () => ({
    type: Types.UNHANDLE
});

export function fetchApi(url, params = {
    method: 'get'
}, successCreator, errorCreator) {
    return (dispatch) => {
        dispatch({
            type: Types.REQUEST_BEGIN
        });
        return fetch(url, {
            method: params.method,
            body: params.body || {},
            headers: params.headers || {},
            credentials: 'same-origin'
        }).then((reponse) => {
            if (reponse.ok) {
                return reponse.json();
            } else {
                reponse.error = true;
                throw reponse;
            }
        }).then((json) => {
            dispatch({
                type: Types.REQUEST_SUCCESS
            });
            return json;
        }).then((json) => {
            dispatch(successCreator ? successCreator(json.data) : unhandled());
        }).catch((e) => {
            if (e.error) {
                dispatch({
                    type: Types.REQUEST_ERROR
                });
                dispatch(errorCreator ? errorCreator() : unhandled());
            } else {
                dispatch({
                    type: Types.REQUEST_FAIL
                });
            }

        });
    };
}