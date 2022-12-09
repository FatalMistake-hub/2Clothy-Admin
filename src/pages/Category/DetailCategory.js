import React, { useState, useEffect, useLayoutEffect } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { Link, NavLink } from 'react-router-dom';
import { EditIcon, EyeIcon, GridViewIcon, HomeIcon, ListViewIcon, TrashIcon, RightArrow, AddIcon } from '../../icons';
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
    TableRow,
    TableFooter,
    Avatar,
    Badge,
    Pagination,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from '@windmill/react-ui';
import response from '../../utils/demo/productData';
import Icon from '../../components/Icon';
import { genRating } from '../../utils/genarateRating';
import ProductIcon from '../../components/ProductIcon';
import * as apiService from '../../services/apiService';
import { useParams } from 'react-router-dom';

const FormTitle = ({ children }) => {
    return <h2 className=" text-3xl  font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};
const ProductsAll = () => {
    const { id } = useParams();

    const fetchApi = async (id) => {
        const dataItem = await apiService.productByCategory(id);
        const dataAllItem = await apiService.allShopProducts(id);
        console.log(dataItem);
        setResponseTable(dataItem);
        setResponse(dataAllItem[0].items);
        // setAllItem(dataAllItem[0]);
    };
    useEffect(() => {
        fetchApi(id);
    }, [id]);

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
    const totalResultsTable = responseTable.items?.length;

    function onPageChangeTable(p) {
        setPageTable(p);
    }
    useEffect(() => {
        setDataTable(responseTable.items?.slice((pageTable - 1) * resultsPerPageTable, pageTable * resultsPerPageTable));
    }, [pageTable, resultsPerPageTable, responseTable.items]);

    // Delete action model
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [selectedDeleteProduct, setSelectedDeleteProduct] = useState(null);
    const openModal = (productId, modal) => {
        if (modal == 'del') {
            setIsModalDeleteOpen(true);
        } else {
            setIsModalAddOpen(true);
        }
    };

    const closeModal = (modal) => {
        if (modal == 'del') {
            setIsModalDeleteOpen(false);
        } else {
            setIsModalAddOpen(false);
        }
    };

    // Handle list view

    const [categoriesResult, setCategoriesResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await apiService.allCategories();

            setCategoriesResult(result);
        };

        fetchApi();
    }, []);
    const [categories2, setCategories2] = useState([]);

    const fetchApi2 = async (result) => {
        const data = await apiService.categoriesById(result.id);
        setSelected(result);
        setCategories2(data);
    };

    const [selected, setSelected] = useState();

    const [newCategory, setNewCategory] = useState();
    const handleNewCategory = (e) => {
        setNewCategory(e.target.value);
    };

    const handleAddCategory = async () => {
        let dateNew = {
            ParentId: selected.id,
            // ShopId: 4,
            Name: newCategory,
            Description: '',
            Gender: true,
        };
        console.log(dateNew);
        // await addCategory(dateNew,currentUser.accessToken,axiosJWT)
    };
    return (
        <div>
            {/* Delete category model */}
            <Modal isOpen={isModalDeleteOpen} onClose={() => closeModal('del')} style={{ width: '400px' }}>
                <ModalHeader className="flex items-center">
                    <Icon icon={TrashIcon} className="w-6 h-6 mr-3" />
                    Xoá danh mục
                </ModalHeader>
                <ModalBody>Bạn có muốn xoá danh mục {selectedDeleteProduct && `"${selectedDeleteProduct.name}"`} ?</ModalBody>
                <ModalFooter>
                    <div className="hidden sm:block">
                        <Button layout="outline" onClick={() => closeModal('del')}>
                            Huỷ
                        </Button>
                    </div>
                    <div className="hidden sm:block">
                        <Button>Xoá</Button>
                    </div>
                </ModalFooter>
            </Modal>
            {/* Add category model */}
            <Modal isOpen={isModalAddOpen} onClose={() => closeModal('add')} style={{ width: '1000px' }}>
                <ModalHeader className="flex items-center">
                    {' '}
                    <FormTitle>Thêm danh mục</FormTitle>
                </ModalHeader>
                <ModalBody>
                    <h3 className="text-xl  font-normal text-gray-600 mb-4">Chọn ngành hàng:</h3>
                    <div className="flex-grow min-h-8 overflow-auto text-sm px-6">
                        <div className="rounded p-4 bg-gray-100">
                            <div className="relative overflow-hidden  rounded">
                                <div className="py-3 relative w-96 flex bg-white">
                                    <ul className=" h-80 flex-1">
                                        {categoriesResult.map((result, i) => (
                                            <li
                                                key={result.id}
                                                className="my-2 flex justify-between leading-8 items-center px-4 hover:bg-gray-100"
                                                onClick={() => fetchApi2(result)}
                                            >
                                                <p className="text-sm font-semibold leading-8 text-ellipsis">{result.name}</p>
                                                <div className="flex item-center ">
                                                    <Icon className="w-5 h-5" aria-hidden="true" icon={RightArrow} />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl  font-normal text-gray-600 my-4">Đặt tên danh mục:</h3>

                    <Label className="mb-4 mx-6 w-1/2">
                        <Input placeholder="Nhập vào tên danh mục hiển thị" value={newCategory} onChange={handleNewCategory} />
                    </Label>
                </ModalBody>
                <ModalFooter>
                    <div className="w-full flex justify-between">
                        <div className="leading-5 flex items-center">
                            <span className="mr-1 font-normal text-gray-600">Đã chọn :</span>
                            <span className="ml-1 mr-1">{selected?.name}</span>
                            {newCategory && (
                                <>
                                    <div className="flex item-center  ">
                                        <Icon className="w-3 h-3" aria-hidden="true" icon={RightArrow} />
                                    </div>
                                    <span className="ml-1">{newCategory}</span>
                                </>
                            )}
                        </div>
                        <div className="flex">
                            <div className="ml-4  ">
                                <Button layout="outline" onClick={() => closeModal('add')}>
                                    Huỷ
                                </Button>
                            </div>
                            <div className="ml-4 hidden sm:block">
                                <Button onClick={handleAddCategory}>Xác nhận</Button>
                            </div>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>
            {/* Breadcum */}
            <div className="flex mt-8 text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <div className="flex items-center text-orange-600">
                    <NavLink exact to="/all-categories" className="mx-2">
                        Quản lý danh mục
                    </NavLink>
                </div>

                {'>'}
                <p className="mx-2">Chi tiết danh mục</p>
            </div>

            {/* Sort */}
            <Card className="mt-8 mb-5 shadow-md ">
                <CardBody className="flex items-center">
                    <div className="p-2">
                        <ProductIcon
                            src="	https://cf.shopee.vn/file/sg-11134201-22110-em4g3m5y5cjv5a"
                            alt="Product image"
                            size="w-32 h-32"
                        />
                    </div>
                    <div className="">
                        <FormTitle>{dataTable?.name}</FormTitle>
                        <div className="flex items-center mt-2">
                            <span className="font-medium mr-1 text-gray-400">Tạo bởi:</span>
                            <span className="font-medium mr-4">Người bán | Tự chọn</span>
                            <span className="font-medium mr-1 text-gray-400">Sản phẩm:</span>
                            <span className="font-medium ">{dataTable?.items?.length}</span>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="px-8 shadow-md mb-8">
                <CardBody>
                    <div className="flex items-center justify-between py-4 mb-5 ">
                        <div className="flex items-center w-full justify-between ">
                            <div className="flex items-center">
                                <FormTitle>Danh sách sản phẩm</FormTitle>
                            </div>
                            <div className=" flex justify-end">
                                <Button size="large" iconLeft={AddIcon} onClick={() => openModal(null, 'add')}>
                                    Thêm sản phẩm
                                </Button>
                            </div>
                        </div>
                    </div>
                    <TableContainer className="mb-8">
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Tên sản phẩm</TableCell>
                                    <TableCell>Giá</TableCell>
                                    <TableCell>Số lượng</TableCell>
                                    {/* <TableCell>Price</TableCell> */}
                                    <TableCell>Thao tác</TableCell>
                                </tr>
                            </TableHeader>
                            <TableBody>
                                {dataTable?.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <ProductIcon
                                                    className="hidden mr-4 md:block"
                                                    src={product.images[0].path}
                                                    alt="Product image"
                                                />
                                                <div>
                                                    <p className="font-semibold">{product.name}</p>
                                                </div>
                                            </div>
                                        </TableCell>

                                        <TableCell className="text-sm">{product.price}</TableCell>
                                        <TableCell className="text-sm">{product.quantity}</TableCell>
                                        <TableCell>
                                            <div className="flex">
                                                <Button
                                                    icon={TrashIcon}
                                                    layout="outline"
                                                    onClick={() => openModal(product.id, 'del')}
                                                    aria-label="Delete"
                                                />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TableFooter>
                            <Pagination
                                totalResults={totalResultsTable}
                                resultsPerPage={resultsPerPageTable}
                                label="Table navigation"
                                onChange={onPageChangeTable}
                            />
                        </TableFooter>
                    </TableContainer>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProductsAll;
