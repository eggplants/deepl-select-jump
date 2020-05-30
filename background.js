chrome.contextMenus.create({
  "title" : "選択中のテキストをDeepLに投げる！",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : openDeepL()
});
//選択中の文字列を取得する関数
function openDeepL(info,tab){
  return function(info,tab){
    var selection_text = info.selectionText;
    // console.log(selection_text);
    moveToDeepL(selection_text);
  }
}
//選択中文字列をリンクに持たせて新しいタブで開く
function moveToDeepL(str) {
    window.open( 'https://www.deepl.com/translator#auto/ja/' + str );
}
