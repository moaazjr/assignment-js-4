const name = document.querySelector('#name')
const price = document.querySelector('#price')
const category = document.querySelector('#cat')
const description = document.querySelector('#desc')
const addbtn = document.querySelector('#addBtn')
const info = document.querySelector('#info')
const form = document.querySelector('form')

name.focus()

 addbtn.addEventListener('click', function() {
    if(name.value == "") name.focus()
    else if(price.value == "") price.focus()
    else if(category.value == "") category.focus()
    else if(description.value == "") description.focus()
    else {
        info.innerHTML += ` <tr>
        <td scope="row"> <p id='nameProduct'> ${name.value} </p><input type="text" class="form-control d-none " id="nameUpdate"></td>
        <td> <p id='priceProduct'>${price.value}</p><input type="text" class="form-control d-none " id="priceUpdate"></td>
        <td> <p id='catProduct'>${category.value}</p><input type="text" class="form-control d-none " id="catUpdate"></td>
        <td> <p id='descProduct'>${description.value}</p><input type="text" class="form-control d-none " id="descUpdate"></td>
        <td><button class="btn btn-outline-danger">Delete</button></td> 
        <td><button class="btn btn-outline-warning" id='updatebttn'>Update</button>
        <button class="btn btn-outline-success px-3 d-none" id='savebtn'>Save</button></td>
      </tr>`
      name.value= price.value=category.value= description.value=""
    }
})
form.addEventListener('submit', function(e){
    e.preventDefault();
})