package com.handson.jpa.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class ProductController {
	
	
	@GetMapping("/test")
	public String testDocker() {
		return "docker says hello";
	}
}
