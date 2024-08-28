export const NavigationItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Services', link: '/services' },
    { id: 4, name: 'Pricing', link: '/pricing' },
    {
        id: 5,
        name: 'Pages',
        icon: <i className="icon ri-arrow-down-s-fill"></i>,
        PagesInnerLinks: [
            { id: 5.1, name: 'Team', link: '/team' },
            { id: 5.2, name: 'Faq', link: '/faq' },
            { id: 5.3, name: 'Testimonials', link: '/testimonials' },
            { id: 5.4, name: 'Shop', link: '/shop' },
            { id: 5.5, name: 'Blog', link: '/blog' },
        ]
    },
];

export const ShopPageData = [
    {
        id: "1",
        ShopCartImage: require('./img/shop-img1.jpg'),
        ShopCartHeading: "Data Center Rack Space",
        // ShopCartPrice: "",
        ShopCartDiscountPrice: 25.25,
    },
    {
        id: "2",
        ShopCartImage: require('./img/shop-img2.jpg'),
        ShopCartHeading: "Hardware Firewall Appliance",
        // ShopCartPrice: "",
        ShopCartDiscountPrice: 235.25,
    },
    {
        id: "3",
        ShopCartImage: require('./img/shop-img3.jpg'),
        ShopCartHeading: "KVM Over IP Console",
        // ShopCartPrice: "",
        ShopCartDiscountPrice: 45.25,
    },
    {
        id: "4",
        ShopCartImage: require('./img/shop-img4.jpg'),
        ShopCartHeading: "Managed Backup Appliance",
        // ShopCartPrice: "",
        ShopCartDiscountPrice: 11.25,
    },
    {
        id: "5",
        ShopCartImage: require('./img/shop-img5.jpg'),
        ShopCartHeading: "Managed Hosting Service Package",
        ShopCartPrice: 3.25,
        ShopCartDiscountPrice: 2.25,
    },
    {
        id: "6",
        ShopCartImage: require('./img/shop-img6.jpg'),
        ShopCartHeading: "Network Switch",
        ShopCartPrice: 20.50,
        ShopCartDiscountPrice: 18.50,
    },
    {
        id: "7",
        ShopCartImage: require('./img/shop-img7.jpg'),
        ShopCartHeading: "Rack-Mounted Server",
        // ShopCartPrice: "",
        ShopCartDiscountPrice: 18.25,
    },
    {
        id: "8",
        ShopCartImage: require('./img/shop-img8.jpg'),
        ShopCartHeading: "Uninterruptible Power Supply",
        // ShopCartPrice: "",
        ShopCartDiscountPrice: 15.25,
    },
];