const data = [
    {
        id: '1',
        name: "Pasta Paradise",
        location: "New York, NY",
        rating: 1,
        distance: "2.5 miles",
        cuisine: ["Italian", "Seafood"],
        picture: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        reviews: [
            { user: "John Doe", comment: "Amazing pasta dishes!", rating: 5 }
        ]
    },
    {
        id: '2',
        name: "Burger Haven",
        location: "Los Angeles, CA",
        rating: 0,
        distance: "5.1 miles",
        cuisine: ["Fast Food", "American"],
        picture: "https://plus.unsplash.com/premium_photo-1668618295237-f1d8666812c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D",
        reviews: [
            { user: "Jane Smith", comment: "Best burgers in town!", rating: 5 }
        ]
    },
    {
        id: '3',
        name: "Sushi World",
        location: "Seattle, WA",
        rating: 2,
        distance: "3.2 miles",
        cuisine: ["Japanese", "Asian"],
        picture: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D",
        reviews: [
            { user: "Alice Johnson", comment: "Fresh sushi and great atmosphere.", rating: 4 }
        ]
    },
    {
        id: '4',
        name: "Taco Time",
        location: "San Antonio, TX",
        rating: 5,
        distance: "1.5 miles",
        cuisine: ["Mexican", "Tex-Mex"],
        picture: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D",
        reviews: [
            { user: "Bob Brown", comment: "Delicious tacos and friendly staff.", rating: 4 }
        ]
    },
    {
        id: '5',
        name: "BBQ Central",
        location: "Kansas City, MO",
        rating: 3,
        distance: "4.2 miles",
        cuisine: ["American", "Barbecue"],
        picture: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
        reviews: [
            { user: "Mary Wilson", comment: "The best BBQ I've ever had!", rating: 5 }
        ]
    },
    {
        id: '6',
        name: "Veggie Delight",
        location: "Portland, OR",
        rating: 1,
        distance: "3.5 miles",
        cuisine: ["Vegan", "Vegetarian"],
        picture: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
        reviews: [
            { user: "Tom Green", comment: "Great vegan options and friendly service.", rating: 5 }
        ]
    },
    {
        id: '7',
        name: "Pizza Paradise",
        location: "Chicago, IL",
        rating: 5,
        distance: "4.5 miles",
        cuisine: ["Italian", "Pizza"],
        picture: "https://plus.unsplash.com/premium_photo-1683619761464-6b7c9a2716a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
        reviews: [
            { user: "Lucy Gray", comment: "Best deep-dish pizza!", rating: 5 }
        ]
    },
    {
        id: '8',
        name: "Dessert Oasis",
        location: "Miami, FL",
        rating: 4,
        distance: "2.5 miles",
        cuisine: ["Dessert", "American"],
        picture: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
        reviews: [
            { user: "Michael Black", comment: "Heavenly desserts!", rating: 4 }
        ]
    },
    {
        id: '9',
        name: "Coffee Corner",
        location: "Austin, TX",
        rating: 2,
        distance: "1.8 miles",
        cuisine: ["Coffee", "Breakfast"],
        picture: "https://images.unsplash.com/photo-1603508102983-99b101395d1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
        reviews: [
            { user: "Emma White", comment: "Cozy place with great coffee.", rating: 5 }
        ]
    },
    {
        id: '10',
        name: "Steak Supreme",
        location: "Denver, CO",
        rating: 3,
        distance: "4.2 miles",
        cuisine: ["Steak", "American"],
        picture: "https://images.unsplash.com/photo-1602192103300-47e66756152e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
        reviews: [
            { user: "David Blue", comment: "The steak was cooked to perfection.", rating: 5 }
        ]
    }
    
];

export default data;
