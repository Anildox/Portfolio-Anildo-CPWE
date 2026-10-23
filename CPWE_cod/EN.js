/* ---------- TRADUÇÕES PT / EN ---------- */
const T = {
    pt: {
        nav_inicio:"Início", nav_sobre:"Sobre Mim", nav_portfolio:"Portfolio de Projectos", nav_contactos:"Contactos",
        ola:"Olá sou eu,",
        cargo:"Técnico de Suporte Informático",
        intro:"Sou apaixonado pela tecnologia e desenvolvimento de páginas web, movido pela curiosidade e sempre pronto para transformar ideias em soluções digitais de forma criativa.",
        sobre_a:"Sobre", sobre_b:"mim",
        quem:"Quem sou eu?",
        quem_txt:"Sou estudante de Suporte Informático, apaixonado por tecnologia e informática. Gosto de aprender sobre computadores, redes, sistemas operativos, manutenção e desenvolvimento de páginas web. Sou uma pessoa dedicada, curiosa e com vontade de adquirir novos conhecimentos e melhorar constantemente as minhas habilidades.",
        dados:"Dados Pessoais",
        d_nome:"Nome:", d_idade:"Idade:", d_idade_v:"17 anos",
        d_nasc:"Data de nascimento:", d_nasc_v:"24 de Maio de 2009",
        d_nac:"Nacionalidade:", d_nac_v:"Moçambicana",
        d_nat:"Naturalidade:", d_nat_v:"Zambézia, Moçambique",
        habil:"Minhas habilidades",
        h1:"Manutenção de computadores", h2:"Instalação e configuração de software",
        h3:"Instalação de sistemas operativos", h4:"Configuração de redes",
        h5:"Suporte técnico a utilizadores", h6:"HTML e CSS",
        h7:"Microsoft Office", h8:"Noções de segurança informática",
        interes:"Meus interesses",
        i1:"Tecnologia", i2:"Programação", i3:"Jogos",
        i4:"Segurança informática", i5:"Desenvolvimento Web", i6:"Manutenção de computadores",
        port_t:"Portfolio de Projectos",
        port_s:"Clique nos links abaixo para ver os meus projectos",
        p1:"Formulário HTML", p2:"Rede de computadores – Cisco Packet Tracer",
        p3:"Site sobre informática", p4:"Currículo HTML",
        cont_t:"Contactos",
        cont_s:"Clique nos ícones abaixo para falar comigo"
    },
    en: {
        nav_inicio:"Home", nav_sobre:"About Me", nav_portfolio:"Project Portfolio", nav_contactos:"Contacts",
        ola:"Hi, I'm",
        cargo:"IT Support Technician",
        intro:"I am passionate about technology and web development, driven by curiosity and always ready to turn ideas into digital solutions in a creative way.",
        sobre_a:"About", sobre_b:"me",
        quem:"Who am I?",
        quem_txt:"I am an IT Support student, passionate about technology and computing. I enjoy learning about computers, networks, operating systems, maintenance and web development. I am a dedicated, curious person with a desire to gain new knowledge and constantly improve my skills.",
        dados:"Personal Information",
        d_nome:"Name:", d_idade:"Age:", d_idade_v:"17 years old",
        d_nasc:"Date of birth:", d_nasc_v:"May 24, 2009",
        d_nac:"Nationality:", d_nac_v:"Mozambican",
        d_nat:"Place of birth:", d_nat_v:"Zambézia, Mozambique",
        habil:"My skills",
        h1:"Computer maintenance", h2:"Software installation and configuration",
        h3:"Operating system installation", h4:"Network configuration",
        h5:"User technical support", h6:"HTML and CSS",
        h7:"Microsoft Office", h8:"Basic IT security knowledge",
        interes:"My interests",
        i1:"Technology", i2:"Programming", i3:"Games",
        i4:"IT Security", i5:"Web Development", i6:"Computer maintenance",
        port_t:"Project Portfolio",
        port_s:"Click the links below to see my projects",
        p1:"HTML Form", p2:"Computer network – Cisco Packet Tracer",
        p3:"IT website", p4:"HTML Résumé",
        cont_t:"Contacts",
        cont_s:"Click the icons below to get in touch"
    }
};

const btnIdioma = document.getElementById("btnIdioma");

function aplicarIdioma(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const txt = T[lang][el.dataset.i18n];
        if (txt !== undefined) el.textContent = txt;
    });
    // o botão mostra o idioma para o qual vai mudar
    btnIdioma.textContent = lang === "pt" ? "EN" : "PT";
    try { localStorage.setItem("idioma", lang); } catch(e){}
}

btnIdioma.addEventListener("click", () => {
    aplicarIdioma(document.documentElement.lang === "pt" ? "en" : "pt");
});

let inicial = "pt";
try { inicial = localStorage.getItem("idioma") || "pt"; } catch(e){}
aplicarIdioma(inicial);

/* ---------- MENU MOBILE ---------- */
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    btnMenu.classList.toggle("aberto", aberto);
    btnMenu.setAttribute("aria-expanded", aberto);
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("aberto");
    btnMenu.classList.remove("aberto");
    btnMenu.setAttribute("aria-expanded", "false");
}));