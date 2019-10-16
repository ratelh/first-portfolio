//============탭, 아코디언 jqueryUI====================//
if ($("#tabs").length) {
   $("#tabs").tabs();
}
if ($("#accordion").length) {
   $("#accordion").accordion();
}

//회원가입, 로그인 버튼

const loginBtn = document.getElementsByClassName('memberlinks__btn--login'),
   signupBtn = document.getElementsByClassName('memberlinks__btn--singup'),
   popupBg = document.querySelector('.header__memberlinks--popupbg'),
   popupWindow = document.getElementsByClassName('header__memberlinks--popup'),
   signupUrl = 'popup/signup_form.html';

console.log(loginBtn);

loginBtn[0].addEventListener('click', function () {
   popupBg.classList.add('open');
});

signupBtn[0].addEventListener('click', function (event) {
   event.preventDefault();
   popupWindow.setAttribute('src', signupUrl);
   popupBg.classList.add('open');
});

popupBg.querySelector('.hidebtn').addEventListener('click', function () {
   popupBg.classList.remove('open');
});

//이미지 모달창
const modalImg = document.querySelector('.modal_img');

//즐겨찾기 목록 추가

var favoritList = $('.list_favorite ul'),
   listItem = $('#accordion li'),
   favoritBtn = listItem.find('span');

favoritBtn.click(function (e) {
   e.preventDefault();
   var target = $(this).closest('li');

   favoritList.append(target);
});

//============즐겨찾기====================//

var counting = $('.write_limit');

$('#writeArea').on('keyup', function () {
   var txtCount = $(this).val();

   counting.text(txtCount.length);

});

//=============글자수 제한====================//

$('.back_to_top').click(function (e) {
   e.preventDefault();
   $('html,body').animate({
      scrollTop: 0
   }, 300);
});

//=============위로가기====================//


var formField = $('.form_wapper').find('fieldset');

formField.find('input').each(function () {
   if ($(this).text().length >= 1) {
      $(this).on(':focus');
   }
   console.log($(this).val());
});
//=============폼 라벨===================//

const hideBtn = document.querySelector('.hidebtn');

hideBtn.addEventListener('click', function () {
   this.parentNode.style.display = "none";
});
hideBtn.parentNode.style.display = "block";


$('#modal .hidebtn').click(function () {
   $('#modal').css('display', 'none');
});
//============닫기 버튼===================//
var currentCookie = document.cookie;
var cookieCheck = currentCookie.indexOf('portfolio1');
if (cookieCheck > -1) {
   $('.alert').hide();
} else {
   $('.alert').show();
}

var date = new Date();

date.setDate(date.getDate() + 7);

var setCookie = '';
setCookie += 'CookieName = portfolio1;';
setCookie += 'expires =' + date.toUTCString();

document.cookie = setCookie;

//============쿠키===================//

var rowsPerPage = 10,
   rows = $('table tr'),
   rowsCount = rows.length,
   pageCount = Math.ceil(rowsCount / rowsPerPage),
   pageNumbers = $('.pagination');

for (var i = 1; i <= pageCount; i++) {
   pageNumbers.append('<li><a href="">' + i + '</a></li>');
}

pageNumbers.find('li:first-child a').addClass('active');

function displayRows(idx) {
   var start = (idx - 1) * rowsPerPage,
      end = start + rowsPerPage;

   rows.hide();
   rows.slice(start, end).show();
}
displayRows(1);

pageNumbers.find('li a').click(function (e) {
   e.preventDefault();
   pageNumbers.find('li a').removeClass('active');
   $(this).addClass('active');

   var index = $(this).text();
   displayRows(index);
});

//============페이지네이션===================//

/*
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
   mapOption = {
      center: new daum.maps.LatLng(37.6570687, 127.0617222), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
   };

var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var iwContent =
   '<div style="padding:5px;">더조은 노원지점</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
   iwPosition = new daum.maps.LatLng(37.6570687, 127.0617222), //인포윈도우 표시 위치입니다
   iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성하고 지도에 표시합니다
var infowindow = new daum.maps.InfoWindow({
   map: map, // 인포윈도우가 표시될 지도
   position: iwPosition,
   content: iwContent,
   removable: iwRemoveable
});*/
//============지도====================//