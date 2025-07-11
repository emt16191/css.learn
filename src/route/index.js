const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    page: {
      title: 'Welcome to Jf World',
    },
  })
})

router.get('/selector', function (req, res) {
  res.render('selector', {
    layout: 'selectors',
    page: {
      title: 'Selector-1 Page',
    },
  })
})

router.get('/selector2', function (req, res) {
  res.render('selector2', {
    layout: 'selectors',
    page: {
      title: 'Selector-2 Page',
    },
  })
})

router.get('/selector3', function (req, res) {
  res.render('selector3', {
    layout: 'selectors',
    page: {
      title: 'Selector-3 Page',
    },
  })
})

router.get('/selector4', function (req, res) {
  res.render('selector4', {
    layout: 'selectors',
    page: {
      title: 'Selector-4 Page',
    },
  })
})

router.get('/colors', function (req, res) {
  res.render('colors', {
    layout: 'colors',
    page: {
      title: 'Colors Page',
    },
  })
})

router.get('/work-page', function (req, res) {
  res.render('work-page', {
    layout: 'work-page',
    page: {
      title: 'Work Page',
    },
  })
})

router.get('/template-1', function (req, res) {
  res.render('template-1', {
    layout: 'template-1',
    page: {
      title: 'Template-1 Page',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],
    hero: {
      title: 'Pricing',
      text: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.",
    },
    plans: [
      {
        name: 'Free',
        price: 0,
        features: [
          '10 users included',
          '2 GB of storage',
          'Email support',
          'Help center access',
        ],
        button: 'Sign up for free',
      },
      {
        name: 'Pro',
        price: 15,
        features: [
          '20 users included',
          '4 GB of storage',
          'Priority email support',
          'Help center access',
        ],
        button: 'Get started',
      },
      {
        name: 'Enterprise',
        price: 30,
        features: [
          '30 users included',
          '15 GB of storage',
          'Phone and email support',
          'Help center access',
        ],
        button: 'Contact us',
      },
    ],
    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
})

router.get('/template-2', function (req, res) {
  res.render('template-2', {
    layout: 'template-2',
    page: {
      title: 'Template-2 Page',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],
    hero: {
      title: 'Pricing',
      text: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.",
      button: {
        text: 'Get started',
        url: 'https://example.com/get-started',
      },
    },
    preview: [
      {
        date: 'Oct 24',
        title: 'Latest post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 1,
            text: 'World',
          },
          {
            id: 3,
            text: 'Hot',
          },
        ],
      },
      {
        date: 'Oct 26',
        title: 'Featured story',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 2,
            text: 'Sport',
          },
        ],
      },
      {
        date: 'Oct 28',
        title: 'Popular post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 3,
            text: 'Hot',
          },
        ],
      },
      {
        date: 'Oct 30',
        title: 'Trending topic',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 4,
            text: 'Fashion',
          },
        ],
      },
    ],
    categories: [
      {
        id: 1,
        text: 'World',
      },
      {
        id: 2,
        text: 'Sport',
      },
      {
        id: 3,
        text: 'Hot',
      },
      {
        id: 4,
        text: 'Fashion',
      },
    ],
    news: [
      {
        title: 'New blog post',
        date: 'February 14',
        author: 'John',
        description:
          'This blog post discusses various topics related to web development and design, including best practices and emerging trends.',
      },
      {
        title: 'Latest blog post',
        date: 'March 1',
        author: 'Emily',
        description:
          'This blog post covers a range of topics, from productivity tips to personal development strategies, with the aim of helping readers lead more fulfilling lives.',
      },
      {
        title: 'Popular blog post',
        date: 'April 7',
        author: 'David',
        description:
          'This blog post focuses on the importance of networking and building relationships in business, providing tips and insights for professionals of all levels.',
      },
      {
        title: 'Top blog post',
        date: 'May 12',
        author: 'Sophie',
        description:
          'This blog post examines the latest trends and innovations in the field of marketing, with a particular focus on social media and content marketing strategies.',
      },
    ],
    about:
      'We are a dynamic team of experienced journalists, dedicated to delivering the latest news and up-to-date analysis on a range of topics. With our finger on the pulse of global affairs, we strive to provide an objective and insightful perspective on the events shaping our world. Our team comprises individuals with diverse backgrounds and expertise, allowing us to provide comprehensive coverage across all sectors.',
    archive: [
      {
        text: 'March 2014',
        url: 'https://example.com/march-2014',
      },
      {
        text: 'February 2014',
        url: 'https://example.com/february-2014',
      },
      {
        text: 'January 2014',
        url: 'https://example.com/january-2014',
      },
      {
        text: 'December 2013',
        url: 'https://example.com/december-2013',
      },
      {
        text: 'November 2013',
        url: 'https://example.com/november-2013',
      },
      {
        text: 'October 2013',
        url: 'https://example.com/october-2013',
      },
      {
        text: 'September 2013',
        url: 'https://example.com/september-2013',
      },
    ],
    social: [
      {
        text: 'Instagram',
        url: 'https://www.instagram.com/',
      },
      {
        text: 'Facebook',
        url: 'https://www.facebook.com/',
      },
      {
        text: 'Google',
        url: 'https://www.instagram.com/',
      },
    ],
    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
})

