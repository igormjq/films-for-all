import { Router } from 'express'
import AuthMiddleware from '../middlewares/AuthMiddleware'
import AuthController from '../controllers/AuthController'
import Validate from '../middlewares/ValidationMiddlware'
import { errorHandler } from '../handlers/errorHandler'
import { AuthValidator } from '../utils/validators'
/**
 * Routes
 */
import films from './film';
import rentals from './rental';

const router = Router();

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
router.post('/login', errorHandler(AuthController.signIn));

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
router.post('/register', Validate(AuthValidator.register), errorHandler(AuthController.register));

/**
 * Protected routes
*/
router.use(AuthMiddleware);

/**
 * @api {post} /logout Logout
 * @apiGroup Auth 
 * 
 * @apiUse Authorization
 */

router.post('/logout', errorHandler(AuthController.signOut));
router.use('/films', films);
router.use('/rentals', rentals);

router.get('/', (req, res) => res.json({ 
  app: 'Films 4All API',
  version: '1.0.0'
}));

export default router;