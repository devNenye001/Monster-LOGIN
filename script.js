    function checkLogin() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const correctEmail = "user";
      const correctPassword = "user";

      if (email === correctEmail && password === correctPassword) {
        window.location.href = "/correct.html";
      } else {
        window.location.href = "/wrong.html";
      }
    }