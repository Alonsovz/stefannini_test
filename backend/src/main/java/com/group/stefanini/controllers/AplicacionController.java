package com.group.stefanini.controllers;


import com.group.stefanini.models.Aplicacion;
import com.group.stefanini.services.AplicacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST} )
public class AplicacionController {

    @Autowired
    AplicacionService _aplicacionService;

    @GetMapping("/aplicaciones")
    public List<Aplicacion> findAll(){
        List<Aplicacion> aplicaciones = this._aplicacionService.findAll();
        return aplicaciones;
    }

    @GetMapping("/addCalificacion/{id}/{calificacion}")
    public String addCalificacion(@PathVariable Integer id, @PathVariable Integer calificacion){
        String result = this._aplicacionService.addCalificacion(id,calificacion);

        return result;
    }

    @GetMapping("/aplicacion/{id}")
    public Aplicacion findById(@PathVariable Integer id){
        Aplicacion app = this._aplicacionService.findById(id);
        return app;
    }

}
