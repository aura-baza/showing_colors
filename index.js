window.addEventListener("DOMContentLoaded", () => {

  const container_background = document.querySelector(".container_colors");
  const link1 = document.querySelector(".link1");
  const link2 = document.querySelector(".link2");
  const span_color = document.querySelector(".show");
  const btn_color = document.querySelector(".color_show");

  const colors=["red","aqua","yellow","green","blue"];

  function colorRandom() {
    let indice_random=Math.floor(Math.random()*colors.length);
    container_background.style.backgroundColor=colors[indice_random];
    span_color.textContent=colors[indice_random];
  }
  const colorsAvanced=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
  function colorRandomAvanced() {
    let hast="#";
    for (let i = 0; i <6; i++) {
        let indice_random=Math.floor(Math.random()*colorsAvanced.length);
        hast+=colorsAvanced[indice_random];
    }
    container_background.style.backgroundColor=hast;
    span_color.textContent=hast;
  }
  const menuItems =[link1,link2];
  menuItems.map((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        container_background.style.backgroundColor="#f1f5f8";
        span_color.textContent="#f1f5f8";
        menuItems.map((linkb)=>{
        linkb.classList.remove("item_active");
        });
        link.classList.add("item_active");
    });
  });
  btn_color.addEventListener("click", ()=>{
    if (link1.classList.contains("item_active")) {
        colorRandom();
    }else{
        colorRandomAvanced();
    }
  });
});
