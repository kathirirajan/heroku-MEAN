import mongoose from "mongoose";

interface TodoI {
  title: string;
  description: string;
}

interface TodoDocument extends mongoose.Document {
  title: string;
  description: string;
}
// //Delete request
// Future deleteData(String id) async {
//   final Uri restAPIURL =
//       Uri.parse("https://todoflutternodejs.herokuapp.com/delete");

//   http.Response response = await httpClient.delete(restAPIURL,
//       headers: customHeaders, body: jsonEncode(id));

//   return response.body;
// }
const todoSchema = new mongoose.Schema({
  "resource_state": {
    "type": "Number"
  },
  "athlete": {
    "id": {
      "type": "Number"
    },
    "resource_state": {
      "type": "Number"
    }
  },
  "name": {
    "type": "String"
  },
  "distance": {
    "type": "Number"
  },
  "moving_time": {
    "type": "Number"
  },
  "elapsed_time": {
    "type": "Number"
  },
  "total_elevation_gain": {
    "type": "Number"
  },
  "type": {
    "type": "String"
  },
  "id": {
    "type": "Number"
  },
  "external_id": {
    "type": "String"
  },
  "upload_id": {
    "type": "Number"
  },
  "start_date": {
    "type": "Date"
  },
  "start_date_local": {
    "type": "Date"
  },
  "timezone": {
    "type": "String"
  },
  "utc_offset": {
    "type": "Number"
  },
  "start_latlng": {
    "type": [
      "Number"
    ]
  },
  "end_latlng": {
    "type": [
      "Number"
    ]
  },
  "location_city": {
    "type": "Mixed"
  },
  "location_state": {
    "type": "Mixed"
  },
  "location_country": {
    "type": "String"
  },
  "start_latitude": {
    "type": "Number"
  },
  "start_longitude": {
    "type": "Number"
  },
  "achievement_count": {
    "type": "Number"
  },
  "kudos_count": {
    "type": "Number"
  },
  "comment_count": {
    "type": "Number"
  },
  "athlete_count": {
    "type": "Number"
  },
  "photo_count": {
    "type": "Number"
  },
  "map": {
    "id": {
      "type": "String"
    },
    "summary_polyline": {
      "type": "String"
    },
    "resource_state": {
      "type": "Number"
    }
  },
  "trainer": {
    "type": "Boolean"
  },
  "commute": {
    "type": "Boolean"
  },
  "manual": {
    "type": "Boolean"
  },
  "private": {
    "type": "Boolean"
  },
  "visibility": {
    "type": "String"
  },
  "flagged": {
    "type": "Boolean"
  },
  "gear_id": {
    "type": "String"
  },
  "from_accepted_tag": {
    "type": "Boolean"
  },
  "upload_id_str": {
    "type": "String"
  },
  "average_speed": {
    "type": "Number"
  },
  "max_speed": {
    "type": "Number"
  },
  "has_heartrate": {
    "type": "Boolean"
  },
  "average_heartrate": {
    "type": "Number"
  },
  "max_heartrate": {
    "type": "Number"
  },
  "heartrate_opt_out": {
    "type": "Boolean"
  },
  "display_hide_heartrate_option": {
    "type": "Boolean"
  },
  "pr_count": {
    "type": "Number"
  },
  "total_photo_count": {
    "type": "Number"
  },
  "has_kudoed": {
    "type": "Boolean"
  },
  "workout_type": {
    "type": "Number"
  },
  "average_watts": {
    "type": "Number"
  },
  "kilojoules": {
    "type": "Number"
  },
  "device_watts": {
    "type": "Boolean"
  },
  "elev_high": {
    "type": "Number"
  },
  "elev_low": {
    "type": "Number"
  }
});

interface todoModelInterface extends mongoose.Model<TodoDocument> {
  set(x: TodoI): TodoDocument;
}

todoSchema.statics.set = (x: TodoI) => {
  return new Todo(x);
};

const Todo = mongoose.model<TodoDocument, todoModelInterface>(
  "Todo",
  todoSchema
);

