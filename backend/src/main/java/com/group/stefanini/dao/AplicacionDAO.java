package com.group.stefanini.dao;

import com.group.stefanini.models.Aplicacion;
import org.springframework.data.repository.CrudRepository;

public interface AplicacionDAO extends CrudRepository<Aplicacion,Long> {


    Aplicacion findAplicacionById(Integer id);
}
