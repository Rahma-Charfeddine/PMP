const { Create_indicator,
    Get_all_indicators,
    Get_all_indicators_by_id_element,
    Delete_indicator_by_id,
    Update_indicator_by_id,
    Get_indicator_by_id } = require('../services/indicator.service');

const router = require('express').Router();


router.post("/", Create_indicator);
router.get("/", Get_all_indicators);
router.get("/:id", Get_indicator_by_id);
router.get("/getallbyidelement/:idelement", Get_all_indicators_by_id_element);
router.delete("/:id", Delete_indicator_by_id);
router.put("/:id", Update_indicator_by_id);



module.exports = router;

/* router.post("/"): This route is for creating a new indicator.
 It calls the Create_indicator function to handle the POST request

 router.post("/"): This route is for creating a new indicator.
  It calls the Create_indicator function to handle the POST request

  router.get("/:id"): This route is for retrieving an indicator by its ID. 
  It calls the Get_indicator_by_id function and passes the ID as a request parameter.

  router.get("/getallbyidelement/:idelement"): This route is for retrieving all indicators associated with a specific element.
   It calls the Get_all_indicators_by_id_element function and passes the element ID as a request parameter.

   router.delete("/:id"): This route is for deleting an indicator by its ID.
    It calls the Delete_indicator_by_id function and passes the ID as a request parameter.

  router.put("/:id"): This route is for updating an indicator by its ID.
  It calls the Update_indicator_by_id function and passes the ID as a request parameter.

  => his code sets up an Express router that handles various routes for managing indicators.
   Each route is associated with a specific function from the indicator.service module that handles the corresponding HTTP request
  . The router object is then exported for use in other parts of the application.*/