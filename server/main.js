import { Meteor } from 'meteor/meteor';
import Eventos from "../collections";

Meteor.startup(() => {
    if (Eventos.find().count() === 0) {
      console.log("There are no eventos");
      let dummyEventos = [
        { nombre: "Juan Rodríguez", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
   responsable: "Juan Rodríguez", fechainicio: "22-12-2009", fechafin: "12-10-2020",ubicacion: "Calle  1 f bis N. 67-8" },
        { nombre: "Camilo Salinas", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
   responsable: "Juan Rodríguez", fechainicio: "22-12-2017", fechafin: "12-08-2020",ubicacion: "Calle  1 f bis N. 67-8"  },
        { nombre: "Laura Forero", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
   responsable: "Juan Rodríguez", fechainicio: "22-12-2019", fechafin: "12-03-2020",ubicacion: "Calle  1 f bis N. 67-8"  },
        { nombre: "Juan Rodríguez", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
   responsable: "Juan Rodríguez", fechainicio: "22-12-2019", fechafin: "12-10-2020",ubicacion: "Calle  1 f bis N. 67-8"  },
        ];
  
      dummyEventos.forEach(e => {
        Eventos.insert(e);
      })
    }
  });