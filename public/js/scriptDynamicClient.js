const cardList = [{
    title: 'Volkswagen: Virtus',
    path: '/images/virtus.jpg',
    link: 'About Virtus by Volkswagen',
    description: 'The Volkswagen Virtus has 2 Petrol Engine on offer. The Petrol engine is 999 cc and 1498 cc . It is available with Manual & Automatic transmission. Depending upon the variant and fuel type the Virtus has a mileage of 18.12 to 20.8 kmpl & Ground clearance of Virtus is 179mm.'
},
{
    title: 'Skoda: Rapid',
    path: 'images/rapid.jpg',
    link: 'About Rapid by Skoda',
    description: 'Skoda Rapid is a 5 seater Sedan. It is available in 27 variants, 1498 to 1598 cc engine options and 2 transmission options : Manual and Automatic.'
},
{
    title: 'Mercedes: G Wagon',
    path: '/images/gwagon.jpg',
    link: 'About G Wagon by Mercedes',
    description: 'GWagon'
}];




const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.path + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text grey-text text-darken-4">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}




const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        formSumitted();
    });
    $('#clickMeButton').click(() => {
        clickMe();
    });
    addCards(cardList);
    $('.modal').modal();
});