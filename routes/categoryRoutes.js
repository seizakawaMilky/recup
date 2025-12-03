/**
 * @file Rotas de Autenticação (Auth)
 * @description Define as rotas para registro e login de usuários.
 *
 * Requer:
 * - Express
 * - AuthController
 * - Middleware de validação (validate) com schemas (userSchema, loginSchema)
 */

const express = require('express');
// Define o roteador do Express
const router = express.Router();
// Importa o controlador de autenticação
const AuthController = require('../controllers/authController');
// Importa o middleware de validação e os schemas
const { validate, userSchema, loginSchema } = require('../middleware/validators');

/**
 * Rota POST /auth/register
 * Registra um novo usuário após validação dos dados.
 * Middleware: validate(userSchema)
 */
router.post('/register', validate(userSchema), AuthController.register);

/**
 * Rota POST /auth/login
 * Autentica um usuário existente após validação das credenciais.
 * Middleware: validate(loginSchema)
 */
router.post('/login', validate(loginSchema), AuthController.login);

// Exporta o roteador para ser usado no arquivo principal do app (ex: server.js)
module.exports = router;