//HtmlSteam
const mySteamName = document.getElementById('steam-my-name');
const mySteamStatus = document.getElementById('steam-my-status');

//steamToken
const steamToken = 'EAE4D2005BBDAAA113CB93DC6C8E9BF2';
//steamData
const steamUrl = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamToken}&steamids=76561198997254964`;
//fetch
onload() = {
    // fetch(steamUrl).then(response => response.json()).then(obj => console.log(obj));
}

/**
 * 
 * @param {HTMLElement} e 
 */
function dropdownToggle(e){
    console.log(e.nextElementSibling);
    const dropdown_menu = e.nextElementSibling;
    dropdown_menu.classList.toggle('none');
}

