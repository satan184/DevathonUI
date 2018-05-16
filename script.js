var obj={
	'first':{'images':['https://natashacouture-natashacouture.netdna-ssl.com/media/catalog/product/cache/1/small_image/261x346.33757961783/85e4522595efc69f496374d01ef2bf13/O/r/Orange-Shaded-Silk-Saree-NC8494-Order-Party-Wear-Sarees-Online_6.jpg','https://opensource.google.com/assets/static/images/home/blog/blog_image_1.jpg'],
			'price':1000,
			'variations':[],
			'id':0,
		'selected':0},
			
	'second':{'images':['https://static.jaypore.com/tr:w-313,h-415/media/catalog/product/m/j/mjbsaj50011835-1_2.jpg'],
			'price':1000,
			'variations':[],
			'id':1,
			'selected':0

		},

	'third':{'images':['https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/s/e/sew3573.jpg'],
			'price':1500,
			'variations':[],
			'id':2,
			'selected':0
		},

	'fourth':{'images':['https://mediacdn.anitadongre.com/media/catalog/product/cache/7/small_image/328x493/17f82f742ffe127f42dca9de82fb58b1/s/s/ss18rr220mo-ruby-_2_.jpg'],
			'price':2000,
			'variations':[],
			'id':3,
			'selected':0
				},

	'fifth':{'images':['https://5.imimg.com/data5/KI/YC/MY-2412209/designer-banarasi-silk-sarees-500x500.jpg'],
			'price':3000,
			'variations':[],
			'id':4,
			'selected':0
		},								
}

var modal_current;  
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

var previewpane = document.getElementById("preview");
    
for (x in obj){
    $('#products').append("<div><img src = "+obj[x]['images'][obj[x]['selected']]+" id = "+x+"></div>");
    $("#"+x).click(function(){
    	modal_current = this.id;
		update();
		//previewpane.style.display = "block";
		$('#price').html(obj[modal_current]['price']);			
		modal.style.display = "block";
    	});
    }
span.onclick = function() {
    modal.style.display = "none";
    $('#preview').html('');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('#preview').html('');
    }
  }

function uploadImage(){
  	var newImage = $('#imageUrl').val();
  	obj[modal_current]['images'].push(newImage);
  	update();
  } 
function update(){
  	$('#preview').html('');
  	var n = obj[modal_current]['images'].length;
  	for(var i =0; i<n; i++){
			$('#preview').append("<img src = "+obj[modal_current]['images'][i]+" id = " +i+">");
			$('#'+i).click(function(){
			obj[modal_current]['selected'] = this.id;
			$('#'+modal_current).attr('src',obj[modal_current]['images'][this.id]);
		});
		}	
  }