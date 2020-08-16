function uploadAndClassifyImageRes(){
    var fileInput = document.getElementById('resnet34FileUpload').files;
    if(!fileInput.length){
        return alert('Please choose a file to upload first.')
    }
    var file = fileInput[0];
    var filename = file.name;
    var formData = new FormData();
    formData.append(filename, file);
    console.log(filename);
    $.ajax({
        aync: true,
        crossDomain: true,
        method: 'POST',
        url: 'https://xxxxx.execute-api.ap-south-1.amazonaws.com/dev/classify',
        data: formData,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data"
    })
    .done(function (response){
        console.log(response);
        document.getElementById('resnetresult').textContent = response;
    })
    .fail(function(){
        alert ("There was error while sending prediction request to resnet34 model.");
    });
};
function uploadAndClassifyImageMobile(){
    var fileInput = document.getElementById('mobilenetFileUpload').files;
    console.log(fileInput);
    if(!fileInput.length){
        return alert('Please choose a file to upload first.')
    }
    var file = fileInput[0];
    var filename = file.name;
    var formData = new FormData();
    formData.append(filename, file);
    console.log(filename);
    console.log(file);
    $.ajax({
        aync: true,
        crossDomain: true,
        method: 'POST',
        url: 'https://xxxxx.execute-api.ap-south-1.amazonaws.com/dev/classify',
        data: formData,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data"
    })
    .done(function (response){
        console.log(response);
        document.getElementById('mobilenetresult').textContent = response;
    })
    .fail(function(){
        alert ("There was error while sending prediction request to mobile model.");
    });
};
function alignImage(){
    var fileInput = document.getElementById('alignFileUpload').files;
    console.log(fileInput);
    if(!fileInput.length){
        return alert('Please choose a file to upload first.')
    }
    var file = fileInput[0];
    var filename = file.name;
    var formData = new FormData();
    formData.append(filename, file);
    console.log(filename);
    console.log(file);
    $.ajax({
        aync: true,
        crossDomain: true,
        method: 'POST',
        url: 'https://xxxxx.execute-api.ap-south-1.amazonaws.com/dev/classify',
        data: formData,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data"
    })
    .done(function (response){
        console.log(response);
        document.getElementById('imageresult').src = response;
    })
    .fail(function(){
        alert ("There was error while sending prediction request to mobile model.");
    });
};
$('#btnResNetUpload').click(uploadAndClassifyImageRes)
$('#btnMobileNetUpload').click(uploadAndClassifyImageMobile)
$('#btnalignUpload').click(alignImage)
