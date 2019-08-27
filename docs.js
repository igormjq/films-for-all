/**
 * @apiDefine Authorization
 * * @apiHeader {String} Authorization Bearer {{ token }}
 * @apiHeaderExample {json} Exemplo - Cabeçalho:
 * {
 *    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4"
 * }
 * 
 * @apiError UnauthorizedError Não autorizado
 */

/**
 * @apiDefine err_validation
 * @apiError ValidationError Erro de validação com descrição dos campos não adequados
 */

 /** Auth */

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
 * @apiSuccessExample {json} Success-Response:
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
 * @apiSuccessExample {json} Success-Response:
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
 * @api { get } /films Listagem de filmes
 * @apiGroup Filmes
 * 
 * @apiSuccess (200) {Array} data[] Listagem completa de filmes
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
 * @api { post } /films Cadastro de filme
 * @apiGroup Filmes
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
 * @apiUse Authorization
 * @apiUse err_validation
 */

  /**
 * @api { put } /films/:filmId Edição de filme
 * @apiGroup Filmes
 * 
 * @apiParam {String} title Opcional. Novo título do filme
 * @apiParam {String} director_id Opcional. Novo ID do diretor do filme.
 * 
 * @apiParamExample {json} Exemplo - Edição de filme de id 2
 * // PUT films/1
 * {
 *  "title": "The Curious Case of Benjamin Button",
 *   "director_id": 2
 * }
 * 
 * @apiSuccess (200) {Array} data[] Filme editado
 * 
 * @apiSuccessExample {json} Exemplo - Resposta:
 *  HTTP/1.1 200 OK
 *  {
 *    "data": [
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
 *     ]
 *  }
 * 
 * @apiUse Authorization
 * @apiUse err_validation
 */