// add new Item to the list
// chech and uncheck existing items
// permenantly delete item
$(function (){
    addNewItem();
    clearTheForm();
    getTheItemName();
    deleteItem();
    checkAndUcheckItem();
})

function addNewItem(){
    $("#js-shopping-list-form").on("submit", event => {
        event.preventDefault();
        buildANewItem(getTheItemName());
        clearTheForm();
        
       
    })
}

 function clearTheForm(){
    $("#js-shopping-list-form").trigger('reset');
 }

 function getTheItemName(){
    let itemName = $('.js-shopping-list-entry').val();
    return itemName;
 }

 function buildANewItem(item){
     //console.log(item);
     let newItem = `<li>
     <span class="shopping-item">${item}</span>
     <div class="shopping-item-controls">
       <button class="shopping-item-toggle">
         <span class="button-label">check</span>
       </button>
       <button class="shopping-item-delete">
         <span class="button-label">delete</span>
       </button>
     </div>
   </li>`
   $('.shopping-list').append(newItem);
   deleteItem();
   return newItem;
 }

 function deleteItem(){
   $('.shopping-item-delete').on('click', event => {
    //$(this).parent('li').remove();
    //$(this).closest('li').remove();
    $('.shopping-item-delete').parents('li').first().remove();
   })
 }

 function checkAndUcheckItem(){

    $('.shopping-item-toggle').on('click', event => {
       
       // console.log($('.shopping-item-toggle').parents('span').first().toggleClass('shopping-item__checked'));
        $(event.target).closest("li").find('span').toggleClass('shopping-item__checked');
    
      
       })
    }
 
 
