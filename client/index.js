
const getAllProducts= async (e)=>{
    // const res=await fetch('https://dummyjson.com/products').then(res=>res.json());
    const data=await fetch('https://dummyjson.com/products').then(res=>res.json());
    return data;
}
// console.log(getAllProducts);
const startApplication= async(e)=>{
    const {products}=await getAllProducts();
    console.log(products);

    //Update the first category component
    const category=document.querySelector('.category');

    products.map((product)=>{
        console.log(product);
        const item=document.createElement("li");
        item.classList.add("item");

        const img=document.createElement('img');
        img.setAttribute('src',product.images[3]);
        img.classList.add("iimg");
       
        
        const desc=document.createElement("p");
        desc.innerHTML=product.category;

        item.appendChild(img);
        item.appendChild(desc);
        category.appendChild(item);
    })

    const electronic=document.querySelector('.electronic');

    products.map((products)=>{
                console.log(products);
                const item=document.createElement("li");
                item.classList.add("eitem");
        
                const img=document.createElement('img');
                img.setAttribute('src',products.images[1]);
                img.classList.add("eimg");
               
                
                const desc=document.createElement("p");
                desc.innerHTML=products.category;
        
                item.appendChild(img);
                item.appendChild(desc);
                electronic.appendChild(item);
    })    

    const other=document.querySelector('.other');
    products.map((products)=>{
        console.log(products);
        const item=document.createElement("li");
        item.classList.add("oitem");

        const img=document.createElement('img');
        img.setAttribute('src',products.images[0]);
        img.classList.add("oimg");
       
        
        const desc=document.createElement("p");
        desc.innerHTML=products.category;

        item.appendChild(img);
        item.appendChild(desc);
        other.appendChild(item);
    })






}
startApplication();