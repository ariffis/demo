package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class Inventory {
    @Id
    private Long id;
    private String productName;
    private int quantity;
    private String supplier;

     // Constructors
    public Inventory(Long id, String productName, 
                    int quantity, String supplier) {
        this.id = id;
        this.productName = productName;
        this.quantity = quantity;
        this.supplier = supplier;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public String getSupplier() { return supplier; }
    public void setSupplier(String supplier) { this.supplier = supplier; }
}
