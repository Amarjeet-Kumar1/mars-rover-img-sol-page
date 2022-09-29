var page = 1;
function showImage(){
    $('#lower img').remove();
    let sol = $('#sol').val();
    
    
    
    if(sol <= 1000 && sol > 0){
        let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+sol+'&page='+page+'&api_key=DEMO_KEY';
        $.get(url, function (data) {
                $.each(data.photos, function (index, value) { 
                    let imageUrl = value.img_src;
                    $('#lower').append('<img src = "'+imageUrl+'" width="200px" height="200px">');
                     
                });
                
            },
            
        );
    }
    else {
        alert('Enter valid input');
    }
}
var prev = $('#prev');
var next = $('#next');

next.prop('disabled', true);
prev.prop('disabled', true);

next.click(function(){
    page++;
    showImage();
    prev.prop('disabled', false);

});
prev.click(function(){
    
    page--;
    showImage();
    if(page === 1){
        prev.prop('disabled', true);
    }
});
$('#submit').click(function(e){
    e.preventDefault();
    showImage();
    next.prop('disabled', false);


});