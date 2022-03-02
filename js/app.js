//Formspree Submit
function formSpree() {
  var form = document.getElementById("my-form");

  async function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("my-form-button").innerHTML = "Sending...";
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "Message Sent, I will get back to you soon!";
          document.getElementById("my-form-button").innerHTML = "Sent!";
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
                document.getElementById("my-form-button").innerHTML = "Send Message!";
            } else {
              status.innerHTML =
                "Oops! There was a problem submitting your form";
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
  }
  form.addEventListener("submit", handleSubmit);
}

gsap.registerPlugin(ScrollTrigger);


gsap.to(".title", {
  duration: 3,
  top: "35vh",
  ease: "elastic.out(1, 0.3)",
});
gsap.to(".subtitle", {
  duration: 3.5,
  top: "50vh",
  ease: "elastic.out(1, 0.3)",
});

gsap.to(".about-text", {
  y: -300,
  opacity: 1,
  duration: 1,
  scrollTrigger: ".about-text",
});

if(screen.width > 1100 ) {
gsap.to(".project-3", {
  x: 2000,
  duration: 1.5,
  ease: "back.out(2.5)",
  scrollTrigger: ".portfolio-projects",
});

gsap.to(".project-2", {
  x: 1600,
  ease: "back.out(2.5)",
  delay: 0.3,
  duration: 1.5,
  scrollTrigger: ".portfolio-projects",
});

gsap.to(".project-1", {
  x: 1100,
  ease: "back.out(2.5)",
  delay: 0.6,
  duration: 1.5,
  scrollTrigger: ".portfolio-projects",
});
} else if(screen.width <= 1100 ) {

  gsap.to(".project-1", {
    x: 1100,
    ease: "back.out(2.5)",
    duration: 1.5,
    scrollTrigger: ".portfolio-projects",
  });
  gsap.to(".project-2", {
    x: 1600,
    ease: "back.out(2.5)",
    delay: 0.3,
    duration: 1.5,
    scrollTrigger: ".portfolio-projects",
  });

    gsap.to(".project-3", {
    x: 2000,
    delay: 0.6,
    duration: 1.5,
    ease: "back.out(2.5)",
    scrollTrigger: ".portfolio-projects",
  });
  
}

window.onload = function () {
  formSpree();
};
