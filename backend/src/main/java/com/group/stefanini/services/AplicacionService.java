package com.group.stefanini.services;

import com.group.stefanini.models.Aplicacion;

import java.util.List;

public interface AplicacionService {

    List<Aplicacion> findAll();
    List<Aplicacion> findByCategoria(Integer categoria_id);
    Aplicacion findById(Integer aplicacion_id);
    String addCalificacion(Integer id, Integer calificacion);
}
