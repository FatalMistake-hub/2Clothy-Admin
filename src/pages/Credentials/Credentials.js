import React, { useState, useEffect, useLayoutEffect } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { Link, NavLink } from 'react-router-dom';
import { EditIcon, EyeIcon, GridViewIcon, HomeIcon, ListViewIcon, TrashIcon, AddIcon, RightArrow } from '../../icons';
import {
    Card,
    CardBody,
    Label,
    Button,
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Pagination,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from '@windmill/react-ui';
import response from '../../utils/demo/productData';
import Icon from '../../components/Icon';
import ProductIcon from '../../components/ProductIcon';
import { authRemainingSelector } from '../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { createInstance } from '../../services/createInstance';
import AuthSlice from '../../redux/AuthSlice';
import * as apiAuthService from '../../services/authService';

const FormTitle = ({ children }) => {
    return <h2 className=" text-4xl  font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};
const Credentials = () => {
    // const { id } = useParams();

    const [response, setResponse] = useState([]);
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const dispatch = useDispatch();
    let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await apiAuthService.getRoleOfUserGroup(currentUser.accessToken, axiosJWT, 1);
            const result1 = await apiAuthService.getRoleOfUserGroup(currentUser.accessToken, axiosJWT, 3);
            setResponse({ admin: result, shop: result1 });
            console.log({ admin: result, shop: result1 });
        };
        fetchApi();
    }, []);
    const handleChecked = (roleId, type) => {
        const updatedAdminState = response.admin?.map((item, index) =>
            item.roleId === roleId && type == 1 ? { roleId: roleId, roleName: item.roleName, isActivated: !item.isActivated } : item,
        );
        const updatedShopState = response.shop?.map((item, index) =>
            item.roleId === roleId && type == 3 ? { roleId: roleId, roleName: item.roleName, isActivated: !item.isActivated } : item,
        );

        setResponse({ admin: updatedAdminState, shop: updatedShopState });
        console.log(response);
    };
    const handleUpdate = async (type) => {
        let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
        let result;
        if (type == 1) {
            result = await apiAuthService.updatePermission({ Roles: response.admin, UserGroupId: type }, currentUser.accessToken, axiosJWT);
        } else {
            result = await apiAuthService.updatePermission({ Roles: response.shop, UserGroupId: type }, currentUser.accessToken, axiosJWT);
        }

        setResponse(result);
    };
    return (
        <div>
            {/* Breadcum */}
            <div className="flex mt-8 text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <p className="mx-2">Quản lý phân quyền</p>
            </div>

            {/* Sort */}
            <Card className="px-8 shadow-md my-8">
                <CardBody>
                    <div className="flex items-center  justify-between py-4 mb-5">
                        <div className="flex  w-full flex-col justify-between">
                            <div className="flex items-center">
                                <FormTitle className=" text-sm text-gray-600 dark:text-gray-400">Tất cả phân quyền</FormTitle>
                            </div>
                            <div className="flex w-full ">
                                <div className="relative mt-8 ml-8 text-lg w-full">
                                    <div className="w-full">
                                        <div className="flex  items-center ">
                                            <p className=" text-2xl text-orange-600">Quản trị viên</p>
                                        </div>
                                        <div className="mt-4 flex flex-col">
                                            {response?.admin?.map((admin, i) => (
                                                <Label check key={i}>
                                                    <Input
                                                        type="checkbox"
                                                        checked={admin.isActivated}
                                                        onChange={() => handleChecked(admin.roleId, 1)}
                                                    />
                                                    <span className="ml-2 text-xl">{admin.roleName}</span>
                                                </Label>
                                            ))}
                                        </div>
                                        <Button className="mt-4 " onClick={() => handleUpdate(1)}>
                                            Lưu
                                        </Button>
                                    </div>
                                </div>
                                <div className="relative mt-8 ml-8 text-lg w-full">
                                    <div className="w-full">
                                        <div className="flex  items-center ">
                                            <p className=" text-2xl text-orange-600">Người bán</p>
                                        </div>
                                        <div className="mt-4 flex flex-col">
                                            {response?.shop?.map((shop, i) => (
                                                <Label check key={i}>
                                                    <Input
                                                        type="checkbox"
                                                        checked={shop.isActivated}
                                                        onChange={() => handleChecked(shop.roleId, 3)}
                                                    />
                                                    <span className="ml-2 text-xl">{shop.roleName}</span>
                                                </Label>
                                            ))}
                                        </div>
                                        <Button className="mt-4 " onClick={() => handleUpdate(3)}>
                                            Lưu
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

            {/* Product Views */}
        </div>
    );
};

export default Credentials;
