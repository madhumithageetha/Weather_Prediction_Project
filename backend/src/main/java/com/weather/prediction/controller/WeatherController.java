package com.weather.prediction.controller;

import com.weather.prediction.dto.WeatherResponseDTO;
import com.weather.prediction.model.PredictionLog;
import com.weather.prediction.model.WeatherAlert;
import com.weather.prediction.repository.AlertRepository;
import com.weather.prediction.repository.PredictionLogRepository;
import com.weather.prediction.service.WeatherPredictionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weather")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class WeatherController {

    private final WeatherPredictionService predictionService;
    private final AlertRepository alertRepository;
    private final PredictionLogRepository predictionLogRepository;

    @GetMapping("/forecast")
    public ResponseEntity<WeatherResponseDTO> getForecast(@RequestParam(defaultValue = "Salem") String city) {
        WeatherResponseDTO forecast = predictionService.getForecastAndPrediction(city);
        return ResponseEntity.ok(forecast);
    }

    @GetMapping("/alerts")
    public ResponseEntity<List<WeatherAlert>> getActiveAlerts() {
        List<WeatherAlert> alerts = alertRepository.findByIsActiveTrue();
        return ResponseEntity.ok(alerts);
    }

    @GetMapping("/history")
    public ResponseEntity<List<PredictionLog>> getPredictionHistory(@RequestParam(required = false) String city) {
        if (city != null && !city.trim().isEmpty()) {
            return ResponseEntity.ok(predictionLogRepository.findTop10ByCityNameIgnoreCaseOrderByCreatedAtDesc(city));
        }
        return ResponseEntity.ok(predictionLogRepository.findTop20ByOrderByCreatedAtDesc());
    }
}
