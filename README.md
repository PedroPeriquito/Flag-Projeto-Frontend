# Front-end Project

Este é um site de várias páginas, elaborado como um projeto final de formação. Este site  permite aos utilizadores explorar e reservar viagens com base em habitats naturais. Apesar de o design não ser ideal para vender viagens, o site foi criado com a intenção de mostrar as minhas habilidades.

## Referência

Apesar de ser um projeto único e feito do zero por mim, utilizei alguns sites como fonte de inspiração, como:
 - [Airbnb](https://www.airbnb.pt/)
 - [Booking](https://www.booking.com/)


## Dependencias

mapbox/mapbox-gl-draw: ^1.4.3,
testing-library/jest-dom: ^5.17.0,
testing-library/react: ^13.4.0,
testing-library/user-event: ^13.5.0,
types/mapbox-gl: ^2.7.15,
axios: ^1.5.1,
date: ^2.0.3,
date-fns: ^2.30.0,
dotenv: ^10.0.0,
fns: ^1.0.0,
formik: ^2.4.5,
json-server: ^0.17.4,
mapbox-gl: ^2.15.0,
path: ^0.12.7,
react: ^18.2.0,
react-date-range: ^1.4.0,
react-dom: ^18.2.0,
react-map-gl: ^7.1.6,
react-router-dom: ^6.16.0,
react-scripts: 5.0.1,
react-slick: ^0.29.0,
react-swipeable: ^7.0.1,
slick-carousel: ^1.8.1,
styled-components: ^6.1.0,
swiper: ^10.3.1,
web-vitals: ^2.1.4,
yup: ^1.3.1

## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm start
  npm run server
```


## Autores

- [@Pedro Periquito](https://github.com/PedroPeriquito)


## Documentação da API

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Chave da API

'pk.eyJ1IjoieGdhbnQiLCJhIjoiY2xub2lqZ2V2MGh0ZDJqb2RtbDZnaXZpdyJ9.FDQCm43922aW6Lu8dYU8Yw'

#### API utilizada

Neste projeto foi utilizada a mapbox que é uma API freemium, no pacote free permite a chamada da API 50 000 vezes por mes.


## Aprendizados

Este projeto foi excelente para praticar os conhecimentos adquiridos durante a formação. Através das dificuldades encontradas durante a realização do projeto, pude identificar os meus pontos fracos e adquirir os conhecimentos necessários para os ultrapassar.

## Funcionalidades

- Toggle de temas entre os biomas disponiveis nas "destinations"
- Acesso a API de maps com markers para as localizações das viagens
- Sistema de criação, update e delete de posts
- Multipage
- Formulario utilizando formik
- Swiper de imagens
- Slider de imagens
- Navbar e footer com links
- Responsivo


## Melhorias

A principal melhoria para o projeto é nos componentes da pagina "destinations", o condigo encontra-se com .map dentro de .map que torna o codigo dificil de ler e complicado de alterar, a melhoria seria limpar o codigo e colocar as reviews num .json file.
Gostaria tambem de melhorar a parte responsive para ficar mais coerente ao longo de todo o site.


