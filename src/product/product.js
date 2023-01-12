const Product = [
    {
        id: 1,
        Category: 'Electronics',
        SubCategory : [
            {
                id : 1,
                SubCategory : 'MobilePhone',
                Products : [
                    {
                        id: 1,
                        pName: 'Samsung M52',
                        pImage: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80',
                        pPrice: '100 INR'
                    },
                    {
                        id: 2,
                        pName: 'Xiaomi Redmi Note 9 Pro',
                        pImage: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80',
                        pPrice: '100 INR'
                    }
                ]
            },
            {
                id : 2,
                SubCategory : 'TV',
                Products : [
                    {
                        id: 1,
                        pName: 'LG TV',
                        pImage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                        pPrice: '100 INR'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        Category: 'Books',
        SubCategory : [
            {
                id : 1,
                SubCategory : 'CodingBook',
                Products : [
                    {
                        id: 1,
                        pName: 'Coding In Python',
                        pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                        pPrice: '100 INR'
                    },
                    {
                        id: 2,
                        pName: 'Coding In Java',
                        pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                        pPrice: '100 INR'
                    }
                ]
            },
            {
                id : 2,
                SubCategory : 'TextBook',
                Products : [
                    {
                        id: 1,
                        pName: 'Mathematics',
                        pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                        pPrice: '100 INR'
                    },
                    {
                        id: 2,
                        pName: 'Science',
                        pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                        pPrice: '100 INR'
                    },
                    {
                        id: 3,
                        pName: 'Economics',
                        pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                        pPrice: '100 INR'
                    }
                ]
            }
        ]
    }
]

export default Product;





// // category
// const Category = [
//     {
//         id: 1,
//         Category: 'Electronics',
//     },
//     {
//         id: 2,
//         Category: 'Books',
//     }
// ]

// // Sub Category
// const Electronics = [
//     {
//         id : 1,
//         SubCategory : 'MobilePhone',
//     },
//     {
//         id : 2,
//         SubCategory : 'TV',
//     }
// ]

// const Book = [
//     {
//         id : 1,
//         SubCategory : 'CodingBook',
//     },
//     {
//         id : 2,
//         SubCategory : 'TextBook',
//     }
// ]

// // Products
// const MobilePhone = [
//     {
//         id: 1,
//         pName: 'Samsung M52',
//         pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         pPrice: '100 INR'
//     },
//     {
//         id: 2,
//         pName: 'Xiaomi Redmi Note 9 Pro',
//         pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         pPrice: '100 INR'
//     }
// ]

// const TV = [
//     {
//         id: 1,
//         pName: 'LG TV',
//         pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         pPrice: '100 INR'
//     }
// ]

// const CodingBook = [
//     {
//         id: 1,
//         pName: 'Coding In Python',
//         pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         pPrice: '100 INR'
//     },
//     {
//         id: 2,
//         pName: 'Coding In Java',
//         pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         pPrice: '100 INR'
//     }
// ]

// const TextBook = [
//     {
//         id: 1,
//         pName: 'Mathematics',
//         pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         pPrice: '100 INR'
//     },
//     {
//         id: 2,
//         pName: 'Science',
//         pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         pPrice: '100 INR'
//     },
//     {
//         id: 3,
//         pName: 'Economics',
//         pImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         pPrice: '100 INR'
//     }
// ]

// export {Category,Electronics, Book, MobilePhone, TV, CodingBook, TextBook};