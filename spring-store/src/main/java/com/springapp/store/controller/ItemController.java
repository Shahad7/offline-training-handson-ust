package com.springapp.store.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.store.items.Item;
import com.springapp.store.service.StoreService;

@RestController
@RequestMapping("api/v1")
public class ItemController {

	
	@Autowired
	StoreService service;
	@PostMapping("/item")
	public Item addItem(@RequestBody HashMap<String, Object> map) {
				
		return service.addItem(map);
		
	}
}
