Feature: Verificación de la concectividad entre página home y login. 

Scenario: Comprobar que un usuario es redirigido a la página de inicio de sesión cuando da click en login desde inicio. 
Given: I am on the home page
When: I click on the login button
Then: Now I am on the login page

Paso                        | Estado |
I am on the home page       | Éxito  |    
I click on the login button | Éxito  |
Now I am on the login page  | Éxito  |