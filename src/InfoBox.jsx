import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const hot_url = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const cold_url = "https://images.unsplash.com/photo-1577457943926-11193adc0563?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rain_url = "https://plus.unsplash.com/premium_photo-1711065405039-6216f2f2c7d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : cold_url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}