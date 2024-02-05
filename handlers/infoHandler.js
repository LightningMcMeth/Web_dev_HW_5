function infoHandler(req, res){

    const gamerInfo = `
    <h1>Gamer Info</h1>
    <ul style="font-size: 20px;">
    <li>1. '/products' endpoint:
    returns a list of all the products</li>
    <li>2. '/products/:id' endpoint:
    returns a product with the specified id. Ids of products can be viewed when using the '/products' endpoint list.
    <br>
    example: http://localhost:3500/products/65c03e99962eb7def506f59d </li>
    <li>3. '/new' endpoint:
    returns a form that, once filled out, createes a new product and redirects the user to the '/products/ endpoint</li>
    <li>4. POST endpoint: called automatically when a form for a new product is submitted</li>
    </ul>`;

    res.type('text/html').send(gamerInfo)
}

module.exports = infoHandler;