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
import * as apiService from '../../services/apiService';
import { addCategory } from '../../services/authService';
import { authRemainingSelector } from '../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { createInstance } from '../../services/createInstance';
import AuthSlice from '../../redux/AuthSlice';

const FormTitle = ({ children }) => {
    return <h2 className=" text-4xl  font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};
const ProductsAll = () => {
    // const { id } = useParams();

    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const dispatch = useDispatch();
    let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);

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
                            <div className="relative mt-8 ml-8 text-lg">
                                <div className="">
                                    <p className=" text-2xl text-orange-600">Admin</p>
                                    <div className="mt-4 flex flex-col">
                                        <Label check>
                                            <Input type="checkbox" />
                                            <span className="ml-2 text-xl">Go to Label to read more</span>
                                        </Label>
                                        <Label check>
                                            <Input type="checkbox" />
                                            <span className="ml-2 text-xl">Go to Label to read more</span>
                                        </Label>
                                        <Label check>
                                            <Input type="checkbox" />
                                            <span className="ml-2 text-xl">Go to Label to read more</span>
                                        </Label>
                                        <Label check>
                                            <Input type="checkbox" />
                                            <span className="ml-2 text-xl">Go to Label to read more</span>
                                        </Label>
                                    </div>
                                    <Button className='mt-4 '>Lưu</Button>
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

export default ProductsAll;
