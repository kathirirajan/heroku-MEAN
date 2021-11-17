const db = require("../models");
const Tutorial = db.tutorials;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.athlete) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Create a Tutorial
  const tutorial = new Tutorial({
    resource_state: req.body.resource_state,
    athlete: req.body.athlete,
    name: req.body.name,
    distance: req.body.distance,
    moving_time: req.body.moving_time,
    elapsed_time: req.body.elapsed_time,
    total_elevation_gain: req.body.total_elevation_gain,
    type: req.body.type,
    id: req.body.id,
    external_id: req.body.external_id,
    upload_id: req.body.upload_id,
    start_date: req.body.start_date,
    start_date_local: req.body.start_date_local,
    timezone: req.body.timezone,
    utc_offset: req.body.utc_offset,
    start_latlng: req.body.start_latlng,
    end_latlng: req.body.end_latlng,
    location_city: req.body.location_city,
    location_state: req.body.location_state,
    location_country: req.body.location_country,
    start_latitude: req.body.start_latitude,
    start_longitude: req.body.start_longitude,
    achievement_count: req.body.achievement_count,
    kudos_count: req.body.kudos_count,
    comment_count: req.body.comment_count,
    athlete_count: req.body.athlete_count,
    photo_count: req.body.photo_count,
    map: req.body.map,
    trainer: req.body.trainer,
    commute: req.body.commute,
    manual: req.body.manual,
    private: req.body.private,
    visibility: req.body.visibility,
    flagged: req.body.flagged,
    gear_id: req.body.gear_id,
    from_accepted_tag: req.body.from_accepted_tag,
    upload_id_str: req.body.upload_id_str,
    average_speed: req.body.average_speed,
    max_speed: req.body.max_speed,
    has_heartrate: req.body.has_heartrate,
    average_heartrate: req.body.average_heartrate,
    max_heartrate: req.body.max_heartrate,
    heartrate_opt_out: req.body.heartrate_opt_out,
    display_hide_heartrate_option: req.body.display_hide_heartrate_option,
    pr_count: req.body.pr_count,
    total_photo_count: req.body.total_photo_count,
    has_kudoed: req.body.has_kudoed,
    workout_type: req.body.workout_type,
    average_watts: req.body.average_watts,
    kilojoules: req.body.kilojoules,
    device_watts: req.body.device_watts,
    elev_high: req.body.elev_high,
    elev_low: req.body.elev_low
  });

  // Save Tutorial in the database
  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Tutorial.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
