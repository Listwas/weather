import React from 'react';
import styles from './WeatherBox.module.css';

interface WeatherBoxProps {
  country?: string;
  temperature?: number;
}

const WeatherBox: React.FC<WeatherBoxProps> = ({ 
  country = "Sample Country", 
  temperature = 22 
}) => {
  const handleClick = () => {
    console.log(`Navigate to ${country} details`);
  };

  return (
    <div className={styles.weather_box} onClick={handleClick}>
      <div className={styles.basic_info}>
        <h3 className={styles.country_name}>{country}</h3>
        <div className={styles.temperature}>{temperature}°C</div>
      </div>
      
      <div className={styles.hover_details}>
        <p>Humidity: 65%</p>
        <p>Wind: 12 km/h</p>
        <p>Conditions: Sunny</p>
      </div>
    </div>
  );
};

export default WeatherBox;
