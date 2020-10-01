$(document).ready(function () {
  const myAmenities = {};
  $('div.amenities .popover ul li').click(function () {
    const amenityName = $(this).getAttribute('data-name');
    const amenityID = $(this).getAttribute('data-id');

    if ($(this).checked === false) {
      delete myAmenities[amenityID];
    } else {
      myAmenities[amenityID] = amenityName;
    }
    $('div.amenities h4').append(myAmenities[amenityID]);
  });
});
