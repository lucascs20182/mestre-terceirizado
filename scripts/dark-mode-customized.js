function personalizaComponentesNaoEstilizadosPeloPlugin() {
    const iptDarkSwitch = document.querySelector('#darkSwitch');
    const navBar = document.querySelector('#navbar-switcher');
    const card = document.querySelectorAll('.card');
    const textCard = document.querySelectorAll('div.cards p');
    const imgLogo = document.querySelector('#navbar-switcher > div > a > div > img');

    if(!localStorage.getItem("darkSwitch")!==null&&localStorage.getItem("darkSwitch")==="dark"){
        // console.log(iptDarkSwitch.checked)

        navBar.classList.remove("navbar-light");
        navBar.classList.add("navbar-dark");

        card[0].style.backgroundColor = "#111";
        card[1].style.backgroundColor = "#111";
        card[2].style.backgroundColor = "#111";

        textCard[0].style.color = "#fff";
        textCard[1].style.color = "#fff";
        textCard[2].style.color = "#fff";

        imgLogo.src="./assets/logo-dark.png";

    }else{
        // console.log(iptDarkSwitch.checked)

        navBar.classList.remove("navbar-dark");
        navBar.classList.add("navbar-light");

        card[0].style.backgroundColor = "#fff";
        card[1].style.backgroundColor = "#fff";
        card[2].style.backgroundColor = "#fff";

        textCard[0].style.color = "#000";
        textCard[1].style.color = "#000";
        textCard[2].style.color = "#000";

        imgLogo.src="./assets/logo.png";
    }
};

personalizaComponentesNaoEstilizadosPeloPlugin();
