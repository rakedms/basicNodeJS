books=[{
    "id":1,
    "name":"Rework",
    "pages":150,
    "authour":"xxx"
},
{
    "id":2,
    "name":"Friends",
    "pages":260,
    "authour":"xxx"
},
{
    "id":3,
    "name":"Rich",
    "pages":400,
    "authour":"xxx"
},
{
    "id":4,
    "name":"DAD",
    "pages":180,
    "authour":"xxx"
},
{
    "id":5,
    "name":"Mind",
    "pages":230,
    "authour":"xxx"
}]



const handleGetAllBooks=(req,res)=>{
    const book=books
    res.json({book})
}

const handleGetBookById=(req,res)=>{
    const id=req.params.id
    const book=books.find((b)=>b.id==id)
    res.json({book})
}

const handleAddBookById=(req,res)=>{
    const newBook=req.body
    books.push(newBook)
    return res.json({"status":"success"})
}

const handleDeleteBookById=(req,res)=>{
    const id=req.params.id
    books=books.filter((e)=>e.id!=id)
    return res.json({"status":"deleted"})
}

module.exports={
    handleGetAllBooks,
    handleGetBookById,
    handleAddBookById,
    handleDeleteBookById
}
