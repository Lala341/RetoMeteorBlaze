import './main.html';
import Eventos from "../collections";

Template.evento.created = ()=>{
  console.log("Created the evento template");
}

Template.evento.rendered = ()=>{
  console.log("Rendered the evento template");
}


Template.evento.events({
  
  'submit form': (event) => {
    
    event.preventDefault();
    const target = event.target;
    const nombre = target.nombre.value;
    const descripcion = target.descripcion.value;
    const responsable = target.responsable.value;
    const fechainicio = target.fechainicio.value;
    const fechafin = target.fechafin.value;
    const ubicacion = target.ubicacion.value;
    let evento={ nombre:nombre,descripcion: descripcion,responsable: responsable,
    fechainicio:fechainicio,fechafin:fechafin ,ubicacion: ubicacion};
    console.log(evento);
    Eventos.insert(evento);
     
  }
});
Template.eventos.helpers({
    
    /*other helpers*/
    
    eventosCollection: () => {
        return Eventos.find({});
    },
    /*addEvent: (evento)=> {
      return Eventos.insert(evento);
   }*/

    
});