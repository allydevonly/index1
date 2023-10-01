function Test_Page(){   
  let Mytitle = document.getElementById("title_1")
Mytitle.innerHTML = "js title"
alert('press okay to continue');
}

let myjsbutton = document.getElementById('js_btn')
myjsbutton.addEventListener('click',Test_Page );