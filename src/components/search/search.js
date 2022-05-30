

// $(document).ready(function() {
//     $('#myInput').on('keyup', function() {
//         var keyword = $(this).val().toLowerCase();
//         $('#table-pay').filter(function(){
//             $(this).toggle($(this).text().toLowerCase().indexOf(keyword));
//         });

//     })
// })


export function Search() {
    const input = document.getElementById('myInput')
    const table = document.getElementById('#table-pay')

   
        var keyword = input.val().toLowerCase();
        table.filter(function(){
            this.toggle((this.text().toLowerCase().indexOf(keyword)))
        })
   
}