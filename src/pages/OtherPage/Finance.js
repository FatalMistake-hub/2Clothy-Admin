import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { NavLink } from 'react-router-dom';
import { HomeIcon } from '../../icons';
import {
    Card,
    CardBody,
    Label,
    Select,
    Button,
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    Badge,
    Pagination,
    TableRow,
    TableFooter,
} from '@windmill/react-ui';

import ProductIcon from '../../components/ProductIcon';
import * as apiService from '../../services/apiService';

function Icon({ icon, ...props }) {
    const Icon = icon;
    return <Icon {...props} />;
}

const Finance = () => {
    useEffect(() => {
        const fetchApi = async (id) => {
            const dataItem = await apiService.productByCategory(id);
            setResponseTable(dataItem);
        };
        fetchApi();
    }, []);

    // For modal pagination
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [response, setResponse] = useState([]);

    const resultsPerPage = 5;
    const totalResults = response?.length;

    function onPageChange(p) {
        setPage(p);
    }
    useEffect(() => {
        setData(response?.slice((page - 1) * resultsPerPage, page * resultsPerPage));
    }, [page, resultsPerPage, response]);
    // For main Table pagination
    const [pageTable, setPageTable] = useState(1);
    const [dataTable, setDataTable] = useState([]);
    const [responseTable, setResponseTable] = useState([]);

    const resultsPerPageTable = 10;
    // const totalResultsTable = responseTable.items?.length;

    function onPageChangeTable(p) {
        setPageTable(p);
    }
    // useEffect(() => {
    //     setDataTable(responseTable.items?.slice((pageTable - 1) * resultsPerPageTable, pageTable * resultsPerPageTable));
    // }, [pageTable, resultsPerPageTable, responseTable.items]);
    // pagination setup




    const [filter, setFilter] = useState('Tất cả');

    const handleFilter = (filter_name) => {
        // console.log(filter_name);
        if (filter_name == 'Tất cả') {
            setFilter('Tất cả');
        }
        if (filter_name == 'Chưa thanh toán') {
            setFilter('Chưa thanh toán');
        }
        if (filter_name == 'Đã thanh toán') {
            setFilter('Đã thanh toán');
        }
        if (filter_name == 'Hoàn thành') {
            setFilter('Hoàn thành');
        }
    };

    const [allCheck, setAllCheck] = useState();
    const [checked, setChecked] = useState([]);
    console.log(checked);
    const handleCheck = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);

            console.log('id', id);
            if (id == 'all' && isChecked) {
                return [];
            }
            if (isChecked) {
                return checked.filter((item) => {
                    if (item !== id && item != 'all') {
                        return item;
                    }
                });
            } else {
                if (id == 'all') {
                    return allCheck.concat('all');
                }
                return [...prev, id];
            }
        });
    };
    return (
        <div>
            <PageTitle>Đơn hàng</PageTitle>

            {/* Breadcum */}
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <p className="mx-2">Đơn hàng</p>
            </div>

            {/* Sort */}
            <Card className="mt-5 mb-5 shadow-md">
                <CardBody>
                    <div className="flex items-center ">
                        <Label className="mx-3 flex items-center ">
                            <p className="text-sm w-full  text-gray-600 dark:text-gray-400">Lọc đơn hàng</p>
                            <Select className="py-3" onChange={(e) => handleFilter(e.target.value)}>
                                <option>Tất cả</option>
                                <option>Chưa thanh toán</option>
                                <option>Đã thanh toán</option>
                                <option>Hoàn thành</option>
                            </Select>
                        </Label>

                        <Label className="mx-3 flex items-center">
                            {/* <!-- focus-within sets the color for the icon when input is focused --> */}
                            <p className="text-sm w-full text-gray-600 dark:text-gray-400">Ngày đặt hàng</p>
                            <Select className="py-3" onChange={(e) => handleFilter(e.target.value)}>
                                <option>Tất cả</option>
                                <option>Chưa thanh toán</option>
                                <option>Đã thanh toán</option>
                                <option>Hoàn thành</option>
                            </Select>
                            {/* <div className="relative text-gray-500 focus-within:text-orange-600 dark:focus-within:text-orange-400">
                                <input
                                    className="py-3 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-orange-400 focus:outline-none focus:shadow-outline-orange dark:focus:shadow-outline-gray form-input"
                                    value={resultsPerPage}
                                    onChange={(e) => setResultPerPage(e.target.value)}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none"> */}
                            {/* <SearchIcon className="w-5 h-5" aria-hidden="true" /> */}
                            {/* Results on Table */}
                            {/* </div>
                            </div> */}
                        </Label>
                    </div>
                </CardBody>
            </Card>

            <TableContainer className="mb-8">
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-all`}
                                    // name={name}
                                    // value={name}
                                    checked={checked?.includes('all')}
                                    onChange={() => handleCheck('all')}
                                />
                            </TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Stock</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>QTY</TableCell>
                            <TableCell>Price</TableCell>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {data?.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${product.id}`}
                                        // name={name}
                                        // value={name}

                                        checked={checked?.includes(product.id)}
                                        onChange={() => handleCheck(product.id)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center text-sm">
                                        <ProductIcon className="hidden mr-4 md:block" src={product.images[0].path} alt="Product image" />
                                        <div>
                                            <p className="font-semibold ">{product.name}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge type={product.quantity > 0 ? 'success' : 'danger'}>
                                        {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Badge>
                                </TableCell>

                                <TableCell className="text-sm">{product.size}</TableCell>
                                <TableCell className="text-sm">{product.quantity}</TableCell>
                                <TableCell className="text-sm">{product.price.toLocaleString('es-ES')} ₫</TableCell>
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

export default Finance;
