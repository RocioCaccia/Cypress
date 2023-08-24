import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import navegate from "../../../support/Pages/navegate";
import busqueda from "../../../support/Pages/busqueda";

Given("El usuario ingresa a Google", () => {
    navegate.navegarAlSitio();
});

When("Realiza una Busqueda", () => {
    busqueda.buscarAut();     
    busqueda.enter(); 
    busqueda.verificarURL ();
});

When("Selecciona el primer link de wikipedia", () => {
    busqueda.seleccionaLink();
});

Then("Realiza un screenshot del año del primer proceso", () =>{
    busqueda.realizaScreen();   
});