var demoContainer=document.getElementById ("demo");
var btn=document.getElementById ("btn");
btn.addEventListener("click",function() {
    // $.get("about.html", function (data) {
        $(".demo").load('about.html');
    // demoContainer.insertAdjacentHTML ('beforeend','test');
});
// });

    //



//  var ourRequest=new XMLHttpRequest ();
// ourRequest.open('Get','about.html')
// ourRequest.onload=function () {
//      var ourData=(ourRequest.responseText);
//     readerHTML (ourData);
//
// };
//       ourRequest.send();
// });
// function readerHTML(data)
// {
//     demoContainer.insertAdjacentHTML('beforeend',data);
// }
// //  var ourRequest=new XMLHttpRequest ();
// // ourRequest.open('Get','')
// ourRequest.onload=function () {
//     //  var ourData=JSON.parse(ourRequest.responseText);
//     readerHTML (OurData);
//
// };
// ourRequest.send();
// });
// function readerHTML(data)
// {
//     demoContainer.insertAdjacentHTML ('beforeend','test');
// }
