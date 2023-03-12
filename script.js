
// hide and show form
let btn = document.querySelector('#btn-edit');
let div = document.querySelector('.container-form');
div.style.display = "none";

btn.addEventListener('click', () =>{
    if(div.style.display === 'none'){
        div.style.display = 'block';
    }else {
        div.style.display = 'none'
    }
})

// tampilkan inputan form
// function myform(){
//     var x1 = document.getElementById("#nama").value;


// }


// $(document).ready(function() {
//     $("#btn-submit").click(function() {
//         var name = $("#nama").val()
//         if(name === ""){
//             alert("Silahkan isi form nama!")
//         }else {
//             $(".nama").html(name)
//             $("#nama").val("")
//         }
//     });
    // $("#btn-submit").click(function() {
    //     var role = $("#role").val()
    //     $(".role").html(role)
    // });
    // $("#btn-submit").click(function() {
    //     var availability = $("#availability").val()
    //     $(".availability").html(availability)
    // });
    // $("#btn-submit").click(function() {
    //     var usia = $("#usia").val()
    //     $(".usia").html(usia)
    // });
    // $("#btn-submit").click(function() {
    //     var lokasi = $("#lokasi").val()
    //     $(".lokasi").html(lokasi)
    // });
    // $("#btn-submit").click(function() {
    //     var yearsexperience = $("#yearsexperience").val()
    //     $(".yearsEx").html(yearsexperience)
    // });
    // $("#btn-submit").click(function() {
    //     var email = $("#email").val()
    //     $(".email").html(email)
    // });
   
// });
