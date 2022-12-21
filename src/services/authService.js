import { data } from 'autoprefixer';
import AuthSlice from '../redux/AuthSlice';
import * as httpRequest from '../utils/httpRequest';
import { allCategories } from './apiService';

export const loginUser = async (user, dispatch, history) => {
    dispatch(AuthSlice.actions.loginStart());
    try {
        const res = await httpRequest.post('admin/login', {
            Email: user.Email,
            Password: user.Password,
        });
        dispatch(AuthSlice.actions.loginSuccess(res.data));
        history.push('/dashboard');
        return res.data;
    } catch (error) {
        dispatch(AuthSlice.actions.loginFailed());
        return error.response.data;
    }
};
export const registerUser = async (user, dispatch, history) => {
    dispatch(AuthSlice.actions.registerStart());
    try {
        const res = await httpRequest.post('user/register', {
            Email: user.Email,
            Password: user.Password,
            ConfirmPassword: user.ConfirmPassword,
        });
        dispatch(AuthSlice.actions.registerSuccess(res.data));
        history.push('/');
        return res.data;
    } catch (error) {
        dispatch(AuthSlice.actions.registerFailed());
        console.error('error', error.response.data);
        return error.response.data;
    }
};
export const logOutUser = async (dispatch, history, id = '1', accessToken, axiosJWT) => {
    dispatch(AuthSlice.actions.logOutStart());
    try {
        const res = await axiosJWT.post('user/logout', id, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        dispatch(AuthSlice.actions.logOutSuccess());
        console.log('logout', res.data);
        history.push('/');
        return res.data;
    } catch (error) {
        dispatch(AuthSlice.actions.logOutFailed());
        console.log(error, AuthSlice.actions.logOutFailed());
    }
};
export const addCategory = async (data, accessToken, axiosJWT, shopId) => {
    try {
        let res;
        res = await axiosJWT.post('category', data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status == 200) {
            res = await allCategories();
            console.log(res);
            return res;
        }
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const addParentCategory = async (data, accessToken, axiosJWT) => {
    try {
        let res;
        res = await axiosJWT.post('category/parent', data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status == 200) {
            res = await allCategories();
            console.log(res);
            return res;
        }
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const updateCategory = async (data, accessToken, axiosJWT) => {
    try {
        let res = '';
        res = await axiosJWT.put(`category`, data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status == 200) {
            res = await allCategories();
            console.log(res);
            return res;
        }
        // history.push('/all-products');

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const deleteCategory = async (id, history, accessToken, axiosJWT) => {
    try {
        let res = '';
        res = await axiosJWT.delete(`category/${id}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status == 200) {
            res = await allCategories();
            console.log(res);
            return res;
        }
        // history.push('/all-products');

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const getAllUser = async (accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.get('admin/user', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const getRoleOfUserGroup = async (accessToken, axiosJWT, id) => {
    try {
        const res = await axiosJWT.get(`admin/credentials/${id}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const getUserGroup = async (accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.get('usergroup', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const updateUser = async (data, accessToken, axiosJWT) => {
    try {
        let res = '';
        res = await axiosJWT.put(`admin/user`, data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status == 200) {
            res = await getAllUser(accessToken, axiosJWT);
            console.log(res);
            alert('Lưu thành công')

            return res;
        }
        // history.push('/all-products');

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const updatePermission = async (data, accessToken, axiosJWT) => {
    try {
        let res = '';
        res = await axiosJWT.put(`permission/credential`, data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status == 200) {
            res = await getRoleOfUserGroup(accessToken, axiosJWT, 1);
            let res1 = await getRoleOfUserGroup(accessToken, axiosJWT, 3);
            alert('Lưu thành công')
            return { admin: res, shop: res1 };
        }
        // history.push('/all-products');

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
