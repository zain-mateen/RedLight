
export const ResponsiveNavigationData = [
    { id: 1, name: 'Home', link: '/', },
    { id: 2, name: 'About', link: '/about', },
    { id: 3, name: 'Services', link: '/services', },
    { id: 4, name: 'Pricing', link: '/pricing', },
    {
        id: 5,
        name: 'Pages',
        isDropdown: true,
        dropdownItems: [
            { id: 1, name: 'Team', link: '/team' },
            { id: 2, name: 'Faq', link: '/faq' },
            { id: 3, name: 'Testimonials', link: '/testimonials' },
            { id: 4, name: 'Shop', link: '/shop' },
            { id: 5, name: 'Blog', link: '/blog' },
        ],
    },
];


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

export const HeroSectionCartData = [
    {
        id: 1,
        HeroSectionCartTitle: "VIRTUAL EVENTS",
        HeroSectionCartDescription: "Cum sociis natoque penatibus et magnisd is parturient montes nasc.",
        HeroSectionCartDate: "December 18, 2023",
    },
    {
        id: 2,
        HeroSectionCartTitle: "NEW REPORT",
        HeroSectionCartDescription: "Cum sociis natoque penatibus et magnisd is parturient montes nasc.",
        HeroSectionCartDate: "December 18, 2023",
    },
    {
        id: 3,
        HeroSectionCartTitle: "EXPERT PANEL",
        HeroSectionCartDescription: "Cum sociis natoque penatibus et magnisd is parturient montes nasc.",
        HeroSectionCartDate: "December 18, 2023",
    },
];

export const CompanySectionData = [
    {
        id: 1,
        logoImage: require('./img/companies-logo1.png'),
        companyTitle: 'Craft Company LOGO',
    },
    {
        id: 2,
        logoImage: require('./img/companies-logo2.png'),
        companyTitle: 'Minimum Company LOGO',
    },
    {
        id: 3,
        logoImage: require('./img/companies-logo3.png'),
        companyTitle: 'Hype Company LOGO',
    },
    {
        id: 4,
        logoImage: require('./img/companies-logo4.png'),
        companyTitle: 'Power XR2 Modules Company LOGO',
    },
    {
        id: 5,
        logoImage: require('./img/companies-logo5.png'),
        companyTitle: 'Company LOGO',
    },
    {
        id: 6,
        logoImage: require('./img/companies-logo6.png'),
        companyTitle: 'Hyper Best Company LOGO',
    },
];

export const ChooseUsSectionData = [
    {
        id: 1,
        ChooseUsCartIcon: require('./img/chooseUs-icon1.png'),
        ChooseUsCartHeading: "Security Services",
        ChooseUsCartDescription: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean",
    },
    {
        id: 2,
        ChooseUsCartIcon: require('./img/chooseUs-icon2.png'),
        ChooseUsCartHeading: "Data Privacy",
        ChooseUsCartDescription: "Lorem ipsum dolor sit ametconsectetuer dipiscing elitaenean commodo ligula eget dolor aenean massa",
    },
    {
        id: 3,
        ChooseUsCartIcon: require('./img/chooseUs-icon3.png'),
        ChooseUsCartHeading: "Industry Certified",
        ChooseUsCartDescription: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean",
    },
];

export const CyberSecurityProviderSectionStateCartData = [
    {
        id: 1,
        CyberSecuritySectionStateCartIcon: require('./img/cyber-section-icon1.png'),
        CyberSecuritySectionStateCartHeading: "3,325+",
        CyberSecuritySectionStateCartText: "Global Projects",
    },
    {
        id: 2,
        CyberSecuritySectionStateCartIcon: require('./img/cyber-section-icon2.png'),
        CyberSecuritySectionStateCartHeading: "4,579+",
        CyberSecuritySectionStateCartText: "Clients Protect",
    },
    {
        id: 3,
        CyberSecuritySectionStateCartIcon: require('./img/cyber-section-icon3.png'),
        CyberSecuritySectionStateCartHeading: "100%",
        CyberSecuritySectionStateCartText: "Service Guarantee",
    },
    {
        id: 4,
        CyberSecuritySectionStateCartIcon: require('./img/cyber-section-icon4.png'),
        CyberSecuritySectionStateCartHeading: "7845+",
        CyberSecuritySectionStateCartText: "Experts Team",
    },
];

