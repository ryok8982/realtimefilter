$(function () {
  searchWord = function(){
    let searchText = $(this).val();

    $('.target-key').each(function() {
      targetText = $(this).text();

      
      if (targetText.indexOf(searchText) != -1) {
        $(this).parent().removeClass('hidden');
      } else {
        $(this).parent().addClass('hidden');
      }
    });
  };

  $('#search-text').on('input', searchWord);
});