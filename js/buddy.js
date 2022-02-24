const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = x => {
    const buddies = x.results
    const buddiesDiv = document.getElementById('buddies')
    for(const buddy of buddies){
        console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p')
        p.innerText = buddy.email
        buddiesDiv.appendChild(p)
    }
}
loadBuddies()