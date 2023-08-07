package com.group.stefanini.controllers;

import com.group.stefanini.models.Categoria;
import com.group.stefanini.services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST} )
public class CategoriaController {

    @Autowired
    private CategoriaService _categoriaService;

    @GetMapping("/categorias")
    public List<Categoria> findAll(){
        List<Categoria> categorias = this._categoriaService.findAll();
        return categorias;
    }

    @GetMapping("/categorias/{id}")
    public Categoria findCategoriaById(@PathVariable Integer id){
        Categoria categoria = this._categoriaService.findById(id);

        return categoria;
    }


}