export const WhatWeOfferSectionData = [
    {
        id: 1,
        ChooseUsCartIcon: require('./img/what-we-offer-section-icon1.png'),
        ChooseUsCartHeading: "Threat Intelligence",
        ChooseUsCartDescription: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean",
    },
    {
        id: 2,
        ChooseUsCartIcon: require('./img/what-we-offer-section-icon2.png'),
        ChooseUsCartHeading: "Security Assessment",
        ChooseUsCartDescription: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean",
    },
    {
        id: 3,
        ChooseUsCartIcon: require('./img/what-we-offer-section-icon3.png'),
        ChooseUsCartHeading: "Compromise Assessment",
        ChooseUsCartDescription: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean",
    },
    {
        id: 4,
        ChooseUsCartIcon: require('./img/what-we-offer-section-icon4.png'),
        ChooseUsCartHeading: "Incident Response",
        ChooseUsCartDescription: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean",
    },
    {
        id: 5,
        ChooseUsCartIcon: require('./img/what-we-offer-section-icon5.png'),
        ChooseUsCartHeading: "CLoud Security",
        ChooseUsCartDescription: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean",
    },
    {
        id: 6,
        ChooseUsCartIcon: require('./img/chooseUs-icon1.png'),
        ChooseUsCartHeading: "Security Training",
        ChooseUsCartDescription: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean",
    },
];

