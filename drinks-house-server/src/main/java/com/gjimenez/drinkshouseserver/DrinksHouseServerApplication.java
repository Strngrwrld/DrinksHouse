package com.gjimenez.drinkshouseserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class DrinksHouseServerApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(DrinksHouseServerApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(DrinksHouseServerApplication.class);
	}

}
