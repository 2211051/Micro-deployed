const jsonData = {
    "Catalog" : {
        "Products": [
            {
                "ProductID": "101",
                "Name": "Smartphone",
                "Category":  "Electronics",
                "Price":  299.99,
                "Stock": 25,
                "description":  "Iphone 15 pro max, 12gb ram, 512gb storage",
                "image": "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png",
                "Manufacturer":  "Apple"
            },
            {
                "ProductID": "102",
                "Name": "Laptop",
                "Category":  "Electronics",
                "Price":  799.99,
                "Stock": 15,
                "description":  "Lenovo Think Pad 5, 15.6 inch, 8GB RAM, 256GB SSD",
                "image":  "https://p2-ofp.static.pub//fes/cms/2024/02/05/wfqlgeyvuw14o5uug09t0jbbq3soip968503.png",
                "Manufacturer":  "Lenovo"
            }
        ]
    }
};

const getJsonData = () => jsonData;

module.exports = { getJsonData };