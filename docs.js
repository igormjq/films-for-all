/**
 * @apiDefine Authorization
 * * @apiHeader {String} Authorization Json Web Token. Deve seguir o padrão "Bearer {{ token }}"
 * @apiHeaderExample {json} Exemplo - Cabeçalho:
 * {
 *    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4"
 * }
 * 
 * @apiError (401 - UNAUTHORIZED) UnauthorizedError Usuário não autorizado a acessar o recurso solicitado.
 */

/**
 * @apiDefine err_validation
 * @apiError (400 - BAD REQUEST) ValidationError Erro de validação com descrição dos campos não adequados
* @apiError (400 - BAD REQUEST) ValidationError.errors[] Listagem de campos inválidos
 */

 /**
  * @apiDefine err_not_found
  * @apiError (404 - NOT FOUND) NotFoundError Recurso não encontrado.
  */

 /**
  * @apiDefine err_unprocessable
  * @apiError (412 - UNPROCESSABLE ENTITY) UnprocessableEntityError Não é possível realizar esta operação no momento.
  */

 /**
 * @api {post} /login Login
 * @apiGroup Auth
 * 
 * @apiParam {String} email E-mail do usuário a ser validado
 * @apiParam {String} password Senha do usuário
 * 
 * @apiSuccess {String} token JWT Token válido para futuras requisições
 * @apiSuccess {Object} user Detalhes do usuário autenticado
 * 
 * @apiSuccessExample {json} Exemplo - Resposta:
 *  HTTP/1.1 200 OK
 *  {
 *    "token": "...",
 *    "user": {
 *      "id": 1,
 *      "email": "tester@test.com",
 *      "name": "Tester"
 *     }
 *  }
 * 
 * @apiError UnauthorizedError Usuário não encontrado. Verifique suas credenciais 
 */

 /**
 * @api {post} /register Cadastro de usuário
 * @apiGroup Auth 
 * 
 * @apiParam {String} email E-mail do usuário
 * @apiParam {String} password Senha do usuário
 * @apiParam {String} name Nome do usuário para exibição
 * 
 * @apiSuccess {String} token JWT Token válido para futuras requisições
 * @apiSuccess {Object} user Detalhes do usuário criado e autenticado
 * 
 * @apiSuccessExample {json} Resposta:
 *  HTTP/1.1 200 OK
 *  {
 *    "token": "...",
 *    "user": {
 *      "id": 1,
 *      "email": "tester@test.com",
 *      "name": "Tester"
 *     }
 *  }
 * 
 * @apiError ValidationError Erro de validação com descrição dos campos não adequados
 */

 /**
 * @api {post} /logout Logout
 * @apiGroup Auth 
 * 
 * @apiUse Authorization
 */

/** Films */

