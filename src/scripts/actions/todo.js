import Types from '../actiontypes/types';

/**
 * [dosomething description]
 * @param  {String} data [description]
 * @return {[type]}      [description]
 */
export function dosomething(data = 'do something...') {
    return {
        type: Types.TODO,
        data
    };
}