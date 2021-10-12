import express from 'express';
import {
  getAllFrameworks,
  getFrameworkById,
  createFramework,
  updateFramework,
  deleteFramework,
} from '../controllers/framewroks';

import {
  getframeworkLanguages,
  languagesAdd,
  languagesRemove,
  getframeworkLanguageById,
} from '../controllers/languages';

import { login, register, loginRequired } from '../controllers/userControllers';

const router = express.Router();

router.route('/frameworks').get(getAllFrameworks).post(createFramework);

router
  .route('/frameworks/:frameworkId')
  .get(getFrameworkById)
  .put(updateFramework)
  .delete(deleteFramework);

router.route('/frameworks/:frameworkId/languages').get(getframeworkLanguages).post(languagesAdd);
router
  .route('/frameworks/:frameworkId/languages/:languageId')
  .get(getframeworkLanguageById)
  .put(languagesAdd)
  .delete(languagesRemove);

// registration route
router.route('/auth/register').post(register);

// login route
router.route('/login').post(login);

module.exports = router;
