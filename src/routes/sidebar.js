/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
    // {
    //     path: '/dashboard', // the url
    //     icon: 'HomeIcon', // the component being exported from icons/index.js
    //     name: 'Trang chủ', // name that appear in Sidebar
    // },
    {
        path: '/manage-profile',
        icon: 'UserIcon',
        name: 'Quản lý người dùng',
    },
    {
        path: '/credentials',
        icon: 'KeyPerson',
        name: 'Quản lý phân quyền',
    },
    {
        icon: 'CategoryIcon',
        name: 'Danh mục',
        path: '/all-categories',
        // routes: [
        //     {
        //         icon: 'CategoryIcon',
        //         name: 'Quản lý danh mục',
        //     },
        //     {
        //         path: '/add-product',
        //         name: 'Thêm danh mục',
        //     },
        // ],
    },
    {
        icon: 'Wallet',
        name: 'Tài chính',
        path: '/finance',
    },
    // {
    //     path: '/static',
    //     icon: 'StatIcon',
    //     name: 'Chỉ số',
    // },
    {
        path: '/logout',
        icon: 'OutlineLogoutIcon',
        name: 'Đăng xuất',
    },

    // {
    //     path: '/orders',
    //     icon: 'CartIcon',
    //     name: 'Quản lý đơn hàng',
    // },
    // {
    //     // path: "/categories",
    //     icon: 'CategoryIcon',
    //     name: 'Quản lý danh mục',
    //     path: '/all-categories',
    // },

    // {
    //   path: "/chats",
    //   icon: "ChatIcon",
    //   name: "Chats",
    // },

    // {
    //     path: '/settings',
    //     icon: 'OutlineCogIcon',
    //     name: 'Cài đặt',
    //     routes: [
    //         {
    //             path: '/all-products',
    //             name: 'Tất cả sản phẩm',
    //         },
    //         {
    //             path: '/add-product',
    //             name: 'Thêm sản phẩm',
    //         },
    //     ],
    // },
];

export default routes;
