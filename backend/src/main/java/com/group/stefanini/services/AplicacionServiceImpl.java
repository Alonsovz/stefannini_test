package com.group.stefanini.services;


import com.group.stefanini.dao.AplicacionDAO;
import com.group.stefanini.models.Aplicacion;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AplicacionServiceImpl implements AplicacionService {


    @Autowired
    AplicacionDAO _aplicacionDAO;

    @PersistenceContext
    private EntityManager em;


    @Override
    public List<Aplicacion> findAll() {

        List<Aplicacion> aplicaciones = new ArrayList<Aplicacion>();
        aplicaciones = (List<Aplicacion>) this._aplicacionDAO.findAll();
        return aplicaciones;
    }

    @Override
    public List<Aplicacion> findByCategoria(Integer categoria_id) {
        return null;
    }

    @Override
    public Aplicacion findById(Integer aplicacion_id) {

        Aplicacion app = this._aplicacionDAO.findAplicacionById(aplicacion_id);
        return app;
    }

    @Override
    @Transactional
    public String addCalificacion(Integer id, Integer calificacion) {

        Query q = em.createQuery("UPDATE Aplicacion ap SET ap.calificacionAplicacion = ?1 WHERE ap.id = ?2 ");
        q.setParameter(1, calificacion);
        q.setParameter(2, id);
        Integer result = q.executeUpdate();

        if(result==0){
            return "ERROR TO UPDATE";
        }

        return "UPDATE SUCCESS";
    }
}