export const FaqSectionData = [
    {
        id: 1,
        KeyNum:"0",
        FaqCartHeading: "How Can I Safely Browse The Internet?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 2,
        KeyNum:"1",
        FaqCartHeading: "How Does Secuvant's Co-managed Security  Model Work?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 3,
        KeyNum:"2",
        FaqCartHeading: "What Type Frequency Of Alerts And Notifications  Will Receive?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 4,
        KeyNum:"3",
        FaqCartHeading: "How Is Our Data Stored And Protected And For  How Long?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
];

export const PricingSectionData = [
    {
        id: 1,
        PricingCartIcon: require('./img/pricing-plan-icon1.png'),
        PricingCartPricingLevel: "Beginner",
        PricingCartPricingRate: "Free",
        PricingCartPricingRateMonth: "/Month",
        PricingCartText1: "30 Days Product Testing",
        PricingCartText2: "Upgrade Anytime Protection",
        PricingCartText3: "500 Malware Removal",
        PricingCartText4: "24/7 Live Assistance",
        PricingCartText5: "Scan Every 12 Hrs",
        PricingCartText6: "Configure Software One-time",
    },
    {
        id: 2,
        PricingCartIcon: require('./img/pricing-plan-icon2.png'),
        PricingCartPricingLevel: "Business",
        PricingCartPricingRate: "$39.99",
        PricingCartPricingRateMonth: "/Month",
        PricingCartText1: "40 Days Product Testing",
        PricingCartText2: "Upgrade Anytime Protection",
        PricingCartText3: "1000 Malware Removal",
        PricingCartText4: "24/7 Live Assistance",
        PricingCartText5: "Scan Every 13 Hrs",
        PricingCartText6: "Configure Software One-time",
    },
    {
        id: 3,
        PricingCartIcon: require('./img/pricing-plan-icon3.png'),
        PricingCartPricingLevel: "Exclusive",
        PricingCartPricingRate: "$47.85",
        PricingCartPricingRateMonth: "/Month",
        PricingCartText1: "50 Days Product Testing",
        PricingCartText2: "Upgrade Anytime Protection",
        PricingCartText3: "Unlimited Malware Removal",
        PricingCartText4: "24/7 Live Assistance",
        PricingCartText5: "Scan Every 14 Hrs",
        PricingCartText6: "Configure Software One-time",
    },
];

export const TeamSectionData = [
    {
        id: 1,
        TeamSectionCartImage: require('./img/team-img1.jpg'),
        TeamSectionCartCreatorName: "Eric T. Parker",
        TeamSectionCartProfession: "Network Security",
        TeamSectionCartDescription: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu.",
        TeamCart_Instagram: "https://www.instagram.com/_saad_ali_02/",
        TeamCart_Facebook: "https://web.facebook.com/zain.mateen.509",
        TeamCart_Twitter: "https://twitter.com/ZainMateen_259",
    },
    {
        id: 2,
        TeamSectionCartImage: require('./img/team-img2.jpg'),
        TeamSectionCartCreatorName: "Shira Rubinoff",
        TeamSectionCartProfession: "Security Executive",
        TeamSectionCartDescription: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu.",
        TeamCart_Instagram: "https://www.instagram.com/_saad_ali_02/",
        TeamCart_Facebook: "https://web.facebook.com/zain.mateen.509",
        TeamCart_Twitter: "https://twitter.com/ZainMateen_259",
    },
    {
        id: 3,
        TeamSectionCartImage: require('./img/team-img3.jpg'),
        TeamSectionCartCreatorName: "Steve Morgan",
        TeamSectionCartProfession: "Security Technologist",
        TeamSectionCartDescription: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu.",
        TeamCart_Instagram: "https://www.instagram.com/_saad_ali_02/",
        TeamCart_Facebook: "https://web.facebook.com/zain.mateen.509",
        TeamCart_Twitter: "https://twitter.com/ZainMateen_259",
    },
];

export const BlogSectionData = [
    {
        id: 1,
        BlogSectionCartImage: require('./img/blog-img1.jpg'),
        BlogSectionCartHeading: "Protect Your Workplace From Cyber Attacks",
        BlogSectionCartDescription: "In an era where technology plays a central role in business operations, the threat of cyber attacks ",
    },
    {
        id: 2,
        BlogSectionCartImage: require('./img/blog-img2.jpg'),
        BlogSectionCartHeading: "The Security Risks Of  Changing Package Owners",
        BlogSectionCartDescription: "In the dynamic landscape of software development, collaboration and code-sharing are common practice",
    },
    {
        id: 3,
        BlogSectionCartImage: require('./img/blog-img3.jpg'),
        BlogSectionCartHeading: "Avoid Mistakes In Social  Media Posts",
        BlogSectionCartDescription: "Social media has become an integral part of our daily lives, providing a platform for individuals an",
    },
];

export const SocialIcons = [
    {
        id: 1,
        icon: <i className="social_icon ri-facebook-fill" />,
    },
    {
        id: 2,
        icon: <i className="social_icon ri-instagram-line" />,
    },
    {
        id: 3,
        icon: <i className="social_icon ri-twitter-fill" />,
    },
    {
        id: 4,
        icon: <i className="social_icon ri-linkedin-fill" />,
    },
];

export const FooterNavigationData = [
    {
        id: 1,
        className: 'col-lg-3 col-md-6 col-sm-6',
        heading: 'Services',
        NavigationItems: [
            { id: 1.1, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'Security Training', link: '/services' },
            { id: 1.2, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'Cloud Security', link: '/services' },
            { id: 1.3, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'Secure Managed IT', link: '/services' },
            { id: 1.4, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'Data Privacy', link: '/services' },
            { id: 1.5, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'Industry Certified', link: '/services' },
            { id: 1.6, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'Threat Intelligence', link: '/services' },
        ]
    },
    {
        id: 2,
        className: 'col-lg-2 col-md-6 col-sm-6',
        heading: 'Support',
        NavigationItems: [
            { id: 2.1, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'Support', link: '/' },
            { id: 2.2, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'Contact Us', link: '/contact-us' },
            { id: 2.3, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'Knowledge Base', link: '/' },
            { id: 2.4, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'About Us', link: '/about' },
            { id: 2.5, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'FAQ', link: '/faq' },
            { id: 2.6, icon: <i className="icon ri-arrow-right-s-fill"></i>, name: 'Partnerships', link: '/pricing' },
        ]
    },
];

export const FooterContactData = [
    {
        id: 1,
        heading: 'Email:',
        text: 'zainmateen259@gmail.com',
        link: 'mailto:zainmateen259@gmail.com',
    },
    {
        id: 2,
        heading: 'Phone:',
        text: '0322-1713121',
        link: 'tel:03221713121',
    },
    {
        id: 3,
        heading: 'Address:',
        text: 'King Street Melbourne, 3000, Australia',
        link: null,
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

export const BlogPageData = [
    {
        id: 'Avoid-Mistakes-In-Social-Media-Posts',
        BlogPageCartImage: require('./img/blog-img3.jpg'),
        BlogPageCartHeading: "Avoid Mistakes In Social Media Posts",
        BlogPageCartAuthorName: "Zain Mateen",
        BlogPageCartBlogDate: "December 12, 2023",
        BlogPageCartDescription: "Social media has become an integral part of our daily lives, providing a platform for individuals and businesses to connect, share content, and engage with their audience. However, the fast-paced nature of social media can sometimes lead to mistakes that can impact reputation, credibility, and engagement. In this article, we'll explore common mistakes in social […]",
    },
    {
        id: 'The-Security-Risks-Of-Changing-Package-Owners',
        BlogPageCartImage: require('./img/blog-img2.jpg'),
        BlogPageCartHeading: "The Security Risks Of Changing Package Owners",
        BlogPageCartAuthorName: "Zain Mateen",
        BlogPageCartBlogDate: "December 16, 2023",
        BlogPageCartDescription: "In the dynamic landscape of software development, collaboration and code-sharing are common practices. As projects evolve, it's not uncommon for package ownership to change hands. While such transitions can be necessary for the growth and sustainability of open-source projects, they come with inherent security risks. This article explores the potential security challenges associated with changing […]",
    },
    {
        id: 'Protect-Your-Workplace-From-Cyber-Attacks',
        BlogPageCartImage: require('./img/blog-img1.jpg'),
        BlogPageCartHeading: "Protect Your Workplace From Cyber Attacks",
        BlogPageCartAuthorName: "Zain Mateen",
        BlogPageCartBlogDate: "December 24, 2023",
        BlogPageCartDescription: "In an era where technology plays a central role in business operations, the threat of cyber attacks looms large. Protecting your workplace from these attacks has become a paramount concern for organizations of all sizes. As businesses increasingly rely on digital tools and interconnected networks, the need for robust cybersecurity measures has never been more […]",
    },
];

export const FaqPageData = [
    {
        id: 1,
        KeyNum:"0",
        FaqCartHeading: "How Can I Safely Browse The Internet?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 2,
        KeyNum:"1",
        FaqCartHeading: "How Does Secuvant's Co-managed Security  Model Work?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 3,
        KeyNum:"2",
        FaqCartHeading: "What Type Frequency Of Alerts And Notifications  Will Receive?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 4,
        KeyNum:"3",
        FaqCartHeading: "How Is Our Data Stored And Protected And For  How Long?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 5,
        KeyNum:"4",
        FaqCartHeading: "How Can I Safely Browse The Internet?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
];

export const FaqPageSecondData = [
    {
        id: 1,
        KeyNum:"0",
        FaqCartHeading: "How Can I Safely Browse The Internet?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 2,
        KeyNum:"1",
        FaqCartHeading: "How Does Secuvant's Co-managed Security  Model Work?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 3,
        KeyNum:"2",
        FaqCartHeading: "What Type Frequency Of Alerts And Notifications  Will Receive?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 4,
        KeyNum:"3",
        FaqCartHeading: "How Is Our Data Stored And Protected And For  How Long?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
];

export const FaqPageThirdData = [
    {
        id: 1,
        KeyNum:"9",
        FaqCartHeading: "How Is Our Data Stored And Protected And For  How Long?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 2,
        KeyNum:"8",
        FaqCartHeading: "What Type Frequency Of Alerts And Notifications  Will Receive?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 3,
        KeyNum:"7",
        FaqCartHeading: "How Does Secuvant's Co-managed Security  Model Work?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
    {
        id: 4,
        KeyNum:"6",
        FaqCartHeading: "How Can I Safely Browse The Internet?",
        FAQCartDesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massaIn enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu.",
    },
];

export const TeamPageData = [
    {
        id: 1,
        TeamSectionCartImage: require('./img/team-img1.jpg'),
        TeamSectionCartCreatorName: "Eric T. Parker",
        TeamSectionCartProfession: "Network Security",
        TeamSectionCartDescription: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu.",
        TeamCart_Instagram: "https://www.instagram.com/_saad_ali_02/",
        TeamCart_Facebook: "https://web.facebook.com/zain.mateen.509",
        TeamCart_Twitter: "https://twitter.com/ZainMateen_259",
    },
    {
        id: 2,
        TeamSectionCartImage: require('./img/team-img2.jpg'),
        TeamSectionCartCreatorName: "Shira Rubinoff",
        TeamSectionCartProfession: "Security Executive",
        TeamSectionCartDescription: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu.",
        TeamCart_Instagram: "https://www.instagram.com/_saad_ali_02/",
        TeamCart_Facebook: "https://web.facebook.com/zain.mateen.509",
        TeamCart_Twitter: "https://twitter.com/ZainMateen_259",
    },
    {
        id: 3,
        TeamSectionCartImage: require('./img/team-img3.jpg'),
        TeamSectionCartCreatorName: "Steve Morgan",
        TeamSectionCartProfession: "Security Technologist",
        TeamSectionCartDescription: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu.",
        TeamCart_Instagram: "https://www.instagram.com/_saad_ali_02/",
        TeamCart_Facebook: "https://web.facebook.com/zain.mateen.509",
        TeamCart_Twitter: "https://twitter.com/ZainMateen_259",
    },
    {
        id: 4,
        TeamSectionCartImage: require('./img/team-img4.jpg'),
        TeamSectionCartCreatorName: "Joannie Lebsack",
        TeamSectionCartProfession: "Cyber Security",
        TeamSectionCartDescription: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu.",
        TeamCart_Instagram: "https://www.instagram.com/_saad_ali_02/",
        TeamCart_Facebook: "https://web.facebook.com/zain.mateen.509",
        TeamCart_Twitter: "https://twitter.com/ZainMateen_259",
    },
    {
        id: 5,
        TeamSectionCartImage: require('./img/team-img5.jpg'),
        TeamSectionCartCreatorName: "Marty Schaefer",
        TeamSectionCartProfession: "Cloud Security",
        TeamSectionCartDescription: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu.",
        TeamCart_Instagram: "https://www.instagram.com/_saad_ali_02/",
        TeamCart_Facebook: "https://web.facebook.com/zain.mateen.509",
        TeamCart_Twitter: "https://twitter.com/ZainMateen_259",
    },
    {
        id: 6,
        TeamSectionCartImage: require('./img/team-img6.jpg'),
        TeamSectionCartCreatorName: "Rebeka Gaylord",
        TeamSectionCartProfession: "Web Security",
        TeamSectionCartDescription: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu.",
        TeamCart_Instagram: "https://www.instagram.com/_saad_ali_02/",
        TeamCart_Facebook: "https://web.facebook.com/zain.mateen.509",
        TeamCart_Twitter: "https://twitter.com/ZainMateen_259",
    },
];

export const TestimonialPageData = [
    {  
        id: 1,
        TestimonialCartCreatorProfileImage: require('./img/testimonial-img1.png'),
        TestimonialCartHeading: "Spencer Simpson",
        TestimonialCartProfession: "CEO - Company",
        TestimonialCartDescription: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes",
    },
    {  
        id: 2,
        TestimonialCartCreatorProfileImage: require('./img/testimonial-img1.png'),
        TestimonialCartHeading: "Spencer Simpson",
        TestimonialCartProfession: "CEO - Company",
        TestimonialCartDescription: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes",
    },
    {  
        id: 3,
        TestimonialCartCreatorProfileImage: require('./img/testimonial-img1.png'),
        TestimonialCartHeading: "Spencer Simpson",
        TestimonialCartProfession: "CEO - Company",
        TestimonialCartDescription: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes",
    },
    {  
        id: 4,
        TestimonialCartCreatorProfileImage: require('./img/testimonial-img1.png'),
        TestimonialCartHeading: "Spencer Simpson",
        TestimonialCartProfession: "CEO - Company",
        TestimonialCartDescription: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes",
    },
    {  
        id: 5,
        TestimonialCartCreatorProfileImage: require('./img/testimonial-img1.png'),
        TestimonialCartHeading: "Spencer Simpson",
        TestimonialCartProfession: "CEO - Company",
        TestimonialCartDescription: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes",
    },
    {  
        id: 6,
        TestimonialCartCreatorProfileImage: require('./img/testimonial-img1.png'),
        TestimonialCartHeading: "Spencer Simpson",
        TestimonialCartProfession: "CEO - Company",
        TestimonialCartDescription: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes",
    },
];

export const AboutListData = [
    {
        id: 1,
        iconClass: "ri-shield-star-fill",
        text: "Website Security Services",
    },
    {
        id: 2,
        iconClass: "ri-shield-star-fill",
        text: "SIEM Threat Detection",
    },
    {
        id: 3,
        iconClass: "ri-shield-star-fill",
        text: "Content Delivery Network",
    },
    {
        id: 4,
        iconClass: "ri-shield-star-fill",
        text: "24/7 Hours services",
    },
    {
        id: 5,
        iconClass: "ri-shield-star-fill",
        text: "Security Management",
    },
    {
        id: 6,
        iconClass: "ri-shield-star-fill",
        text: "Instant Malware Removal",
    },
    {
        id: 7,
        iconClass: "ri-shield-star-fill",
        text: "Website Hack Repair",
    },
    {
        id: 8,
        iconClass: "ri-shield-star-fill",
        text: "Instant Malware Removal",
    },
];

export const TestimonialData = [
    {
        id: 1,
        profileImage: require('./img/testimonial-img1.png'), 
        heading: "Spencer Simpson",
        profession: "CEO - Company",
        description: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes",
    },
    {
        id: 2,
        profileImage: require('./img/testimonial-img1.png'),
        heading: "Spencer Simpson",
        profession: "CEO - Company",
        description: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes",
    },
    {
        id: 3,
        profileImage: require('./img/testimonial-img1.png'),
        heading: "Spencer Simpson",
        profession: "CEO - Company",
        description: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes",
    },
    {
        id: 4,
        profileImage: require('./img/testimonial-img1.png'),
        heading: "Spencer Simpson",
        profession: "CEO - Company",
        description: "Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes",
    },
];

export const BlogPostData = [
    {
        id: 1,
        text: "Avoid Mistakes In Social Media Posts",
    },
    {
        id: 2,
        text: "The Security Risks Of Changing Package Owners",
    },
    {
        id: 3,
        text: "Protect Your Workplace From Cyber Attacks",
    },
];

export const BlogArchiveData = [
    { id: 1, month: "November 2022" },
    { id: 2, month: "February 2023" },
    { id: 3, month: "April 2023" },
    { id: 4, month: "September 2023" },
    { id: 5, month: "December 2023" },
];

export const BlogCategoryData = [
    { id: 1, category: "Social Media" },
    { id: 2, category: "Ethical Hacking" },
    { id: 3, category: "Cyber Attack" },
    { id: 4, category: "Security" },
    { id: 5, category: "Recover Hacked Accounts" },
    { id: 6, category: "Youtube Monetization" },
    { id: 7, category: "Facebook Monetization" },
    { id: 8, category: "Instagram Monetization" },
];

export const BlogArticleData = {
    title: "Avoid Mistakes In Social Media Posts",
    introduction: "Social media has become an integral part of our daily lives, providing a platform for individuals and businesses to connect, share content, and engage with their audience. However, the fast-paced nature of social media can sometimes lead to mistakes that can impact reputation, credibility, and engagement. In this article, we’ll explore common mistakes in social media posts and provide tips on how to avoid them.",
    sections: [
        {
            id: 1,
            subHeading: "1. Spelling and Grammar Errors:",
            description: "Mistakes in spelling and grammar can quickly diminish the credibility of your social media posts. They create the impression of carelessness and lack of professionalism. It’s essential to proofread your content before publishing to ensure accuracy.",
            tips: [
                "Use tools like Grammarly or built-in spell checkers to catch errors.",
                "Have a colleague review important posts before publishing."
            ]
        },
        {
            id: 2,
            subHeading: "2. Ignoring Brand Voice Consistency:",
            description: "Maintaining a consistent brand voice helps establish a strong and recognizable identity on social media. Inconsistencies in tone, style, or messaging can confuse your audience and dilute your brand.",
            tips: [
                "Create a brand style guide that outlines your voice, tone, and preferred language.",
                "Regularly review and update your guide to reflect any changes in brand strategy."
            ]
        },
        {
            id: 3,
            subHeading: "3. Overlooking Visual Quality:",
            description: "Visual content is a powerful tool on social media, but poor-quality images or graphics can detract from your message. Blurry or pixelated visuals may convey unprofessionalism and hinder engagement.",
            tips: [
                "Use high-resolution images and graphics.",
                "Leverage design tools or hire a professional graphic designer for polished visuals."
            ]
        },
        {
            id: 4,
            subHeading: "4. Neglecting Audience Engagement:",
            description: "Ignoring comments, messages, or mentions from your audience can be detrimental to your social media strategy. It shows a lack of engagement and may result in a decline in follower interaction.",
            tips: [
                "Set aside time each day to respond to comments and messages.",
                "Encourage conversations by asking questions or seeking opinions."
            ]
        },
        {
            id: 5,
            subHeading: "5. Excessive Self-Promotion:",
            description: "While promoting your products or services is essential, excessive self-promotion can turn off your audience. Social media is about building relationships and providing value, not just broadcasting sales messages.",
            tips: [
                "Follow the 80/20 rule - 80% of content should be informative, entertaining, or educational, and 20% can be promotional.",
                "Showcase customer testimonials or user-generated content to add authenticity."
            ]
        },
        {
            id: 6,
            subHeading: "6. Neglecting Hashtag Strategy:",
            description: "Using hashtags without a strategy can diminish the reach and effectiveness of your posts. Overloading with irrelevant or excessive hashtags can be counterproductive.",
            tips: [
                "Research and use relevant, trending, and industry-specific hashtags.",
                "Keep the number of hashtags moderate - quality over quantity."
            ]
        },
        {
            id: 7,
            subHeading: "7. Ignoring Analytics and Insights:",
            description: "Failing to analyze the performance of your social media posts means missing valuable insights. Metrics such as engagement, reach, and click-through rates help refine your strategy for better results.",
            tips: [
                "Regularly review analytics provided by social media platforms.",
                "Use insights to refine content, posting times, and engagement strategies."
            ]
        },
    ],
    conclusion: "Avoiding mistakes in social media posts requires a combination of careful planning, consistent execution, and ongoing evaluation. By paying attention to details, maintaining brand consistency, engaging with your audience, and leveraging analytics, you can enhance the effectiveness of your social media presence. Remember, social media is a dynamic environment, and adapting to changes while staying true to your brand identity is key to long-term success."
};


export const ContactPageData = [
    {
        id: 1,
        icon: (
            <svg className='icon' aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path>
            </svg>
        ),
        heading: "Where We Are:",
        text: "121 King Street Melbourne, 3000, Australia"
    },
    {
        id: 2,
        icon: (
            <svg className='icon' aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
            </svg>
        ),
        heading: "Phone:",
        text: (
            <>
                <a className='contact_link_text heading-m' href='tel:03221713121'>03221713121</a>
                <p className='contact_link_line heading-l'>|</p>
                <a className='contact_link_text heading-m' href='tel:03471883772'>03471883772</a>
            </>
        )
    },
    {
        id: 3,
        icon: (
            <svg className='icon' aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
            </svg>
        ),
        heading: "Email:",
        text: (
            <>
                <a className='contact_link_text heading-m' href='mailto:zainmateen259@gmail.com'>zainmateen259@gmail.com</a>
                <p className='contact_link_line heading-l'>|</p>
                <a className='contact_link_text heading-m' href='mailto:zaini_2223@yahoo.com'>zaini_2223@yahoo.com</a>
            </>
        )
    }
];
