package com.group.stefanini.services;

import com.group.stefanini.dao.ValoracionDAO;
import com.group.stefanini.models.Valoracion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class  ValoracionServiceImpl implements ValoracionService {

    @Autowired
    ValoracionDAO _valoracionDAO;

    @Override
    public Valoracion save(Valoracion valoracion) {
        Valoracion _valoracion = this._valoracionDAO.save(valoracion);
        return _valoracion;
    }
}