/**
 * @api { get } /films Busca todos os filmes
 * @apiGroup Filmes
 * 
 * @apiDescription Retorna uma listagem completa de todos os filmes.
 * 
 * @apiSuccess (200 - OK) {Array} data Listagem completa de filmes
 * 
 * @apiSuccessExample {json} Exemplo - Resposta:
 *  HTTP/1.1 200 OK
 *  {
 *    "data": [
 *      {
 *        "id": 1,
 *        "title": "Goodfellas",
 *        "copies": 3,
 *        "rented": 1,  
 *        "available": 4,
 *        "director_id": 1,
 *        "director": {
 *          "id": 1,
 *          "name": "Martin Scorsese"
 *         }
 *      }
 *     ]
 *  }
 * 
 * @apiUse Authorization
 */

 /**
 * @api { get } /films/:id Busca por id
 * @apiGroup Filmes
 * 
 * @apiDescription Retorna um filme em função do id.
 * 
 * @apiSuccess (200 - OK) {Object} data Filme solicitado, se existente.
 * 
 * 
 * @apiUse Authorization
 * @apiUse err_not_found
 */

 /**
  * @api {get} /films/title/:title Busca por título
  * @apiGroup Filmes
  * 
  * @apiDescription Retorna um filme em função de um título. Caso não exista um filme exatamente com o nome requerido, será retornado o filme com nome mais próximo.
  * 
  * @apiSuccess (200 - OK) {Object} data Filme solicitado, se existente.
  * 
  * @apiUse Authorization
*/

 /**
  * @api {get} /films/available Busca por filmes disponíveis
  * @apiGroup Filmes
  * 
  * @apiDescription Retorna uma lista apenas de filmes disponíveis para locação.
  * 
  * @apiSuccess (200 - OK) {Array} data Listagem de filmes
  * 
  * @apiUse Authorization
*/

 /**
  * @api {post} /films/:filmId/inventory/add Cadastra novas cópias
  * @apiGroup Filmes
  * 
  * @apiDescription Cadastra novas cópias de um filme, em função de seu id, em estoque.
  * 
  * @apiParam {Number} amount Requerido. Quantidade a ser adicionada.
  * 
  * @apiSuccess (200 - OK) {Object} data Filme atualizado com novas cópias
  * 
  * @apiUse Authorization
  * @apiUse err_not_found
*/

 /**
 * @api { post } /films Cadastro de filme
 * @apiGroup Filmes
 * 
 * @apiDescription Cadastra um novo filme.
 * 
 * @apiParam {String} title Requerido. Título do filme
 * @apiParam {String} director_id Opcional. ID do diretor do filme. Não deve coexistir com o campo 'director'
 * @apiParam {String} director Opcional. Cria um novo diretor e associa ao filme. Não deve coexistir com o campo 'director_id'
 * @apiParam {String} director.name Requerido. Nome do diretor a ser criado
 * 
 * @apiParamExample {json} Exemplo - Cadastro com referência a um diretor existente
 * {
 *  "title": "The Godfather",
 *   "director_id": 1
 * }
 * @apiParamExample {json} Exemplo - Cadastro com criação de um diretor
 * {
 *  "title": "The Godfather",
 *   "director": {
 *      "name": "Francis Ford Coppola"
 *    }
 * }
 * 
 * @apiSuccess (201) {Object} data Filme criado
 * 
 * @apiUse Authorization
 * @apiUse err_validation
 */

  /**
 * @api { put } /films/:id Edição de filme
 * @apiGroup Filmes
 * 
 * @apiDescription Edita um filme em função do id.
 * 
 * @apiParam {String} title Opcional. Novo título do filme
 * @apiParam {String} director_id Opcional. Novo ID do diretor do filme.
 * 
 * @apiParamExample {json} Exemplo - Edição de filme de id 2
 * // PUT films/2
 * {
 *  "title": "The Curious Case of Benjamin Button",
 *   "director_id": 2
 * }
 * 
 * @apiSuccess (201 - CREATED) {Object} data Filme editado
 * 
 * @apiSuccessExample {json} Exemplo - Resposta:
 *  HTTP/1.1 200 OK
 *  {
 *    "data": {
 *      {
 *        "id": 2,
 *        "title": "The Curious Case of Benjamin Button",
 *        "copies": 5,
 *        "rented": 2,  
 *        "available": 3,
 *        "director_id": 2,
 *        "director": {
 *          "id": 2,
 *          "name": "David Fincher"
 *         }
 *      }
 *    }
 *  }
 * 
 * @apiUse Authorization
 * @apiUse err_validation
 * @apiUse err_not_found
 */

/**
* @api {delete} /films/:id Exclusão de filme
* @apiGroup Filmes
* 
* @apiDescription Remove um filme em função do id.
* 
* @apiSuccess (204 - NO CONTENT) - No content
* 
* @apiUse Authorization
* @apiUse err_not_found
*/

/**
 * @api {get} /rentals Busca locações
 * @apiGroup Aluguel
 * 
 * @apiDescription Lista as locações ainda não devolvidas
 * 
 * @apiSuccess (200 - OK) {Array} data Listagem das locações
 * 
 * @apiSuccessExample {json} Exemplo - Resposta:
 *  HTTP/1.1 200 OK
 *  {
*    "data": [
*        {
*            "id": 1,
*            "rental_date": "2019-08-26",
*            "return_date": null,
*            "deletedAt": null,
*            "customer_id": 2,
*            "film_id": 1,
*            "customer": {
*                "id": 2,
*                "name": "Films Lover",
*                "email": "films_lover@gmail.com"
*            },
*            "film": {
*                "available": 0,
*                "id": 1,
*                "title": "Taxi Driver",
*                "copies": 3,
*                "rented": 3,
*                "director_id": 2,
*                "director": {
*                    "id": 2,
*                    "name": "Steven Spielberg"
*              }
*           }
*        }
*    ]
*}
 * 
 * @apiUse Authorization
 */

/**
 * @api {post} /rentals/rent/:filmId Locação
 * @apiGroup Aluguel
 * 
 * @apiDescription Solicita locação de um filme em função de seu id
 * 
 * @apiSuccess (201 - CREATED) {Object} data Detalhes da locação
 * 
 * @apiUse Authorization
 * @apiUse err_not_found
 * @apiUse err_unprocessable
 * 
 * @apiError (412 - UNPROCESSABLE ENTITY) UnprocessableEntityError.message Não há cópias disponíveis deste filme em estoque
 */

/**
 * @api {post} /rentals/:id/return Devolução de locação
 * @apiGroup Aluguel
 * 
 * @apiDescription Solicita procedimento de devolução de uma locação
 * 
 * @apiSuccess (200 - OK) {Object} data Detalhes da locação
 * 
 * @apiUse Authorization
 * @apiUse err_not_found
 * @apiUse err_unprocessable
 */