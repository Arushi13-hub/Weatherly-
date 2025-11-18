const weatherImages = {
    haze : require('./assets/haze.png'),
    mist :require('./assets/mist.png'),
    smoke : require('./assests/smoke.png'),
    dust : require('/assests/dust.png'),
    fog : require('./assests/fog.png'),
    cloudy: require('./assests/cloudy.png'),
    clear : require('./assests/clear.png'),
    hurricane : require('./assests/hurricane.png'),
    rainy : require('./assests/rainy.png'),
    thunderstrom : require('./assests/thunderstrom.png'),
}

const defaultWeatherImage = require('./assests/default.png');
 <img
 src={weatherImages[weatherMain] || defaultWeatherImage}
 alt={weatherMain}
 style={{width:"80px",margin:"20px 0"}}/>