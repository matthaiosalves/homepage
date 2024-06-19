const projects = [
    {
        imgSrc: "assets/img/maquira.jpg",
        subtitle: "Web",
        title: "Maquira Dental Group",
        link: "//maquira.com.br/"
    },
    {
        imgSrc: "assets/img/pactoglobal.jpg",
        subtitle: "Web",
        title: "Pacto Global - Rede Brasil",
        link: "//www.pactoglobal.org.br/"
    },
    {
        imgSrc: "assets/img/lucastaveirapage.png",
        subtitle: "Web",
        title: "Lucas Taveira Advogados",
        link: "//lucastaveiraadvogados.com.br/"
    },
    {
        imgSrc: "assets/img/arcoeducacaopage.png",
        subtitle: "Web",
        title: "Arco Educação",
        link: "//arcoeducacao.com.br/esg/"
    },
    {
        imgSrc: "assets/img/fatalmodel.png",
        subtitle: "Web",
        title: "Torcedor Fatal",
        link: "assets/img/torcedorfatalpage.png"
    },
    {
        imgSrc: "assets/img/desafioxpnba.png",
        subtitle: "Web",
        title: "Desafio impossível XP/NBA",
        link: "assets/img/desafioxpnbapage.png"
    },
        {
        imgSrc: "assets/img/pedidosdeservico.png",
        subtitle: "Web / Mobile",
        title: "Pedidos de serviço - Marinha do Brasil (SPI)",
        link: "//marcosdt.netlify.app/"
    },
];

const skills = [
    {
        title: "FrontEnd",
        groups: [
            [
                { name: "ReactJs", level: "" },
                { name: "VueJs", level: "" },
            ],
            [
                { name: "Bootstrap", level: "" },
                { name: "Foundation Handlebars", level: "" },
            ]
        ]
    },
    {
        title: "BackEnd",
        groups: [
            [
                { name: "Laravel", level: "" },
                { name: "CakePHP", level: "" },
                { name: "WordPress", level: "" }
          ],
          [
                { name: "MySQL", level: "" },
          ],
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects, 'projects');
    renderSkills(skills, 'skills');
});

function renderProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    projects.forEach(project => {
        const article = createProjectCard(project);
        container.appendChild(article);
    });
}

function createProjectCard(project) {
    const article = document.createElement('article');
    article.classList.add('projects__card');
    article.innerHTML = `
        <img src="${project.imgSrc}" alt="" class="projects__img">
        <div class="projects__modal">
            <div>
                <span class="projects__subtitle">${project.subtitle}</span>
                <h3 class="projects__title">${project.title}</h3>
                <a href="${project.link}" target="_blank" class="projects__button button button__small">
                    <i class="ri-link"></i>
                </a>
            </div>
        </div>
    `;
    return article;
}

function renderSkills(skills, containerId) {
    const container = document.getElementById(containerId);
    skills.forEach(skillArea => {
        const areaDiv = createSkillArea(skillArea);
        container.appendChild(areaDiv);
    });
}

function createSkillArea(skillArea) {
    const areaDiv = document.createElement('div');
    areaDiv.classList.add('skills__area');

    const title = document.createElement('h3');
    title.classList.add('skills__title');
    title.textContent = skillArea.title;
    areaDiv.appendChild(title);

    const boxDiv = document.createElement('div');
    boxDiv.classList.add('skills__box');

    skillArea.groups.forEach(group => {
        const groupDiv = createSkillGroup(group);
        boxDiv.appendChild(groupDiv);
    });

    areaDiv.appendChild(boxDiv);
    return areaDiv;
}

function createSkillGroup(group) {
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('skills__group');

    group.forEach(skill => {
        const dataDiv = createSkillData(skill);
        groupDiv.appendChild(dataDiv);
    });

    return groupDiv;
}

function createSkillData(skill) {
    const dataDiv = document.createElement('div');
    dataDiv.classList.add('skills__data');

    const icon = document.createElement('i');
    icon.classList.add('ri-checkbox-circle-line');
    dataDiv.appendChild(icon);

    const skillInfo = document.createElement('div');

    const skillName = document.createElement('h3');
    skillName.classList.add('skills__name');
    skillName.textContent = skill.name;
    skillInfo.appendChild(skillName);

    const skillLevel = document.createElement('span');
    skillLevel.classList.add('skills__level');
    skillLevel.textContent = skill.level;
    skillInfo.appendChild(skillLevel);

    dataDiv.appendChild(skillInfo);

    return dataDiv;
}
