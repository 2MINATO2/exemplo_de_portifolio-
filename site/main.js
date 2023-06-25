

function dandovalores(profiledata){
    const photo = document.getElementById('profile.photo')
    photo.src = profiledata.photo

    const name = document.getElementById('profile.name')
    name.innerText = profiledata.name

    const pessoa = document.getElementById('profile.pessoa')
    pessoa.innerText = profiledata.job

    const local = document.getElementById('profile.local')
    local.innerText = profiledata.location

    const tel = document.getElementById('profile.tel')
    tel.innerText = profiledata.phone

    const email = document.getElementById('profile.email')
    email.innerText = profiledata.email

}


function primeiraopt(profiledata){
    const sofit = document.getElementById('softSkills')
    
    sofit.innerHTML = profiledata.skills.softSkills.map((skl) => `<li>${skl}</li>`).join(' ')
}

function segundaopt(profiledata){
    const foto = document.getElementById('fotos')
    
    foto.innerHTML = profiledata.skills.hardSkills.map((skl) => `<li><img src="${skl.logo}"></li>`).join(' ')
}


function terceiraopt(profiledata){
    const idioma = document.getElementById('languages')
    
    idioma.innerHTML = profiledata.languages.map((skl) => `<li>${skl}</li>`).join(' ')
}

function quartoopt(profiledata){
    const portfolio = document.getElementById('portfolio')
    
    portfolio.innerHTML = profiledata.portfolio.map((skl) => `<li>
    <h3 class="title">${skl.name}</h3>
    <a href="${skl.url}" target="_blank">${skl.url}</a>
    </li>`).join(' ')
}

function quintoopt(profiledata){
    const experience = document.getElementById('professionalExperience')
    
    experience.innerHTML = profiledata.professionalExperience.map((skl) => `
    <li>
        <h3 class="title">${skl.name}</h3>
        <p class="period">${skl.period}</p>
        <p>${skl.description}</p>
    </li>
    `).join(' ')
}



(async () => {
    const profiledata = await profile()
    dandovalores(profiledata)
    primeiraopt(profiledata)
    segundaopt(profiledata)
    terceiraopt(profiledata)
    quartoopt(profiledata)
    quintoopt(profiledata)
})()






















