module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      resource_state: Number,
      athlete: Object,
      name: String,
      distance: Number,
      moving_time: Number,
      elapsed_time: Number,
      total_elevation_gain: Number,
      type: String,
      id: Number,
      external_id: String,
      upload_id: Number,
      start_date: String,
      start_date_local: String,
      timezone: String,
      utc_offset: Number,
      start_latlng: Array,
      end_latlng: Array,
      location_city: String,
      location_state: String,
      location_country: String,
      start_latitude: Number,
      start_longitude: Number,
      achievement_count: Number,
      kudos_count: Number,
      comment_count: Number,
      athlete_count: Number,
      photo_count: Number,
      map: Object,
      trainer: Boolean,
      commute: Boolean,
      manual: Boolean,
      private: Boolean,
      visibility: String,
      flagged: Boolean,
      gear_id: String,
      from_accepted_tag: Boolean,
      upload_id_str: String,
      average_speed: Number,
      max_speed: Number,
      has_heartrate: Boolean,
      average_heartrate: Number,
      max_heartrate: Number,
      heartrate_opt_out: Boolean,
      display_hide_heartrate_option: Boolean,
      pr_count: Number,
      total_photo_count: Number,
      has_kudoed: Boolean,
      workout_type: Number,
      average_watts: Number,
      kilojoules: Number,
      device_watts: Boolean,
      elev_high: Number,
      elev_low: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("rideActivates", schema);
  return Tutorial;
};
