const xmlData = `
    <Catalog>
        <Product ProductID="101">
            <Name>Smartphone</Name>
            <Category>Electronics</Category>
            <Price>299.99</Price>
            <Stock>25</Stock>
            <description>Iphone 15 pro max, 12gb ram, 512gb storage</description>
            <Image-url>https://p2-ofp.static.pub//fes/cms/2024/02/05/wfqlgeyvuw14o5uug09t0jbbq3soip968503.png</Image-url>
            <Manufacturer>Apple</Manufacturer>
        </Product>
        
        <Product ProductID="102">
            <Name>Laptop</Name>
            <Category>Electronics</Category>
            <Price>799.99</Price>
            <Stock>25</Stock>
            <description>Lenovo Think Pad 5, 15.6 inch, 8GB RAM, 256GB SSD</description>
            <Image-url>https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png</Image-url>
            <Manufacturer>Lenovo</Manufacturer>
        </Product>
</Catalog>`;

const getXmlData = () => xmlData;

module.exports = { getXmlData };