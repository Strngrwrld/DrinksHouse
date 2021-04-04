package com.gjimenez.drinkshouseserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gjimenez.drinkshouseserver.model.Category;

@Repository
public interface ICategoryRepository extends JpaRepository<Category, Integer>{

}
