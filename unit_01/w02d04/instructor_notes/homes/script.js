$(function () {
    
    // Swaps out the 'btn-danger' and 'btn-success' classes on the #addHome button
    $('#addHome').removeClass('btn-danger').addClass('btn-success');

    //Centers <h1> text
    $('.jumbotron').css('text-align', 'center');



    // Creates a jQuery Object that wraps a brand new link tag
    var $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>');

    // Adds the $newLink from above after the header
    var $header = $('#header');
    $newLink.insertAfter($header);

    // Adds the $newLink from above at the end of the body
    // var $body = $('body');
    // $newLink.appendTo('body');
    
    // Adds a click event handler to the #addHome button 
     $('#addHome').on('click', function() {
            alert('Added Home');
            $(this).fadeIn(1000)

              //declared new var home with arrayName.pop
            var home = newHomes.pop();
              //declared new jQuery var homeTr with new <tr> & <td>
            var $homeTr = $(
              `
              <tr>
                <td>${home.address}</td>
                <td>${home.sf}</td>
                <td>${home.bedrooms}</td>
                <td>${home.baths}</td>
                <td>${home.price}</td>
                <td><button class="btn btn-xs btn-danger">Remove</button></td>
              </tr>
              `
            );

            // attach $homeTr to current $tbody
            $('tbody').append($homeTr);
      });

    // Pops a message that a row is about to be deleted when ANY of the table rows are clicked
    // Then fades the row out for 50 milliseconds before removing it entirely
    $('#homes tbody').on('click', 'tr', '.btn-danger', function () {
        alert('You are about to delete this row.');
        $(this).fadeOut(1000, function() {
            $(this).detach();
        });
    });



    //Restore function
    $('#reStore').on('click', function() { 
        alert('You are about to restore items.')
        $('tbody').append($homeTr);



    });



    var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];



    
    
});

//////////////////////////////////////////////////

// table.append(new homes data).append(tr???)


 



