var index = 0;

$container = $(".scroll-container");
for (let index = 0; index < numberOfCards; index++) {
   $container.append('<div data-index="'+ index +'" class="box boxstyle"></div>');
   var $currentBox = $container.find(".box[data-index='" + index + "']");
   $currentBox.append("<img id='theImg' src='./cardImages/"+index+".jpg'>");
}
