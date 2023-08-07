package com.group.stefanini.services;

import com.group.stefanini.models.Categoria;

import java.util.List;

public interface CategoriaService {

    public List<Categoria> findAll();
    public Categoria findById(Integer id);
}
