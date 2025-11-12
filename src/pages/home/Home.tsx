import s from './Home.module.css';
import WeatherBox from './components/WeatherBox.tsx';

function Home() {
  return (
    <>
        <div className={s.main_container}>
            <div className={s.weather_boxes}>
                <WeatherBox />
                <WeatherBox />
                <WeatherBox />
                <WeatherBox />
                <WeatherBox />
                <WeatherBox />
            </div>
        </div>
    </>
  )
}

export default Home;
