import express from 'express';
import {
  getAllFrameworks,
  getFrameworkById,
  updateFramework,
  deleteFramework,
} from '../controllers/framewroks';

import {
  getframeworkLanguages,
  languagesAdd,
  languagesRemove,
  getframeworkLanguageById,
} from '../controllers/languages';

const router = express.Router();

router.route('/frameworks').get(getAllFrameworks);

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

module.exports = router;
