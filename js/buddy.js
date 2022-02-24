const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = x => {
    const buddies = x.results
    const buddiesDiv = document.getElementById('buddies')
    for(const buddy of buddies){
        console.log(buddy.name.title);
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}`
        buddiesDiv.appendChild(p)
    }
}
loadBuddies()