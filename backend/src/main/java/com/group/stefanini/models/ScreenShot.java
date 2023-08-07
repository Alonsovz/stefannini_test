package com.group.stefanini.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name="SCREENSHOT")
public class ScreenShot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String url;

    @ManyToOne
    @JoinColumn(name="aplicacion_id")
    @JsonBackReference
    Aplicacion aplicacion;


}
