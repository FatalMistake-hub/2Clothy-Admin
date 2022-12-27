import React, { useState, useEffect, useRef } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { Link, NavLink } from 'react-router-dom';
import { EditIcon, EyeIcon, HomeIcon, TrashIcon, AddIcon } from '../../icons';
import {
    Card,
    CardBody,
    Label,
    Textarea,
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
import { authRemainingSelector } from '../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { createInstance } from '../../services/createInstance';
import AuthSlice from '../../redux/AuthSlice';
import UploadImage from '../../services/imageService';
import * as apiAuthService from '../../services/authService';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const FormTitle = ({ children }) => {
    return <h2 className=" text-4xl  font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};
const ProductsAll = () => {
    const [view, setView] = useState('grid');
    // Table and grid data handlling
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    // pagination setup
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const totalResults = response.length;

    // pagination change control
    function onPageChange(p) {
        setPage(p);
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
    }, [page, resultsPerPage]);

    // Delete action model
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [selectedDeleteProduct, setSelectedDeleteProduct] = useState(null);
    const openModal = async (productId, modal) => {
        if (modal == 'del') {
            let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            const res = await apiAuthService.deleteCategory(productId, currentUser.accessToken, axiosJWT);
            setCategoriesResult(res);
            setIsModalDeleteOpen(false);
        } else if (modal == 'add') {
            setIsModalAddOpen(true);
        } else if (modal == 'update') {
            setIsModalUpdateOpen(true);
            const categoryUpdate = categoriesResult.find((c) => c.id == productId);
            UpdateCategoryForm.values.NameUpdate = categoryUpdate.name;
            UpdateCategoryForm.values.DescriptionUpdate = categoryUpdate.description;
            UpdateCategoryForm.values.Id = categoryUpdate.id;
            setImageURLsLogo(['', categoryUpdate.imagePath]);
            console.log(categoryUpdate);
        }
    };

    const closeModal = (modal) => {
        if (modal == 'del') {
            setIsModalDeleteOpen(false);
        } else if (modal == 'add') {
            setIsModalAddOpen(false);
        } else if (modal == 'update') {
            setIsModalUpdateOpen(false);
        }
    };

    const [categoriesResult, setCategoriesResult] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await apiService.allCategories();
            setCategoriesResult(result);
        };

        fetchApi();
    }, []);

    // const [selected, setSelected] = useState();

    const inputFileLogo = useRef(null);
    const [imagesLogo, setImagesLogo] = useState('');
    const [imageURLSLogo, setImageURLsLogo] = useState(['https://cf.shopee.vn/file/72443418d390c42dd6342d7a010532d1']);
    const onDivClickLogo = () => {
        inputFileLogo.current.click();
    };
    function onImageLogoChange(e) {
        const files = e.target.files;
        UploadImage(files, setImageURLsLogo);
        const isValidFileUploadedLogo = (file) => {
            const validExtensions = ['png', 'jpeg', 'jpg'];
            const fileExtension = file.type.split('/')[1];
            return validExtensions.includes(fileExtension);
        };
        if (isValidFileUploadedLogo(files[0])) {
            setImagesLogo(files);
        } else {
            alert('File invalid');
        }
    }

    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const dispatch = useDispatch();
    const AddCategoryForm = useFormik({
        initialValues: {},
        validationSchema: Yup.object({}),
        onSubmit: (values) => {
            let dateNew = {
                ImagePath: imageURLSLogo[imageURLSLogo.length - 1],
                // ParentId: null,
                Name: values.Name,
                Description: values.Description,
                Gender: true,
            };
            let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            const fetchApi = async () => {
                console.log(dateNew);
                const res = await apiAuthService.addParentCategory(dateNew, currentUser.accessToken, axiosJWT);
                setCategoriesResult(res);
                setIsModalAddOpen(false);
            };
            fetchApi();
        },
    });
    const UpdateCategoryForm = useFormik({
        initialValues: {},
        validationSchema: Yup.object({}),
        onSubmit: (values) => {
            let dateNew = {
                ImagePath: imageURLSLogo[imageURLSLogo.length - 1],
                Id: values.Id,
                Name: values.NameUpdate,
                Description: values.DescriptionUpdate,
                Gender: true,
            };
            const fetchApi = async () => {
                let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
                console.log(dateNew);
                const res = await apiAuthService.updateCategory(dateNew, currentUser.accessToken, axiosJWT);
                setCategoriesResult(res);
                setIsModalUpdateOpen(false);
            };
            fetchApi();
        },
    });
    return (
        <div>
            {/* Breadcum */}
            <div className="flex mt-8 text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Admin
                    </NavLink>
                </div>
                {'>'}
                <p className="mx-2">Quản lý danh mục</p>
            </div>

            {/* Sort */}
            <Card className="px-8 shadow-md my-8">
                <CardBody>
                    <div className="flex items-center justify-between py-4 mb-5">
                        <div className="flex items-center w-full justify-between">
                            <div className="flex items-center">
                                <FormTitle className=" text-sm text-gray-600 dark:text-gray-400">Tất cả danh mục</FormTitle>
                            </div>
                            <div className=" flex justify-end">
                                <Label className="mr-8">
                                    {/* <!-- focus-within sets the color for the icon when input is focused --> */}
                                    <div className="relative text-gray-500 focus-within:text-orange-600 dark:focus-within:text-orange-400">
                                        <input
                                            className="py-3 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-orange-400 focus:outline-none focus:shadow-outline-orange dark:focus:shadow-outline-gray form-input"
                                            placeholder="Number of Results"
                                            value={resultsPerPage}
                                            onChange={(e) => setResultsPerPage(e.target.value)}
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                                            {/* <SearchIcon className="w-5 h-5" aria-hidden="true" /> */}
                                            Results on {`${view}`}
                                        </div>
                                    </div>
                                </Label>
                                <Button size="large" iconLeft={AddIcon} onClick={() => openModal(null, 'add')}>
                                    Thêm danh mục
                                </Button>
                            </div>
                        </div>
                    </div>
                    <TableContainer className="mb-8">
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Tên danh mục</TableCell>
                                    <TableCell>Tạo bởi</TableCell>
                                    <TableCell>Sản phẩm</TableCell>
                                    <TableCell>Thao tác</TableCell>
                                </tr>
                            </TableHeader>
                            <TableBody>
                                {categoriesResult?.map((category, i) => (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <ProductIcon
                                                    className="hidden mr-4 md:block"
                                                    src={category.imagePath}
                                                    alt="Product image"
                                                />
                                                <div>
                                                    <p className="font-semibold">{category.name}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-sm">Quản trị viên</TableCell>

                                        <TableCell className="text-sm text-ellipsis">
                                            {category.description.length > 50
                                                ? category?.description?.slice(50).concat('...')
                                                : category.description}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex">
                                                {/* <Link to={`/categories/${category.id}`}>
                                            <Button icon={EyeIcon} className="mr-3" aria-label="Preview" />
                                        </Link> */}
                                                <Link to={`/categories/${category.id}`}>
                                                    <Button icon={EyeIcon} className="mr-3" aria-label="Preview" />
                                                </Link>
                                                <Button
                                                    icon={EditIcon}
                                                    className="mr-3"
                                                    layout="outline"
                                                    aria-label="Edit"
                                                    onClick={() => openModal(category.id, 'update')}
                                                />

                                                <Button
                                                    icon={TrashIcon}
                                                    layout="outline"
                                                    onClick={() => openModal(category.id, 'del')}
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
                                totalResults={totalResults}
                                resultsPerPage={resultsPerPage}
                                label="Table navigation"
                                onChange={onPageChange}
                            />
                        </TableFooter>
                    </TableContainer>
                </CardBody>
            </Card>

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
                <form onSubmit={AddCategoryForm.handleSubmit}>
                    <ModalHeader className="flex items-center">
                        {' '}
                        <FormTitle>Thêm danh mục</FormTitle>
                    </ModalHeader>
                    <ModalBody>
                        <h3 className="text-xl  font-normal text-gray-600 my-4">Đặt tên danh mục:</h3>

                        <Label className="mb-4 mx-6 w-1/2">
                            <Input
                                placeholder="Nhập vào tên danh mục hiển thị"
                                id="Name"
                                name="Name"
                                value={AddCategoryForm.values.Name}
                                onChange={AddCategoryForm.handleChange}
                            />
                        </Label>
                        <h3 className="text-xl  font-normal text-gray-600 mb-4">Mô tả:</h3>
                        <div className="flex-grow min-h-8 overflow-auto text-sm px-6">
                            <Textarea
                                id="Description"
                                name="Description"
                                value={AddCategoryForm.values.Description}
                                onChange={AddCategoryForm.handleChange}
                                className="mt-1"
                                rows="3"
                                placeholder="Enter some long form content."
                            />
                        </div>
                        <h3 className="text-xl  font-normal text-gray-600 mb-4">Ảnh mô tả:</h3>
                        <div className="flex-grow min-h-8 overflow-auto text-sm px-6">
                            <div className="w-32 h-32 relative  rounded mr-4 mb-4  text-center  flex" onClick={onDivClickLogo}>
                                <div className="w-full h-full   flex items-center">
                                    <input
                                        id="Paths"
                                        name="Paths"
                                        type="file"
                                        className="hidden"
                                        onChange={onImageLogoChange}
                                        ref={inputFileLogo}
                                    />
                                    <img src={imageURLSLogo[imageURLSLogo.length - 1]} alt="" className="rounded" />
                                </div>
                                <div className=" rounded-b absolute bottom-0 w-full h-6 text-medium leading-6 bg-gray-700 opacity-75 hover:bg-gray-500 text-white text-center cursor-pointer">
                                    Sửa
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="w-full flex justify-between flex-row-reverse">
                            <div className="flex ">
                                <div className="ml-4  ">
                                    <Button layout="outline" onClick={() => closeModal('add')}>
                                        Huỷ
                                    </Button>
                                </div>
                                <div className="ml-4 hidden sm:block">
                                    <Button type="submit">Xác nhận</Button>
                                </div>
                            </div>
                        </div>
                    </ModalFooter>
                </form>
            </Modal>
            {/* Update category model */}
            <Modal isOpen={isModalUpdateOpen} onClose={() => closeModal('update')} style={{ width: '1000px' }}>
                <form onSubmit={UpdateCategoryForm.handleSubmit}>
                    <ModalHeader className="flex items-center">
                        {' '}
                        <FormTitle>Thêm danh mục</FormTitle>
                    </ModalHeader>
                    <ModalBody>
                        <h3 className="text-xl  font-normal text-gray-600 my-4">Đặt tên danh mục:</h3>

                        <Label className="mb-4 mx-6 w-1/2">
                            <Input
                                placeholder="Nhập vào tên danh mục hiển thị"
                                id="Id"
                                name="Id"
                                value={UpdateCategoryForm.values.Id}
                                onChange={UpdateCategoryForm.handleChange}
                                className="hidden"
                            />
                            <Input
                                placeholder="Nhập vào tên danh mục hiển thị"
                                id="NameUpdate"
                                name="NameUpdate"
                                value={UpdateCategoryForm.values.NameUpdate}
                                onChange={UpdateCategoryForm.handleChange}
                            />
                        </Label>
                        <h3 className="text-xl  font-normal text-gray-600 mb-4">Mô tả:</h3>
                        <div className="flex-grow min-h-8 overflow-auto text-sm px-6">
                            <Textarea
                                id="DescriptionUpdate"
                                name="DescriptionUpdate"
                                value={UpdateCategoryForm.values.DescriptionUpdate}
                                onChange={UpdateCategoryForm.handleChange}
                                className="mt-1"
                                rows="3"
                                placeholder="Enter some long form content."
                            />
                        </div>
                        <h3 className="text-xl  font-normal text-gray-600 mb-4">Ảnh mô tả:</h3>
                        <div className="flex-grow min-h-8 overflow-auto text-sm px-6">
                            <div className="w-32 h-32 relative  rounded mr-4 mb-4  text-center  flex" onClick={onDivClickLogo}>
                                <div className="w-full h-full   flex items-center">
                                    <input
                                        id="Paths"
                                        name="Paths"
                                        type="file"
                                        className="hidden"
                                        onChange={onImageLogoChange}
                                        ref={inputFileLogo}
                                    />
                                    <img src={imageURLSLogo[imageURLSLogo.length - 1]} alt="" className="rounded" />
                                </div>
                                <div className=" rounded-b absolute bottom-0 w-full h-6 text-medium leading-6 bg-gray-700 opacity-75 hover:bg-gray-500 text-white text-center cursor-pointer">
                                    Sửa
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="w-full flex justify-between flex-row-reverse">
                            <div className="flex ">
                                <div className="ml-4  ">
                                    <Button layout="outline" onClick={() => closeModal('add')}>
                                        Huỷ
                                    </Button>
                                </div>
                                <div className="ml-4 hidden sm:block">
                                    <Button type="submit">Xác nhận</Button>
                                </div>
                            </div>
                        </div>
                    </ModalFooter>
                </form>
            </Modal>

            {/* Product Views */}
        </div>
    );
};

export default ProductsAll;
