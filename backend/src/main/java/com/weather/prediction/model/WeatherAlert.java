package com.weather.prediction.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "weather_alerts")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WeatherAlert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "alert_id")
    private Long alertId;

    @Column(name = "city_name", nullable = false, length = 100)
    private String cityName;

    @Column(name = "alert_type", nullable = false, length = 60)
    private String alertType;

    @Column(name = "severity_level", nullable = false, length = 20)
    private String severityLevel; // Caution, Warning, Severe

    @Column(name = "alert_message", nullable = false, columnDefinition = "TEXT")
    private String alertMessage;

    @Column(name = "threshold_triggered", nullable = false, length = 100)
    private String thresholdTriggered;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "issued_at")
    private LocalDateTime issuedAt = LocalDateTime.now();
}
