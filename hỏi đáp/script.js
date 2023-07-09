document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var age = document.getElementById('age').value;
  var name = document.getElementById('name').value;
  var photo = document.getElementById('photo').value;
  var content = document.getElementById('content').value;
  var content=document.getElementById('Ck').value
  // Xử lý dữ liệu hoặc gửi dữ liệu lên máy chủ
  console.log('Tuổi:', age);
  console.log('Họ và Tên:', name);
  console.log('Thêm ảnh:', photo);
  console.log('Nội dung:', content);
  console.log('Chuyên khoa', content);
});



/* ---------------------  Pagination Bar --------------------- */
function backBtn() {
  var activeLink = document.querySelector('.active');
  var prevLink = activeLink.previousElementSibling;
  if (prevLink) {
    activeLink.classList.remove('active');
    prevLink.classList.add('active');
  }
}

function nextBtn() {
  var activeLink = document.querySelector('.active');
  var nextLink = activeLink.nextElementSibling;
  if (nextLink) {
    activeLink.classList.remove('active');
    nextLink.classList.add('active');
  }
}

function activeLink() {
  var clickedLink = event.target;
  var activeLink = document.querySelector('.active');
  activeLink.classList.remove('active');
  clickedLink.classList.add('active');
}
