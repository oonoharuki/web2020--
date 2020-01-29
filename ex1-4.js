
function hyoji(){
//表示する文字
var str="ご清聴ありがとうございました!!";
//テキストボックスの文字数
var cnt = document.timer.moji.value.length;
//文字が全部表示されているか確認
if( cnt < 16 ){
//現在より１文字多く切り出して表示
document.timer.moji.value = str.substr(0,cnt+1);}
else{
//全て表示されたら、空文字に戻す
document.timer.moji.value ="";}}

function startfnc(){
//関数hyoji()を2300ミリ間隔呼び出す
setInterval("hyoji()",2300);}

function mes(){
    alert("日商簿記1級の勉強、web開発の復習と応用に挑戦したいと思います!!!");
}

