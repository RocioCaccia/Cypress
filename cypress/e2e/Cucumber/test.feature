Feature: Busqueda en Google

    Scenario: Buscar la palabra automatizacion
        Given El usuario ingresa a Google
        When Realiza una Busqueda
        And Selecciona el primer link de wikipedia
        Then Realiza un screenshot del año del primer proceso
    