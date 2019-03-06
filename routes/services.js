// 5 (Yulia.H)
const express = require('express');
const fs = require('fs');
const router = express.Router();

const validateServices = require ('../validation/validateServices')

router.post('/createNewService', function(req,res){
    try{
        validateServices(req.body)
        const servicesJSON = JSON.parse(fs.readFileSync('./db/services.json','utf-8'));
        let services = servicesJSON.services;
        let newService = {};
        newService.id = Math.random();
        newService.userId = req.body.id;
        newService.title = req.body.title;
        newService.description = req.body.description;
        newService.time = req.body.time;
        services.push(newService);

        servicesJSON.services = services;
        fs.writeFileSync('./db/services.json',JSON.stringify(servicesJSON))
        return res.json(servicesJSON.services)
    } catch(err){
        return res.status(err.status).json(err)
    }
})

router.get('/allServices', function(req,res){
  try{
    const servicesJSON = JSON.parse(fs.readFileSync('./db/services.json','utf-8'));
      return res.json(servicesJSON)
  } catch(err){
    return res.status(err.status).json(err)
  }  
})

router.delete('/:id',function (req,res) {
  try{
    const servicesJSON = JSON.parse(fs.readFileSync('./db/services.json', 'utf-8'));
    let services =servicesJSON.services;
    let id = req.params.id.toString();

    servicesJSON.services=services.filter(s=>s.id.toString() !== id);
    fs.writeFileSync('./db/services.json', JSON.stringify(servicesJSON));
    return res.json(servicesJSON.services)
  } catch(err){
    return res.status(err.status).json(err)
  }
  })

  router.put('/', function(req,res){
    const servicesJSON =JSON.parse(fs.readFileSync('./db/services.json','utf-8'));
    let services = servicesJSON.services;
    const id =req.body.id;

    services = services.filter(s=>s.id.toString() === id);
    services[0].title = req.body.title;
    services[0].description = req.body.description;
    services[0].time = req.body.time;
    validateServices(req.body)
    fs.writeFileSync('./db/services.json', JSON.stringify(servicesJSON));
    return res.json(services)
  })



module.exports = router;