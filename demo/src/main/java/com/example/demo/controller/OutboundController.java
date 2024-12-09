package com.example.demo.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Outbound;
import com.example.demo.repository.OutboundRepository;

@RestController
public class OutboundController {
     @Autowired
    private OutboundRepository mySqlRepository;

     //SELECT * from outbound
    @GetMapping("/get-all-outbound")
    public List<Outbound> getAllOutbound() {
        return mySqlRepository.findAll();
    }
}
