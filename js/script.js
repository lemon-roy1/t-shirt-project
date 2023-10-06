arrayObjict = []

function getDisplayProduct(arrayObjict) {
    const gettotalItem = document.getElementById('totalItem')
    gettotalItem.innerText = arrayObjict.length;

    const getTabletr = document.getElementById('product_item')

    // console.log(getTabletr);
    getTabletr.textContent = ''

    for (let i=0; i<arrayObjict.length; i++) {
        const trs = document.createElement('tr')
      
        trs.innerHTML=
            `
        <td>${i + 1}</td>
        <td>${arrayObjict[i].productName}</td>
        <td>${arrayObjict[i].ProductPrice}</td>
        `
        getTabletr.appendChild(trs)
    }
}


function addcard(data) {
    const productName = data.parentNode.children[1].innerText;
    const ProductPrice = data.parentNode.children[2].children[0].innerText;
    

    getDetailvalue = {

        productName: productName,
        ProductPrice: parseInt(ProductPrice)
    }

    arrayObjict.push(getDetailvalue)

    getDisplayProduct(arrayObjict)

}