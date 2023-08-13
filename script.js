// Your existing JavaScript code remains the same
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 900) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
};

const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
const thankYouMessage = document.getElementById("thankYouMessage");

submitButton.addEventListener("click", function () {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_zwz45d1";
    const templateID = "template_09jtojp";

    emailjs.send(serviceID, templateID, params).then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent successfully!")
        })
        .catch(err=>console.log(err));
});



