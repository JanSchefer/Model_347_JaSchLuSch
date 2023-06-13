package com.example.demo.domain.alcohol.dto;

import com.example.demo.core.generic.ExtendedService;

import java.util.List;
import java.util.UUID;

public interface AlcoholService extends ExtendedService<Alcohol> {

    List<Alcohol> findAllByAlcoholId(UUID alcoholId);

    Alcohol saveAlcohol(Alcohol newBottle);
}
