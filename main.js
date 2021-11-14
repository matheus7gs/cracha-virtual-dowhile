const userLinks = {
   github: 'matheus7gs',
   //youtube: '',
   linkedIn: 'matheusgomes747',
   facebook: 'matheus7gs',
   instagram: 'matheusgomes_747',
   twitter: 'Matheusgomes747'
 }
 
 function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${userLinks.github}`
    
    fetch(url).then(response => response.json()).then(data => {
       userName.textContent = data.name
       userBio.textContent = data.bio
       userLink.href = data.html_url
       userImage.src = data.avatar_url
       userLogin.textContent = data.login
       pageTitle.textContent = `${data.name} - DoWhile 2021`
    })
 }

 getGithubProfileInfos()


 function changeUserLinks() {
   for (let li of socialLinks.children) {
     const social = li.getAttribute('class')
     li.children[0].href = `https://${social}.com/${userLinks[social]}`
   }
 }
 changeUserLinks()
