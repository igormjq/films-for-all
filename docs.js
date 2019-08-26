/**
 * @apiDefine Authorization
 * * @apiHeader {String} Authorization Bearer {{ token }}
 * @apiHeaderExample {json} Header-Example:
 * {
 *    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4"
 * }
 * 
 * @apiError UnauthorizedError Não autorizado
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
 * @api {post} /register Cadastro
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
 * @api { get } /films
 * @apiGroup Filmes
 * 
 * @apiSuccess (201 Created) {Object} data Listagem completa de filmes
 */

 /**
 * @api { post } /films
 * @apiGroup Filmes
 * 
 * @apiSuccess
 */