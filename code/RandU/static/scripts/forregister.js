//显示上传的图片
$('#put-on-head-button').change(function () {

    var f = document.getElementById('put-on-head-label').files[0];

    var src = window.URL.createObjectURL(f);

    //document.getElementById('.put-on-head').src = src;
    document.getElementById('uhead').src = src;

});

$('.blades').hover(function () {
    this.style.rotate++;
});

$('#aplyer_nan_input').click(function () {
    if ($('#aplyer_nan_input').prop('checked')) {

        //if (document.getElementById('uhead').src == 'http://localhost:5000/static/image/defaultHead保密.jpg' || document.getElementById('uhead').src == 'http://localhost:5000/static/image/defaultHead女.jpg') {/////////////////////aaaaaaaaaaaaaaaaaaaaa改成服务器地址吧
            document.getElementById('uhead').src = '../static/image/defaultHead男.jpg';
        //}
        //else {
        //    console.log(document.getElementById('uhead').src);
        //}

    }
});

$('#aplyer_nv_input').click(function () {
    if ($('#aplyer_nv_input').prop('checked')) {

        //if (document.getElementById('uhead').src == 'http://localhost:5000/static/image/defaultHead保密.jpg' || document.getElementById('uhead').src == 'http://localhost:5000/static/image/defaultHead男.jpg') {/////////////////////aaaaaaaaaaaaaaaaaaaaa改成服务器地址吧
            document.getElementById('uhead').src = '../static/image/defaultHead女.jpg';
        //}
        //else {
        //    console.log(document.getElementById('uhead').src);
        //}

    }
});

$('#aplyer_non_input').click(function () {
    if ($('#aplyer_non_input').prop('checked')) {

        //if (document.getElementById('uhead').src == 'http://localhost:5000/static/image/defaultHead女.jpg' || document.getElementById('uhead').src == 'http://localhost:5000/static/image/defaultHead男.jpg') {/////////////////////aaaaaaaaaaaaaaaaaaaaa改成服务器地址吧
            document.getElementById('uhead').src = '../static/image/defaultHead保密.jpg';
       // }
        //else {
       //     console.log(document.getElementById('uhead').src);
       // }

    }
});
