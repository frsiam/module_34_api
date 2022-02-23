const loadQoutes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoutes(data))
}

const displayQoutes = x => {
    const qouteSection = document.getElementById('quote')
    qouteSection.innerText = x.quote
}