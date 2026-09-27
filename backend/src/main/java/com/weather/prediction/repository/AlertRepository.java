package com.weather.prediction.repository;

import com.weather.prediction.model.WeatherAlert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AlertRepository extends JpaRepository<WeatherAlert, Long> {
    List<WeatherAlert> findByCityNameIgnoreCaseAndIsActiveTrue(String cityName);
    List<WeatherAlert> findByIsActiveTrue();
}
