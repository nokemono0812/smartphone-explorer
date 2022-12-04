$(function () {
    searchWord = function(){
      var searchResult,
          searchText = $(this).val(), // 検索ボックスに入力された値
          targetText;
  
      // 検索結果を格納するための配列を用意
      searchResult = [];
  
      // 検索結果エリアの表示を空にする
      $('#search-result_list').empty();
      document.getElementById("search-result_list").style.display="none";
  
      // 検索ボックスに値が入ってる場合
      if (searchText != '') {
        $('.target-area li').each(function() {
          targetText = $(this).text();
  
          // 検索対象となるリストに入力された文字列が存在するかどうかを判断
          if (targetText.indexOf(searchText) != -1) {
            document.getElementById("search-result_list").style.display="block";
            // 存在する場合はそのリストのテキストを用意した配列に格納
            searchResult.push(targetText);
          }
        });
  
        // 検索結果をページに出力
        for (var i = 0; i < searchResult.length; i ++) {
          $('<span class="items">').text(searchResult[i]).appendTo('#search-result_list');
        }

      }
      else{
        document.getElementById("search-result_list").style.display="none";
      }
    };
  
    // searchWordの実行
    $('#search').on('input', searchWord);
  });
  
  