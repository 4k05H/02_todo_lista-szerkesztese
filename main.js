import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";
$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloELEM);

    //kész esemény
    $(window).on("kesz", (event)=>{
        let objPeldany = event.detail;
        //console.log(event.detail)
        //console.log("kesz esemény");
        objPeldany.setHatterszin("green")
        console.log(TODOLIST2)
        TODOLIST2[objPeldany.index].kesz = true;
    })
    //törlés esemény
    $(window).on("torles", (event)=>{
        let objPeldany = event.detail;
        //console.log(event.detail)
        //console.log("torles esemény");
        objPeldany.setHatterszin("red")
        console.log(TODOLIST2)
        szuloELEM.empty()
        new Megjelenit(TODOLIST2, szuloELEM)
        TODOLIST2.splice(objPeldany.index, 1);
        
        
    })

});
