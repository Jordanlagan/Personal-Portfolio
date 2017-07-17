$("#contactForm").submit(function(event) {
  event.preventDefault();
  alert("Hello " + document.getElementById("name").value);
})