const productos = [];

const getProductos = (req, res) => {

    const tempProductoss = productos.filter(prd => prd.delete === false);
    
    /*
    const productosRes = [];
    
    tempProductoss.forEach(prd => {
        productosRes.push({
           title: prd.title,
           price: prd.price,
           thumbnail: prd.thumbnail 
        })
    });
    */

    res.json({
        ok: true,
        total: tempProductoss.length,
        msg: tempProductoss,
    });
}

const addProducto = (req, res) => {

    const { title, price, thumbnail } = req.body;

    const product = {
        title,
        price,
        thumbnail,
        id: (productos.length + 1),
        delete: false
    }

    productos.push(product);

    res.json({
        ok: true,
        msg: product,
    });

}

const getProducto = (req, res) => {
    const { id } = req.params;
    const producto = productos.filter(prd => prd.id === Number(id));

    if ( producto.length === 0) {
        return res.status(404).json({
            ok: false,
            msg: `El producto con identificador ${id} no se encuentra.`,
        });
    }

    res.status(200).json({
        ok:true,
        msg: producto[0],
    });
}

module.exports = {
    getProductos
    , addProducto
    , getProducto
}