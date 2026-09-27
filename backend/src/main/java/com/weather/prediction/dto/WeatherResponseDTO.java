package com.weather.prediction.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WeatherResponseDTO {
    private String cityName;
    private String country;
    private Double currentTemperature;
    private Double feelsLike;
    private Integer humidity;
    private Double pressure;
    private Double windSpeed;
    private Integer cloudCover;
    private String weatherCondition;
    private String iconCode;
    private String queryTimestamp;

    // Predictions
    private Double tomorrowPredictedTemp;
    private Double tomorrowRainProbability;
    private String tomorrowWeatherSummary;
    private Double modelConfidenceScore;

    // 7-Day Forecast Trend
    private List<ForecastDayDTO> sevenDayForecast;

    // Active Warning Alerts
    private List<AlertDTO> activeAlerts;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class AlertDTO {
        private String alertType;
        private String severity;
        private String message;
        private String badgeColor;
    }
}
