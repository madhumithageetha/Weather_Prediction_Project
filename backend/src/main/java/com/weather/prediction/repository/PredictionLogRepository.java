package com.weather.prediction.repository;

import com.weather.prediction.model.PredictionLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PredictionLogRepository extends JpaRepository<PredictionLog, Long> {
    List<PredictionLog> findTop10ByCityNameIgnoreCaseOrderByCreatedAtDesc(String cityName);
    List<PredictionLog> findTop20ByOrderByCreatedAtDesc();
}
