const button = document.getElementById("button");
      const input = document.getElementById("input");

      button.onclick = function () {
        const randomstring = Math.random().toString(36).slice(-8);
        input.value = randomstring;
      };