package com.group.stefanini.services;

import com.group.stefanini.dao.CategoriaDAO;
import com.group.stefanini.models.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaServiceImpl implements CategoriaService{

    @Autowired
    private CategoriaDAO _categoriaDAO;

    @Override
    public List<Categoria> findAll() {
        List<Categoria> categorias = new ArrayList<Categoria>();
        categorias = (List<Categoria>) this._categoriaDAO.findAll();

        return categorias;
    }

    @Override
    public Categoria findById(Integer id) {
        Categoria categoria = this._categoriaDAO.findCategoriaById(id);

        return categoria;
    }
}
