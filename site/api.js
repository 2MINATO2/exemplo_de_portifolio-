
async function profile(){
    const url = 'https://raw.githubusercontent.com/2MINATO2/js-developer-portfolio/main/data/profile.json'
    const parametro = await fetch(url)
    return await parametro.json()
}

















