const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = x => {
    console.log(x);
}
loadBuddies()