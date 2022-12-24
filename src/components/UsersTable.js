import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Avatar,
    Badge,
    Dropdown,
    Select,
    DropdownItem,
    Pagination,
    Label,
    Button,
} from '@windmill/react-ui';
import { authRemainingSelector } from '../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { createInstance } from '../services/createInstance';
import AuthSlice from '../redux/AuthSlice';
import * as apiAuthService from '../services/authService';
import moment from 'moment/moment';

const UsersTable = ({ resultsPerPage, filter }) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [response, setResponse] = useState([]);
    const [userGroups, setUserGroups] = useState([]);

    // pagination setup
    const totalResults = response.length;

    // pagination change control
    function onPageChange(p) {
        setPage(p);
    }
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const dispatch = useDispatch();
    let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await apiAuthService.getAllUser(currentUser.accessToken, axiosJWT);
            const groupData = await apiAuthService.getUserGroup(currentUser.accessToken, axiosJWT);
            setResponse(result);
            setUserGroups(groupData);
        };
        fetchApi();
    }, []);
    // on page change, load new sliced data
    // here you would make another server request for new data
    useLayoutEffect(() => {
        setData(response?.slice((page - 1) * resultsPerPage, page * resultsPerPage));
    }, [page, resultsPerPage, filter, response]);

    const handleSelected = async (UserGroupId, UserId) => {
        console.log(parseInt(UserGroupId), UserId);

        let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
        const result = await apiAuthService.updateUser(
            { UserId: parseInt(UserGroupId), UserGroupId: UserId },
            currentUser.accessToken,
            axiosJWT,
        );
        setResponse(result);
    };
    return (
        <div>
            {/* Table */}
            <TableContainer className="mb-8">
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            {/* <TableCell>Joined on</TableCell>
                            <TableCell>Role</TableCell> */}
                            <TableCell>Joined on</TableCell>
                            <TableCell>Role</TableCell>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {data?.map((user, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold">#UID{user.id}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{user.name}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{user.email}</span>
                                </TableCell>

                                <TableCell>
                                    <span className="text-sm">{moment(user.dateCreated).format('L')}</span>
                                </TableCell>
                                {/* <TableCell>
                                    <span className="text-sm">{user.phoneNumber}</span>
                                </TableCell>

                                <TableCell>
                                    <span className="text-sm">{(user.address)}</span>
                                </TableCell> */}
                                <TableCell>
                                    <div className="relative">
                                        <Label>
                                            <span>{}</span>
                                            <Select className="mt-1" onChange={(e) => handleSelected(e.target.value, user.id)}>
                                                {userGroups
                                                    // .filter((item) => item.description != user.userGroupName)
                                                    ?.map((group, i) => (
                                                        <option
                                                            key={i}
                                                            value={group.id}
                                                            selected={group.description === user.userGroupName}
                                                        >
                                                            {group.description}
                                                        </option>
                                                    ))}
                                            </Select>
                                        </Label>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TableFooter>
                    <Pagination
                        totalResults={totalResults}
                        resultsPerPage={resultsPerPage}
                        label="Table navigation"
                        onChange={onPageChange}
                    />
                </TableFooter>
            </TableContainer>
        </div>
    );
};

export default UsersTable;
