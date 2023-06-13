package com.example.demo.domain.alcohol.dto;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/alcohol")
@Controller
public class AlcoholController {

    private final AlcoholService alcoholService;

    @Autowired
    public AlcoholController(AlcoholService alcoholService) {
        this.alcoholService = alcoholService;
    }
}
