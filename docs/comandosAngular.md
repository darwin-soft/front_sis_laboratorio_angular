## componentes

ng g c inicio

ng g c auth/components/login
ng g c auth/components/registro
ng g c admin/components/persona

## modulos

ng g m auth --routing
ng g m admin --routing
ng g m core

## Servicios

ng g s core/services/login
ng g s core/services/persona

## guards

ng g g guards/auth

## Interceptor

ng g interceptor interceptor
