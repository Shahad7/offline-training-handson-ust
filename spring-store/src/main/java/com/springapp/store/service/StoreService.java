package com.springapp.store.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springapp.store.items.Apple;
import com.springapp.store.items.Bread;
import com.springapp.store.items.Chocolate;
import com.springapp.store.items.Egg;
import com.springapp.store.items.Item;
import com.springapp.store.items.Milk;
import com.springapp.store.repository.AppleRepository;
import com.springapp.store.repository.BreadRepository;
import com.springapp.store.repository.ChocolateRepository;
import com.springapp.store.repository.EggRepository;
import com.springapp.store.repository.MilkRepository;

@Service
public class StoreService {
	
	@Autowired
	EggRepository eggRepository;
	@Autowired
	AppleRepository appleRepository;
	@Autowired
	MilkRepository milkRepository;
	@Autowired
	BreadRepository breadRepository;
	@Autowired
	ChocolateRepository chocolateRepository;
	
	public Item addItem(Map<String,Object> map) {
		if(((String)map.get("item-type")).equals("apple")) {
		return appleRepository.save(new Apple(map));
		}
		
		if(((String)map.get("item-type")).equals("egg")) {
			return eggRepository.save(new Egg());
		}
		
		if(((String)map.get("item-type")).equals("bread")) {
			return breadRepository.save(new Bread());
		}
		
		if(((String)map.get("item-type")).equals("milk")) {
			return milkRepository.save(new Milk());
		}
		
		if(((String)map.get("item-type")).equals("chocolate")) {
			return chocolateRepository.save(new Chocolate());
		}
		
		return null;
		
	}
	
	
}
