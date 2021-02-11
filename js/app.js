// Create click handler 
const searchCountry = document.getElementById('search-country');
searchCountry.addEventListener('click', function () {
    const inputCountry = document.getElementById('input-country').value;
    // console.log(inputCountry);
    loadCountryData(inputCountry);
});

// create async function 
const loadCountryData = async (inputCountry) => {
    const url = `https://restcountries.eu/rest/v2/name/${inputCountry}?fullText=true`;
    try {
        const promise = await fetch(url);
        const countryData = await promise.json();
        displayData(countryData);
    }
    catch (error) {
        console.log(error);
    }
};

// Create function for load data 
// function loadCountryData(inputCountry) {
//     fetch(`https://restcountries.eu/rest/v2/name/${inputCountry}?fullText=true`)
//         .then(promise => promise.json())
//         .then(countryData => {
//             console.log(countryData);
//             displayData(countryData);
//         });
// };

// create function for display data 
function displayData(countryData) {
    const myRegion = document.getElementById('region');
    const subRegion = document.getElementById('sub-region');
    const myBorder = document.getElementById('my-border');
    const myArea = document.getElementById('my-area');
    const myCapital = document.getElementById('capital');
    const myAltSpellings = document.getElementById('alt-spellings');
    const myPopulation = document.getElementById('my-population');
    const myLanguage = document.getElementById('my-language');
    const myTimeZone = document.getElementById('my-time-zone');
    const countryName = document.getElementById('country-name');
    for (let i = 0; i < countryData.length; i++) {
        const countryInfo = countryData[i];
        countryName.innerText = countryInfo.name;
        myRegion.innerText = countryInfo.region;
        subRegion.innerText = countryInfo.subregion;
        myBorder.innerText = countryInfo.borders;
        myArea.innerText = countryInfo.area;
        myCapital.innerText = countryInfo.capital;
        myAltSpellings.innerText = countryInfo.altSpellings;
        myPopulation.innerText = countryInfo.population;
        myLanguage.innerText = countryInfo.languages[0].nativeName;
        myTimeZone.innerText = countryInfo.timezones;
        const countryFlag = countryInfo.flag;
        const myFlag = document.getElementById('flag');
        myFlag.src = `${countryFlag}`;
    }
};
