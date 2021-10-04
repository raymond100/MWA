import express from 'express';
import {
  getAllFrameworks,
  getFrameworkById,
  updateFramework,
  deleteFramework,
} from '../controllers/framewroks';

const router = express.Router();

router.route('/frameworks').get(getAllFrameworks);

router
  .route('/frameworks/:frameworkId')
  .get(getFrameworkById)
  .put(updateFramework)
  .delete(deleteFramework);

module.exports = router;
