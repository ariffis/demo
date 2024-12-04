package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.*;

@Entity
@Table(name="inventory")
public class Inventory implements Serializable {
    @Id
    @Column(name = "inventory_id") 
    private String id;
    @Column(name = "product_name") 
    private String productName;
    @Column(name = "supplier") 
    private String supplier;

    public Inventory() {    }
     // Constructors
    public Inventory(String id, String productName, String supplier) {
        this.id = id;
        this.productName = productName;
        this.supplier = supplier;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public String getSupplier() { return supplier; }
    public void setSupplier(String supplier) { this.supplier = supplier; }
}
