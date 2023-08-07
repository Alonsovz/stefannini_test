package com.group.stefanini.controllers;

import com.group.stefanini.models.Valoracion;
import com.group.stefanini.services.ValoracionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST} )
public class ValoracionController {

    @Autowired
    ValoracionService _valoracionService;

    @PostMapping("/valoracion")
    public Valoracion save(@RequestBody Valoracion valoracion){
        Valoracion _valoracion = this._valoracionService.save(valoracion);
        return _valoracion;
    }


}
