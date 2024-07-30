export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles based on your blog information.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3344/3344877.png',
        aiprompt: 'Give me 5 blog topic ideas in bullet points based on the given niche & outline topic and provide the result in Rich text editor format.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                feild: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                feild: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3344/3344877.png',
        aiprompt: 'Give me 5 blog topic ideas in bullet points based on the given niche & outline topic and provide the result in Rich text editor format.',
        slug: 'blog-content-generator',
        form: [
            {
                label: 'Enter your blog niche',
                feild: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                feild: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'YouTube Description',
        desc: 'Generate engaging YouTube video descriptions to attract more viewers and improve SEO.',
        category: 'youtube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiprompt: 'Write a compelling YouTube video description based on the given video title and content outline.',
        slug: 'youtube-description-generator',
        form: [
            {
                label: 'Enter your video title',
                feild: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter video content outline',
                feild: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Rewrite Article',
        desc: 'An AI tool that helps you rewrite articles to be plagiarism-free and unique.',
        category: 'writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3427/3427831.png',
        aiprompt: 'Rewrite the following article to be unique and plagiarism-free.',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Enter the article content',
                feild: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'Enhance your text by improving clarity, tone, and style.',
        category: 'writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3399/3399607.png',
        aiprompt: 'Improve the following text for clarity, tone, and style.',
        slug: 'text-improver',
        form: [
            {
                label: 'Enter the text',
                feild: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'English Grammar Check',
        desc: 'Check your text for grammatical errors & improve  correctness.',
        category: 'writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3342/3342137.png',
        aiprompt: 'Check the following text for grammatical errors and improve language correctness.',
        slug: 'grammar-check',
        form: [
            {
                label: 'Enter the text',
                feild: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Write Code',
        desc: 'Generate code snippets based on your description or requirements.',
        category: 'coding',
        icon: 'https://cdn-icons-png.flaticon.com/128/2306/2306143.png',
        aiprompt: 'Write code based on the following description or requirements.',
        slug: 'write-code',
        form: [
            {
                label: 'Enter the code description or requirements',
                feild: 'textarea',
                name: 'description',
                required: true
            }
        ]
    },
    {
        name: 'Explain Code',
        desc: 'Get a detailed explanation of what a code snippet does.',
        category: 'coding',
        icon: 'https://cdn-icons-png.flaticon.com/128/2306/2306162.png',
        aiprompt: 'Explain the following code snippet in detail.',
        slug: 'explain-code',
        form: [
            {
                label: 'Enter the code snippet',
                feild: 'textarea',
                name: 'code',
                required: true
            }
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'Find and suggest fixes for bugs in your code and helps you write code',
        category: 'coding',
        icon: 'https://cdn-icons-png.flaticon.com/128/2306/2306188.png',
        aiprompt: 'Detect and suggest the  fixes for bugs in the following code snippet.',
        slug: 'code-bug-detector',
        form: [
            {
                label: 'Enter the code snippet',
                feild: 'textarea',
                name: 'code',
                required: true
            }
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Generate catchy and memorable taglines for your brand or product.',
        category: 'marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1383/1383648.png',
        aiprompt: 'Generate catchy and memorable taglines based on the following brand or product description.',
        slug: 'tagline-generator',
        form: [
            {
                label: 'Enter the brand or product description',
                feild: 'textarea',
                name: 'description',
                required: true
            }
        ]
    },
    {
        name: 'Product Description',
        desc: 'Create compelling product descriptions that highlight key features and benefits.',
        category: 'marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077047.png',
        aiprompt: 'Write a compelling product description that highlights key features and benefits based on the following product details.',
        slug: 'product-description-generator',
        form: [
            {
                label: 'Enter the product details',
                feild: 'textarea',
                name: 'details',
                required: true
            }
        ]
    },
    {
        name: 'YouTube SEO',
        desc: 'Optimize your YouTube videos for better search engine ranking and visibility.',
        category: 'youtube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiprompt: 'Suggest SEO improvements for the following YouTube video details to improve ranking and visibility.',
        slug: 'youtube-seo',
        form: [
            {
                label: 'Enter the YouTube video details',
                feild: 'textarea',
                name: 'details',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'Create engaging Instagram posts with captions and hashtags to increase your reach.',
        category: 'social-media',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiprompt: 'Generate engaging Instagram posts with captions and hashtags based on the following topic or content idea.',
        slug: 'instagram-post-generator',
        form: [
            {
                label: 'Enter the topic or content idea',
                feild: 'textarea',
                name: 'idea',
                required: true
            }
        ]
    },
    {
        name: 'Tags Generator for YouTube',
        desc: 'Generate relevant tags for your YouTube videos to improve discoverability.',
        category: 'youtube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiprompt: 'Generate relevant tags based on the following YouTube video details to improve discoverability.',
        slug: 'youtube-tags-generator',
        form: [
            {
                label: 'Enter the YouTube video details',
                feild: 'textarea',
                name: 'details',
                required: true
            }
        ]
    }
];
