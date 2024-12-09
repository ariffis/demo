package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Inbound;
import com.example.demo.repository.InboundRepository;

@RestController
public class InboundController {
     @Autowired
    private InboundRepository mySqlRepository;

     //SELECT * from inbound
    @GetMapping("/get-all-inbound")
    public List<Inbound> getAllInbound() {
        return mySqlRepository.findAll();
    }
}
