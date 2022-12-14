import React from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { NavLink } from 'react-router-dom';
import Icon from '../../components/Icon';
import { HomeIcon, AddIcon, PublishIcon, TrashIcon, RightArrow, StoreIcon } from '../../icons';
import { Card, CardBody, Label, Input, Textarea, Button, Select, Modal, ModalHeader, ModalBody, ModalFooter } from '@windmill/react-ui';
import { useState, useEffect, useRef } from 'react';
import * as apiService from '../../services/apiService';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormTitle = ({ children }) => {
    return <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};

const AddProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDeleteProduct, setSelectedDeleteProduct] = useState(null);
    async function openModal(productId) {
        // let product = await data.filter((product) => product.id === productId)[0];
        // console.log(product);
        // setSelectedDeleteProduct(product);
        setIsModalOpen(true);
    }
    function closeModal() {
        setIsModalOpen(false);
    }
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
        // setSelected(result);
        // AddProductForm.values.CategoryId = result;
        setCategories2(data);
    };
    const fetchApi3 = (result) => {
        setSelected(result);
        AddProductForm.values.CategoryId = result;
    };

    const [selected, setSelected] = useState();

    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);
    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];

        AddProductForm.values.Paths = images;
        console.log(AddProductForm.values.Paths);

        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);
    const isValidFileUploaded = (file) => {
        const validExtensions = ['png', 'jpeg', 'jpg'];
        const fileExtension = file.type.split('/')[1];

        return validExtensions.includes(fileExtension);
    };
    function onImageChange(e) {
        const files = e.target.files;
        let check;
        for (let i = 0; i < e.target.files.length; i++) {
            if (isValidFileUploaded(files[i])) {
                check = true;
            } else {
                check = false;
                break;
            }
        }
        if (files.length < 9 && check) {
            if (images.concat([...e.target.files]).length <= 9) {
                const data = images.concat([...e.target.files]);
                setImages(data);
            } else {
                alert('Over the allowed file amount');
            }
        } else {
            alert('File invalid');
        }
    }
    const inputFile = useRef(null);
    const onDivClick = () => {
        inputFile.current.click();
    };

    const [errorResponse, setErrorResponse] = useState('');
    const AddProductForm = useFormik({
        initialValues: {
            CategoryId: null,
            // ShopId: null,
            Name: '',
            Price: null,
            Description: '',
            Size: '',
            // Quantity: null,
            Paths: [],
        },
        validationSchema: Yup.object({
            // CategoryId: Yup.string().required('B???t bu???c!'),
            // Name: Yup.string().required('B???t bu???c!'),
            // Price: Yup.string().required('B???t bu???c!'),
            // Description: Yup.string().required('B???t bu???c!'),
            // Size: Yup.string().required('B???t bu???c!'),
            // Quantity: Yup.string().required('B???t bu???c!'),
            // Paths: Yup.string().required('B???t bu???c!'),
        }),
        onSubmit: (values) => {
            const newProduct = {
                CategoryId: values.CategoryId.id,
                Name: values.Name,
                Price: values.Price,
                Description: values.Description,
                Size: values.Size,
                // Quantity: null,
                Paths: images,
            };
            console.log('submit', newProduct);
            // const fetchApi = async () => {
            //     // const res = await loginUser(newUser, dispatch, navigate);
            //     const res = 1;
            //     setErrorResponse(res);
            // };
            // fetchApi();
        },
    });
    return (
        <div>
            <PageTitle>Th??m M???i S???n Ph???m</PageTitle>

            {/* Breadcum */}
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Admin
                    </NavLink>
                </div>
                {'>'}
                <p className="mx-2">Th??m M???i S???n Ph???m</p>
            </div>

            <div className="w-full mt-8 grid gap-4 grid-col md:grid-cols-3 ">
                <Modal isOpen={isModalOpen} onClose={closeModal} style={{ width: '1000px' }}>
                    <ModalHeader className="flex mb-8 text-3xl ">
                        {/* <div className="flex items-center"> */}
                        {/* <Icon icon={TrashIcon} className="w-6 h-6 mr-3" /> */}
                        Ch???nh s???a ng??nh h??ng
                        {/* </div> */}
                    </ModalHeader>
                    <ModalBody className="max-w-7xl max-h-96">
                        {/* Make sure you want to delete product{" "}
            {selectedDeleteProduct && `"${selectedDeleteProduct.name}"`} */}
                        <div className="flex-grow min-h-8 overflow-auto text-sm px-6">
                            <div className="rounded p-4 bg-gray-100">
                                <div className="relative overflow-hidden  rounded">
                                    <div className="py-3 relative w-96 flex bg-white">
                                        <ul className=" h-80 flex-1">
                                            {categoriesResult?.map((result, i) => (
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
                                        <ul className=" h-80 flex-1">
                                            {categories2?.map((result, i) => (
                                                <li
                                                    key={result.id}
                                                    className="my-2 flex justify-between leading-8 items-center px-4 hover:bg-gray-100"
                                                    onClick={() => fetchApi3(result)}
                                                >
                                                    <p className="text-sm font-semibold leading-8 text-ellipsis">{result.name}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="w-full flex justify-between">
                            <div className="leading-5">
                                <span className="mr-1">???? ch???n :</span>
                                <span className="ml-1">{selected?.name}</span>
                            </div>
                            <div className="flex">
                                <div className="ml-4 ">
                                    <Button block layout="outline" onClick={closeModal}>
                                        HU???
                                    </Button>
                                </div>
                                <div className="ml-4 hidden sm:block">
                                    <Button onClick={closeModal}>X??c nh???n</Button>
                                </div>
                            </div>
                        </div>
                    </ModalFooter>
                </Modal>

                <Card className="row-span-4 md:col-span-4 ">
                    <form onSubmit={AddProductForm.handleSubmit}>
                        <CardBody>
                            <FormTitle>H??nh ???nh s???n ph???m</FormTitle>
                            <div className="w-full flex flex-wrap">
                                {imageURLS?.map((imageSrc, i) => (
                                    <div key={i} className="w-20 h-20 rounded mr-4 mb-4">
                                        <div className="w-full h-full ">
                                            <img src={imageSrc} alt="not fount" className="w-20 h-20 rounded border " />
                                        </div>
                                    </div>
                                ))}

                                <div className="w-20 h-20 rounded mr-4 mb-4  text-center  flex">
                                    <div
                                        onClick={onDivClick}
                                        className="w-full h-full rounded border border-dashed border-slate-600 flex items-center hover:bg-orange-100"
                                    >
                                        <input
                                            id="Paths"
                                            name="Paths"
                                            // value={AddProductForm.values.Paths}
                                            type="file"
                                            multiple={true}
                                            className="hidden"
                                            onChange={onImageChange}
                                            ref={inputFile}
                                        />
                                        <div className="flex text-orange-600 flex-col   ">
                                            <div className="h-6">
                                                <i className="w-6 h-6 inline-block fill-current">
                                                    <svg viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.5 0A1.5 1.5 0 0 1 20 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 0 1 .958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 0 1 .96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0 0 14.053 18H2a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 2 0h16.5z"></path>
                                                        <path d="M6.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM18.5 14.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V18h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25z"></path>
                                                    </svg>
                                                </i>
                                            </div>
                                            <div className="leading-3 text-xs">Th??m h??nh ???nh ({imageURLS.length}/9)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FormTitle>T??n s???n ph???m</FormTitle>
                            <Label>
                                <Input
                                    id="Name"
                                    name="Name"
                                    value={AddProductForm.values.Name}
                                    onChange={AddProductForm.handleChange}
                                    className="mb-4"
                                    placeholder="Nh???p v??o"
                                />
                            </Label>
                            <FormTitle>Danh m???c</FormTitle>
                            <Label>
                                <Input
                                    id="CategoryId"
                                    name="CategoryId"
                                    value={AddProductForm.values.CategoryId?.name}
                                    onChange={AddProductForm.handleChange}
                                    // value={selected?.name}
                                    onClick={() => openModal('1')}
                                    className="mb-4"
                                    placeholder="Ch???n danh m???c"
                                    readOnly
                                />
                            </Label>
                            <FormTitle>Size</FormTitle>
                            <Label>
                                <Input
                                    id="Size"
                                    name="Size"
                                    value={AddProductForm.values.Size}
                                    onChange={AddProductForm.handleChange}
                                    className="mb-4"
                                    placeholder="Nh???p size"
                                />
                            </Label>
                            <FormTitle>M?? t??? s???n ph???m</FormTitle>
                            <Label>
                                <Textarea
                                    id="Description"
                                    name="Description"
                                    value={AddProductForm.values.Description}
                                    onChange={AddProductForm.handleChange}
                                    className="mb-4"
                                    rows="6"
                                />
                            </Label>
                            <FormTitle>Gi??</FormTitle>
                            <Label>
                                <Input
                                    id="Price"
                                    name="Price"
                                    value={AddProductForm.values.Price}
                                    onChange={AddProductForm.handleChange}
                                    type="number"
                                    className="mb-4 "
                                    placeholder="Nh???p v??o"
                                />
                            </Label>

                            <div className="w-full">
                                <Button type="submit" size="large" iconLeft={AddIcon}>
                                    Th??m s???n ph???m
                                </Button>
                            </div>
                        </CardBody>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddProduct;
