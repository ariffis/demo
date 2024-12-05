package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, String> {
    // Custom query to search inventory by product name
    List<Inventory> findByProductNameContaining(String productName);
}
