package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Inventory;
import com.example.demo.repository.InventoryRepository;

@RestController
public class InventoryController {

    @Autowired
    InventoryRepository mySqlRepository;

    @GetMapping("/")
    public String getHome(){
        return "Home";
    }

    @GetMapping("/inventory")
    public Inventory getInventory() {
        Inventory p = new Inventory();
        p.setId("Test");
        p.setProductName("Name");
        p.setSupplier("Supplier");
        return p;
    }

    @GetMapping("/get-all-inventory")
    public List<Inventory> getAllInventory() {
        return mySqlRepository.findAll();
    }

}

