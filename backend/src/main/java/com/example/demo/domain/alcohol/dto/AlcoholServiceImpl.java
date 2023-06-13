package com.example.demo.domain.alcohol.dto;

import com.example.demo.core.generic.ExtendedRepository;
import com.example.demo.core.generic.ExtendedServiceImpl;
import com.example.demo.domain.blogpost.BlogPost;
import lombok.extern.log4j.Log4j2;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Log4j2
@Service
public class AlcoholServiceImpl extends ExtendedServiceImpl<Alcohol> implements AlcoholService{

    private final AlcoholService alcoholService;

    @Autowired
    protected AlcoholServiceImpl(ExtendedRepository<Alcohol> alcoholRepository, Logger logger, AlcoholService alcoholService) {
        super(alcoholRepository, logger);
        this.alcoholService = alcoholService;
    }

    @Override
    public List<Alcohol> findAllByAlcoholId(UUID alcoholId) {
        return null;
    }

    @Override
    public Alcohol saveAlcohol(Alcohol newBottle) {
        return null;
    }
}
