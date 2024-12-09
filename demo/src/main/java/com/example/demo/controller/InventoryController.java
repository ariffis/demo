package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Inventory;
import com.example.demo.repository.InventoryRepository;

@RestController
public class InventoryController {

    @Autowired
    private InventoryRepository mySqlRepository;

    //SELECT * from inventory
    @GetMapping("/get-all-inventory")
    public List<Inventory> getAllInventory() {
        return mySqlRepository.findAll();
    }

    //SELECT from inventory WHERE inventory.inventory_id = {id}
    @GetMapping("/get-inventory/{id}")
    public Inventory getInventory(@PathVariable("id") String id) {
        return mySqlRepository.findById(id).get();
    }

    @GetMapping("/search-inventory")
    public List<Inventory> searchInventory(@RequestParam("query") String query) {
    return mySqlRepository.findByProductNameContainingIgnoreCaseOrSupplierContainingIgnoreCase(query, query);
    }

    //DELETE FROM inventory WHERE inventory_id = {id}
    @DeleteMapping("/delete-inventory/{id}")
    public boolean deleteInventory(@PathVariable("id") String id) {
       if(!mySqlRepository.findById(id).equals(Optional.empty())){
            mySqlRepository.deleteById(id);
            return true;
       }
       return false;
    }

    @PutMapping("/update-inventory")
    public String updateInventory(@RequestBody Inventory updatedInventory) 
    {
        //TODO: process PUT request
        Optional<Inventory> existingInventoryOpt = mySqlRepository.findById(updatedInventory.getId());
        
        if (existingInventoryOpt.isPresent()){
            Inventory existingInventory = existingInventoryOpt.get();
    
            // Update the fields of the existing inventory item
            existingInventory.setProductName(updatedInventory.getProductName());
            existingInventory.setSupplier(updatedInventory.getSupplier());
    
            // Save the updated inventory back to the database
            mySqlRepository.save(existingInventory);
    
            return "Inventory item updated successfully!";
        } else {
            // Return an error message if the item is not found
            return "Inventory item not found.";
        }
    }

    @PostMapping("/add-inventory")
    public String addInventory(@RequestBody Inventory newInventory) {
    if (mySqlRepository.existsById(newInventory.getId())) {
        return "Inventory item with this ID already exists.";
    }

    mySqlRepository.save(newInventory);
    return "Inventory item added successfully!";
}
}

