package com.example.demo.repository;

import com.example.demo.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface InventoryRepository extends JpaRepository<Inventory, Integer> {
    // Custom query to search inventory by product name
    List<Inventory> findByProductNameContaining(String productName);
}
