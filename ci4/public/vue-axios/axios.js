const url = "http://localhost/lab3/ci4/public/articles";

// GET (READ)

axios.get(url)
    .then(response => {
    console.log(response);
})
.catch(error=>{
    console.log(error);
})


//POST (CREATE)
/*
const newArticle ={
    title: 'Insert Title ',
    slug: 'insert-title-21',
    body: ' Insert of title 21'
};
axios.post(url, newArticle)
    .then(response => {
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    })
*/
//PUT (UPDATE)
/*
const newArticle ={
    id: '21',
    title: 'Update Title 21',
    slug: 'update-title-21',
    body: ' Body of update title 21'
};
axios.put(url+'/0', newArticle)
    .then(response => {
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    })
*/

//DELETE
/*
axios.delete(url+'/21')
    .then(response => {
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    })
*/