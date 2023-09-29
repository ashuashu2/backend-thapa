const newProduct = require("../models/product")
const getAllProductss =async (req,res)=>{
    const { company ,name ,featured ,sort,select} = req.query;


    let queryObj = {}
if (company) {
    queryObj.company = company
}
if (name) {
    queryObj.name = {$regex : name, $options:"i"}
    
}
if (featured) {
    queryObj.featured = featured
}

let apiData =  newProduct.find(queryObj)
if (sort) {
    let sortFix = sort.replace("," , " ");
    apiData = apiData.sort(sortFix)
    

    
}
if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix)
    

    
}


let page  = Number(req.query.page) || 1;
let limit  = Number(req.query.limit) || 3;
const skip = (page -1 ) * limit;
apiData = apiData.skip(skip).limit(limit)



    const products =   await apiData

res.status(200).json({products , nbHits : products.length })
};

const getAllProductssTesting = async(req,res)=>{
    const products2= await newProduct.find({})

    res.status(200).json({products2})
    };

    module.exports = {getAllProductss,getAllProductssTesting}