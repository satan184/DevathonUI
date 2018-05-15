
$('document').ready(function(){
    
    var companyName = ['Nike', 'Reebok', 'Samsung S7', 'iPhone 8', 'skullCandy'];
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var imgUrl = ['https://natashacouture-natashacouture.netdna-ssl.com/media/catalog/product/cache/1/small_image/261x346.33757961783/85e4522595efc69f496374d01ef2bf13/O/r/Orange-Shaded-Silk-Saree-NC8494-Order-Party-Wear-Sarees-Online_6.jpg','https://5.imimg.com/data5/KI/YC/MY-2412209/designer-banarasi-silk-sarees-500x500.jpg', 'https://mediacdn.anitadongre.com/media/catalog/product/cache/7/small_image/328x493/17f82f742ffe127f42dca9de82fb58b1/s/s/ss18rr220mo-ruby-_2_.jpg', 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/s/e/sew3573.jpg', 'https://static.jaypore.com/tr:w-313,h-415/media/catalog/product/m/j/mjbsaj50011835-1_2.jpg'];
    for(var i=0; i<5; i++){
      $('#products').append('<div class = "flex-container box'+i+'"><div class = "flex-item"><img src="'+imgUrl[i]+'" class = "image'+i+'"></div></div>');
      $(".image"+i).on("click",function(i){
        modal.style.display = "block";
        $("#modalimg").attr("src", imgUrl[i]);
      });
    }
    
         

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 
  });
