package com.cyclone.start;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.cyclone"})
public class Demo {
    public static void main(String[] args) {
        SpringApplication.run(Demo.class,args);

    }
}
