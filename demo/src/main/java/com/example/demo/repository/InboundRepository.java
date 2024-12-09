package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Inbound;

public interface InboundRepository extends JpaRepository<Inbound, Integer> {
    
}
