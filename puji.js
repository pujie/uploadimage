cebong = {
    resizeImage:(url,callback)=> {
        var canvas = document.createElement("canvas");
        var MAX_WIDTH_ALLOWED = 1600;
        var MAX_HEIGHT = 0;
        canvas.width = 1600;
        var img = new Image();
        img.onload = function(){
            MAX_HEIGHT = img.height * MAX_WIDTH_ALLOWED / img.width;
            canvas.height = MAX_HEIGHT;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, MAX_WIDTH_ALLOWED, MAX_HEIGHT);
            callback(canvas.toDataURL("image/jpeg"));
        }
        img.src = url;
    },
    loadImage:(evt)=> {
        var input = evt.target;
        var filereader = new FileReader();
        filereader.onload = function(){
            cebong.resizeImage(filereader.result, function(result){
                $("#image").attr("src",result);
            })
        }
        filereader.onloadend = function(){
                console.log('filereaderresult',filereader.result);
                $("#output").html(filereader.result)
            }
        filereader.readAsDataURL(input.files[0]);
    }
}