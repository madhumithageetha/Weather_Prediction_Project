package com.weather.prediction.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ForecastDayDTO {
    private String dayName;
    private String date;
    private Double maxTemp;
    private Double minTemp;
    private Double rainProbability;
    private String condition;
    private String icon;
}
