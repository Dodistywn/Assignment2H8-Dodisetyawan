
// membuat variabel button
const btn1 = document.querySelector('#btn-edit');
const btn2 = document.querySelector('#btn-cancel');
const forms = document.querySelector('.container-form');

    // menghilangkan form dari tampilan awal 
    forms.style.display = "none";

    // button edit show form
    btn1.addEventListener('click', () =>{
        forms.style.display = 'block';
    })
    
    // button cancel hide form
    btn2.addEventListener('click', () =>{
        forms.style.display = 'none';
    })


// Membuat variabel masukan input dari form
const form = document.querySelector('form');
const namaInput = document.querySelector('#nama-input');
const roleInput = document.querySelector('#role-input');
const availabilityInput = document.querySelector('#availability-input');
const usiaInput = document.querySelector('#usia-input');
const alamatInput = document.querySelector('#alamat-input');
const pengalamanInput = document.querySelector('#pengalaman-input');
const emailInput = document.querySelector('#email-input');

// Membuat variabel hasil input dari form
const namaTeks = document.querySelector('#nama');
const roleTeks = document.querySelector('#role');
const availabilityTeks = document.querySelector('#availability');
const usiaTeks = document.querySelector('#usia');
const alamatTeks = document.querySelector('#alamat');
const pengalamanTeks = document.querySelector('#pengalaman');
const emailTeks = document.querySelector('#email');


    // Mengaktifkan button submit
    form.addEventListener('submit', (event) =>{
        event.preventDefault(); // mencegah halaman direfresh saat form disubmit
        
        // Merubah data awal sesuai inputan di form
        namaTeks.textContent = namaInput.value;
        roleTeks.textContent = roleInput.value;
        availabilityTeks.textContent = availabilityInput.value;
        usiaTeks.textContent = usiaInput.value;
        alamatTeks.textContent = alamatInput.value;
        pengalamanTeks.textContent = pengalamanInput.value;
        emailTeks.textContent = emailInput.value;

        // Sembunyikan form setelah di-submit
        forms.style.display = 'none';
    });





// namaInput.value = '';
// roleInput.value = '';
// availabilityInput.value = '';
// usiaInput.value = '';
// alamatInput.value = '';
// pengalamanInput.value = '';
// emailInput.value = '';

// // Memunculkan data pada heading ke dalam form saat button edit di klik
// function editBiodata() {
//     namaInput.value = namaTeks.textContent;
//     roleInput.value = roleTeks.textContent;
//     availabilityInput.value = availabilityTeks.textContent;
//     usiaInput.value = usiaTeks.textContent;
//     alamatInput.value = alamatTeks.textContent;
//     pengalamanInput.value = pengalamanTeks.textContent;
//     emailInput.value = emailTeks.textContent;
// }





// Mengubah kondisi agar button edit dapat mengeditan berkali kali


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
