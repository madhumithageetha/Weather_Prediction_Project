package com.weather.prediction.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "prediction_logs")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PredictionLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pred_id")
    private Long predId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "city_name", nullable = false, length = 100)
    private String cityName;

    @Column(name = "predicted_date", nullable = false)
    private LocalDate predictedDate;

    @Column(name = "predicted_max_temp", nullable = false)
    private Double predictedMaxTemp;

    @Column(name = "predicted_min_temp", nullable = false)
    private Double predictedMinTemp;

    @Column(name = "precipitation_probability", nullable = false)
    private Double precipitationProbability;

    @Column(name = "weather_summary", nullable = false, length = 100)
    private String weatherSummary;

    @Column(name = "model_algorithm", length = 50)
    private String modelAlgorithm;

    @Column(name = "confidence_score")
    private Double confidenceScore;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
