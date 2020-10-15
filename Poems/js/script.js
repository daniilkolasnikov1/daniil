$(document).ready(function() { 
$('#Authors').hide();
  $('#sidebar').hover(function() {/* Делаем отрытие вкладки с авторами на нажатие кнопки автор */
  $("#Authors").toggle("slide",300);
  });
});


$(document).ready(function() {
$('#Bunin').hide();
  $('#butnBunin').click(function() { /* Делаем открытие стихов бунина  */ 
  $("#Bunin").slideToggle(500);
  });
});

$(document).ready(function() {
$('#Tutchev').hide();
  $('#butnTutchev').click(function() { /* Делаем открытие стихов тютчева */ 
  $("#Tutchev").slideToggle(500);
  });
});

$(document).ready(function() {
$('#Lermontov').hide();
  $('#butnLermontov').click(function() { /* Делаем открытие стихов ваншенкина */ 
  $("#Lermontov").slideToggle(500);
  });
});

$(document).ready(function() {
$('#Nekrasov').hide();
  $('#butnNekrasov').click(function() { /* Делаем открытие стихов  некрасова */ 
  $("#Nekrasov").slideToggle(500);
  });
});

$(document).ready(function() {
$('#Pasternak').hide();
  $('#butnPasternak').click(function() { /* Делаем открытие стихов пастернака */ 
  $("#Pasternak").slideToggle(500);
  });
});
$(document).ready(function() {
$('#BuninPoem').hide();
  $('#BuninPoem-name').click(function() { /* Делаем открытие стихов пастернака */ 
  $("#BuninPoem").slideToggle(500);
  });
});
$(document).ready(function() {
$('#TutchevPoem').hide();
  $('#TutchevPoem-name').click(function() { /* Делаем открытие стихов пастернака */ 
  $("#TutchevPoem").slideToggle(500);
  });
});
$(document).ready(function() {
$('#LermontovPoem').hide();
  $('#LermontovPoem-name').click(function() { /* Делаем открытие стихов пастернака */ 
  $("#LermontovPoem").slideToggle(500);
  });
});
$(document).ready(function() {
$('#NekrasovPoem').hide();
  $('#NekrasovPoem-name').click(function() { /* Делаем открытие стихов пастернака */ 
  $("#NekrasovPoem").slideToggle(500);
  });
});
$(document).ready(function() {
$('#PasternakPoem').hide();
  $('#PasternakPoem-name').click(function() { /* Делаем открытие стихов пастернака */ 
  $("#PasternakPoem").slideToggle(500);
  });
});