router.get('/template-3', function (req, res) {
  res.render('template-3', {
    layout: 'template-3',
    page: {
      title: 'Template-3 Page',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],

    hero: {
      title:
        'First featurette heading. It’ll blow your mind.',
      text: 'Some great placeholder content for the first featurette here. Imagine some exciting prose here.',
      photo: 'https://picsum.photos/500/500',
      left: '<',
      right: '>',
    },

    blog: [
      {
        title: 'Latest post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        button: 'View details',
        href: 'https://example.com/',
        img: 'https://picsum.photos/140/140',
      },
      {
        title: 'Featured story',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        button: 'View details',
        href: 'https://example.com/',
        img: 'https://picsum.photos/140/140',
      },
      {
        title: 'Popular post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        button: 'View details',
        href: 'https://example.com/',
        img: 'https://picsum.photos/140/140',
      },
    ],

    form: {
      title: 'Sign up form',
      info: 'Some placeholder content in a paragraph below the heading and date.',
      button: 'Sign up',
      href: 'https://example.com/',
    },

    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
})

router.get('/template-4', function (req, res) {
  res.render('template-4', {
    layout: 'template-4',
    page: {
      title: 'Template-4 Page',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],

    main: {
      heading: 'Oh yeah, it’s that good. See for yourself.',
      description:
        'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.',
      image: 'https://picsum.photos/500/500',
      button: 'View details',
      href: 'https://example.com/',
    },

    featured: [
      {
        heading: 'Featured title',
        info: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
        linkText: 'Call to action',
        linkUrl: 'https://example.com/',
        photo: 'https://picsum.photos/64/64',
      },
      {
        heading: 'Featured title',
        info: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        linkText: 'Call to action',
        linkUrl: 'https://example.com/',
        photo: 'https://picsum.photos/64/64',
      },
      {
        heading: 'Featured title',
        info: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        linkText: 'Call to action',
        linkUrl: 'https://example.com/',
        photo: 'https://picsum.photos/64/64',
      },
    ],

    actions: [
      {
        heading: 'Checkout form',
        text: 'Checkout',
        url: 'https://example.com/',
      },
      {
        heading: 'Login form',
        text: 'Login',
        url: 'https://example.com/',
      },
      {
        heading: 'Sign up form',
        text: 'Sign up',
        url: 'https://example.com/',
      },
    ],

    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
})

router.get('/template-5', function (req, res) {
  res.render('template-5', {
    layout: 'template-5',
    page: {
      title: 'Template-5 Page',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],

    form: {
      title: 'Please sign in',

      inputs: [
        {
          id: 1,
          name: 'emailAddress',
          placeholder: 'Email address',
          type: 'email',
        },
        {
          id: 2,
          name: 'userPassword',
          placeholder: 'Password',
          type: 'password',
        },
      ],

      checkbox: {
        label: 'Remember me',
        name: 'remember',
      },

      button: 'Sign in',

      info: 'Stay updated on new releases and features, guides, and case studies.',
    },

    messages: {
      title: 'List groups',
      list: [
        {
          name: 'Tom',
          message:
            'I just got back from a trip to Europe. It was amazing!...',
          day: 'Tue',
        },
        {
          name: 'Emily',
          message:
            "I can't wait for the weekend. I'm planning to go hiking with some friends...",
          day: 'Wed',
        },
      ],
    },

    advantages: [
      {
        title: '24/7 Availability',
        text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.',
      },
      {
        title: '10 Years of Expertise',
        text: 'Fill out all required fields using real data on the checkout page.',
      },
      {
        title: 'Loyalty Program',
        text: 'While you were paying, we had already prepared access to our Member Area, where you can read more about the status of your order.',
      },
      {
        title: '24/7 Availability',
        text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.',
      },
      {
        title: '10 Years of Expertise',
        text: 'Fill out all required fields using real data on the checkout page.',
      },
      {
        title: 'Loyalty Program',
        text: 'While you were paying, we had already prepared access to our Member Area, where you can read more about the status of your order.',
      },
    ],

    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
})

router.get('/template-6', function (req, res) {
  res.render('template-6', {
    layout: 'template-6',
    page: {
      title: 'Template-6 Page',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],
    info: {
      title: 'Vertically centered hero sign-up form',
      description:
        'Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation',
    },
    form: {
      inputs: [
        {
          id: 1,
          name: 'emailAddress',
          placeholder: 'Email address',
          type: 'email',
        },
        {
          id: 2,
          name: 'userPassword',
          placeholder: 'Password',
          type: 'password',
        },
      ],
      checkbox: {
        label: 'Remember me',
        name: 'remember',
      },
      button: 'Sign in',
      info: 'By clicking Sign up, you agree to the terms of use.',
    },
    updates: {
      title: 'Recent updates',
      list: [
        {
          nickname: 'Techie',
          description:
            'The latest software update includes several new features and performance improvements, making it faster and easier to use...',
        },
        {
          nickname: 'Traveler',
          description:
            "We've added new destinations to our travel packages, including exotic locations and off-the-beaten-path adventures...",
        },
        {
          nickname: 'Foodie',
          description:
            'Our new menu features a variety of delicious dishes inspired by cuisines from around the world, with options for every taste and dietary preference...',
        },
      ],
      show_all: {
        text: 'All updates',
        url: 'https://example.com/updates',
      },
    },
    expirience: {
      title: 'We have a lot of experience',
      badge: 'hot!',
      list: [
        {
          name: 'John Doe',
          details:
            'In the last month, the site received a total of 10,000 unique visitors. The majority of the traffic came from search engines, with Google being the top source. The bounce rate was 45%, which is within the acceptable range.',
        },
        {
          name: 'Jane Smith',
          details:
            "The site's average page load time was 3.5 seconds, which is slower than the recommended 2 seconds. The site's performance score is 80 out of 100, which is good but could be improved. There were no major errors or issues identified during the analysis.",
        },
        {
          name: 'Bob Johnson',
          details:
            "The site's SSL certificate is valid and up-to-date. There were no known security vulnerabilities or issues found during the analysis. All user data is encrypted and protected using industry-standard methods.",
        },
      ],
    },
    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
})

router.get('/template-7', function (req, res) {
  res.render('template-7', {
    layout: 'template-7',
    page: {
      title: 'Template-7 Page',
    },
    header: {
      brandName: 'Logo',
      userOnline: 10,

      ad: {
        text: 'Best service to Boost your priority faster',
        url: 'www.example.com',
      },

      links: [
        {
          url: 'www.example.com',
          text: 'Home',
        },
        {
          url: 'www.example.com/about',
          text: 'About Us',
        },
        {
          url: 'www.example.com/services',
          text: 'Services',
        },
        {
          url: 'www.example.com/contact',
          text: 'Contact Us',
        },
        {
          url: 'www.example.com/blog',
          text: 'Blog',
        },
      ],
    },

    hero: {
      title: 'The most professional service',
      description:
        'I am incredibly grateful for the outstanding work done by this team. Their promptness and attention to detail',
      button: {
        url: 'www.example.com/buy',
        text: 'Go to shop',
      },
    },

    about: {
      heading: 'About shop',
      info: "Lorem Ipsum is not an actual shop, but rather a type of dummy text used as a placeholder in designs to simulate the appearance of written content. It's often used by designers and developers as a temporary substitute for actual text while they're working on a project. The Lorem Ipsum text is derived from a Latin passage by Cicero, but it's been modified and scrambled so that it's no longer legible. The purpose of using Lorem Ipsum is to give designers an idea of how their designs will look when filled with text, without being distracted by the actual content of the text itself.",
    },

    articles: [
      {
        id: 1,
        photo: 'https://picsum.photos/400/200',
        name: 'Lorem Ipsum',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id dolor eget sapien lobortis finibus. Fusce euismod, ipsum sit amet pulvinar imperdiet, sapien nunc viverra nulla, vel pulvinar velit leo sed velit.',
      },
      {
        id: 2,
        isNew: true,
        photo: 'https://picsum.photos/400/200',
        name: 'Dolor Sit Amet',
        description:
          'Etiam luctus ante eget ante convallis iaculis. Nunc viverra quam vel libero accumsan, non malesuada neque vestibulum. Curabitur malesuada, velit ut pretium ullamcorper, lacus elit vehicula sapien, ut sollicitudin quam metus eget sapien.',
      },
      {
        id: 3,
        photo: 'https://picsum.photos/400/200',
        name: 'Ipsum Dolor',
        description:
          'Sed euismod risus sit amet sapien fermentum, vitae scelerisque lectus hendrerit. Integer at velit tristique, varius dolor in, gravida est. Nunc sagittis justo vel velit tempor, eget faucibus nulla posuere.',
      },
    ],

    footer: {
      copyright:
        '© Copyrights Shop 2022-2023. All rights reserved',
      pages: [
        {
          path: 'www.example.com/terms',
          name: 'Terms of Use',
        },
        {
          path: 'www.example.com/privacy',
          name: 'Privacy Policy',
        },
        {
          path: 'www.example.com/refund',
          name: 'Refund Policy',
        },
      ],
    },
  })
})

module.exports = router
