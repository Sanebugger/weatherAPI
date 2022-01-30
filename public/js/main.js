const cityname = document.getElementById('cityname');
const submittbtn = document.getElementById('submitbtn');

const city_name = document.getElementById('city_name');

const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityname.value;

    if (cityval === "") {
         city_name.innerText =`pls write name of city `;
    } else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=3e0930d631ac79d49bcd4eeddc000553`
            const response = await fetch(url);
            console.log(response);
        }catch{
            city_name.innerText = `pls enter city name properly`
        }
    }


}
submitbtn.addEventListener('click', getinfo);