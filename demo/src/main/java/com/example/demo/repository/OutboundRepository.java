package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Outbound;

public interface OutboundRepository extends JpaRepository<Outbound, Integer> {
    
}
