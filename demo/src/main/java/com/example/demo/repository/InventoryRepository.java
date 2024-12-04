package com.example.demo.repository;

import com.example.demo.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer> {
    // Custom query to search inventory by product name
    List<Inventory> findByProductNameContaining(String productName);
}
