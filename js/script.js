document.addEventListener("DOMContentLoaded", function () {
  // ค้นหาปุ่มโดยใช้ id
  var submitButton = document.getElementById("submit-button");

  // เพิ่มการจัดการเหตุการณ์คลิก
  submitButton.addEventListener("click", function () {
    // เมื่อคลิกที่ปุ่ม Submit Now, เปิดหน้า "job.html"
    window.location.href = "job.html";
  });
});