Todo.set({
  "resource_state": 2,
  "athlete": {
    "id": 48209233,
    "resource_state": 1
  },
  "name": "Morning Ride ☁️",
  "distance": 123228,
  "moving_time": 19916,
  "elapsed_time": 29974,
  "total_elevation_gain": 669,
  "type": "Ride",
  "id": 6222756305,
  "external_id": "6012094169-1636241995-ride.gpx",
  "upload_id": 6613197268,
  "start_date": "2021-11-06T23:39:57Z",
  "start_date_local": "2021-11-07T05:09:57Z",
  "timezone": "(GMT+05:30) Asia/Kolkata",
  "utc_offset": 19800,
  "start_latlng": [
    11.64457,
    78.154157
  ],
  "end_latlng": [
    11.644655,
    78.154125
  ],
  "location_city": null,
  "location_state": null,
  "location_country": "India",
  "start_latitude": 11.64457,
  "start_longitude": 78.154125,
  "achievement_count": 20,
  "kudos_count": 293,
  "comment_count": 16,
  "athlete_count": 1,
  "photo_count": 0,
  "map": {
    "id": "a6222756305",
    "summary_polyline": "qiafAmn_|Ms@EVoAfRdGrC|ChAbDMnC}GrXo@hG~PmBxMuFpSqMnOjApd@fJyBhScHj`@gEja@sNpUeIfKs@jCkCzBkPfVoGpFmFnCeIjBeJl@wxBuImL{Bkn@m[oIkCu`@qAgH|@wGjCeJxIeYlb@sNzLoKrRcSte@eEbDe^tQqDnDaRl`@_i@bcAmLjZ{Qf`@{O~S{AbDeEfD{f@fq@gc@nc@wd@dk@oDjCoEpAqiAaDi_@hFeyAo[an@oSqVlAe~@zBy`@}Bkk@_Kua@mMehAuXwb@oC}j@?oBl@Tc@k@M_NBwx@eLcKoDqj@u_@qx@yq@}GoCmHu@y^|GkW|@qI~CsClCiOnTaJjJuYvSoK|OoKxLaShQyOdI}YbFmYvLmXnCkK_B_WqMgm@_V}E]m`@`BuJvEmFlIiDrLkDl_@uCfIaf@r[qHrCoS~C}O_AkVd@qIeEiHwJ}AOuEvA_CAqO}JuC?gB~@uDjIgF^sIaIiX_EeJqFu[qMkOeL_R_[gD{DeIkF_OiE}f@}]eXsY_SaYqFcDyNgFsKqKcPkJaYk\\uGkDoFeFiTya@wEsDsDoBc@NzFpAjEhD~Tlb@rN`K~Wh[xt@~c@vThZxRxSiCgD`A{Ay@dBtC`E|T~PbTnOdOnElInF`DrDdRj[vPbMjY|KvJtFzWxDzIxHjEm@bFsI|Eg@pOnJ|I}@pBVnIrKrDrBxDx@|To@lO`AzQuCnIoDnc@oZtBiCnA_EhDk`@xD{L`BeDlDqDrJcEj]iBtGZln@pVbVbMxIbBlZkC`YoLrYaF`PiIpSaRxKiMrK_PrVqPxJ{JdPqUnE{DdJkCpSe@nLsArQoEvIl@bHfCvy@xr@zi@`_@hKxDlx@bLp_AEvb@tChgArXhb@tMfh@fJb^`Cf}@aBbCmVqBlSTjAnTsA|FPpf@pP~zAd\\rGFz[qDhhA~ChIqDlb@kh@nf@eg@jc@}l@~EwJ~BiAdBqB`A_A|J_M`Rc`@|Mi]tg@}`AbSeb@hE{Dn]gQbF}DbRyd@hK}QtDwE`IcGbf@iu@jFcDbDyJrDcFi@{@wB\\zAUGhA{AAvAgGRrD|@p@p@]Bd@}ErHwCnI{GzDaAxCNn@tIwC`Go@za@pApIfCfl@pZtH`C|{BnJfJa@xIeBvGeDtFcFjQoWn@kCbC{AfImKfNqUtDk_@~G{a@tA_R_b@iJePoAmSrMmL|E_D~@gM~@?cCvIs^AuBkByDiCyBwPcGg@jAd@R",
    "resource_state": 2
  },
  "trainer": false,
  "commute": false,
  "manual": false,
  "private": false,
  "visibility": "everyone",
  "flagged": false,
  "gear_id": "b9365903",
  "from_accepted_tag": false,
  "upload_id_str": "6613197268",
  "average_speed": 6.187,
  "max_speed": 15.64,
  "has_heartrate": true,
  "average_heartrate": 133.8,
  "max_heartrate": 182,
  "heartrate_opt_out": false,
  "display_hide_heartrate_option": true,
  "pr_count": 9,
  "total_photo_count": 2,
  "has_kudoed": false,
  "workout_type": 10,
  "average_watts": 92.9,
  "kilojoules": 1849.4,
  "device_watts": false,
  "elev_high": 512,
  "elev_low": 273
});

export { Todo };
