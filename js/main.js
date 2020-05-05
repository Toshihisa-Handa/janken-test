

//変数定義

let gu = document.querySelector('#gu');
let choki = document.querySelector('#choki');
let pa = document.querySelector('#pa');
let myhand = document.querySelector('.myhand');
let judge = document.querySelector('.judge');
let enemy = document.querySelector('.enemy');
let r =   Math.floor(Math.random()*3+1)//１〜３のランダム整数を作成
let hisarr =[];
let myarr =[];
let gucl =1;
let chokicl =2;
let pacl =3

//-----------------------------------------------

hisarr.push(r);//ランダムの整数を格納


//ジャンケン処理
//クリックしたら配列へ手に応じて数字を格納
if(gu.onclick=function(){}){
  myarr.push(gucl);
  myhand.innerHTML ='グーを出しました'
}else if(choki.onclick=function(){}){
  myarr.push(chokicl);
  myhand.innerHTML ='チョキを出しました'
}else if(pa.onclick=function(){}){
  myarr.push(pacl);
  myhand.innerHTML ='パーを出しました'
}

console.log(hisarr);
console.log(myarr);

//格納された数字によって文字を表示
if(hisarr[0]==myarr[0]){
  judge.innerHTML ='アイコ'
}else if(hisarr=[0]>myarr[0]){
  judge.innerHTML ='負け'
}else if(hisarr=[0] < myarr[0]){
  judge.innerHTML ='勝ち'
};



// リセットの記述
//配列の中身を消すことでさいどジャンケンできるようにする
let reset = document.querySelector('.reset');
reset.onclick = function (){
  hisarr=[];
  myarr=[];
};

console.log(hisarr);
console.log(myarr);

