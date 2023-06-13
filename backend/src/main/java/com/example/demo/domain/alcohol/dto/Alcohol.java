package com.example.demo.domain.alcohol.dto;

import com.example.demo.core.generic.ExtendedEntity;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.UUID;

public class Alcohol extends ExtendedEntity {

    @NotNull
    private String name;

    @NotNull
    private String type;

    @NotNull
    private int count;

    @NotNull
    private float percent;

    @NotNull
    private String country;

    public Alcohol(UUID id, String name, String type, int count, float percent, String country) {
        super(id);
        this.name = name;
        this.type = type;
        this.count = count;
        this.percent = percent;
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public float getPercent() {
        return percent;
    }

    public void setPercent(float percent) {
        this.percent = percent;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
