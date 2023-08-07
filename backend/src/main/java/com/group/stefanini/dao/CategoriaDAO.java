package com.group.stefanini.dao;

import com.group.stefanini.models.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CategoriaDAO extends CrudRepository<Categoria, Long> {


    public Categoria findCategoriaById(Integer id);

}
