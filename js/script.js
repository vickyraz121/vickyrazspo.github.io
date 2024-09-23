const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const humburger = document.querySelector("#humburger-menu");
document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function sendMessage() {
  // Get input values
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Construct WhatsApp message
  var whatsappMessage = "Name: " + name + "%0A";
  whatsappMessage += "Phone: " + phone + "%0A";
  whatsappMessage += "Message: " + message;

  // Open WhatsApp with pre-filled message
  window.open(
    "https://api.whatsapp.com/send?phone=6281288508878&text=KODE%20PROMO%20:%20(V3xyzH)Halo%20gan,%20Saya%20mau%20Tanya%20Info%20Kursus%E2%80%A6.." +
      whatsappMessage
  );
}

/*const slider = document.querySelector(".slider");
let counter = 1;

function slide() {
  slider.style.transform = `translateX(${-counter * 100}%)`;
  counter++;
  if (counter === slider.children.length) {
    counter = 0;
  }
}

setInterval(slide, 2000);*/