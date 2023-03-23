const video = require("../../modals/Student tasks/Video");
var date = new Date();

//Get Videos
exports.GetVideo = async (req, res) => {
  let lang = req.query.lang;
  try {
    // get all data
    video.find().exec(function (err, users) {
      if (users) {
        // console.log(users);
        var dataSet = [];
        for (let index = 0; index < users.length; index++) {
          let element = users[index];
          let data = {
            header: element.type,
            lang: element.lang[lang],
            u_dt: element.u_dt,
            dt: element.dt,
          };
          dataSet.push(data);
        }

        return res.status(200).json(dataSet);
      } else if (err) {
        return res.status(400).send("no data found : ", err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

// Post Videos
exports.PostVideo = async (req, res) => {
    const reqData = req.body;
    try {
      const Video = new video({
        type: reqData.type,
        lang: {
          english: reqData.english,
          tamil: reqData.tamil,
        },
        title:reqData.title,
        thumnail:reqData.thumnail,
        catageroy:reqData.catageroy,
        lang_type: reqData.lang_type,
        task_id: reqData.task_id,
        faqs:reqData.faqs,
        url:reqData.url,
        token:reqData.token,
        key:reqData.key,
        assign_to:reqData.assign_to,
        duration:reqData.duration,
        relation:reqData.relation,
        size:reqData.size,
        reviewed_by:reqData.reviewed_by,
        approved_by:reqData.approved_by
      });
      const savePostVideo = await Video.save();
      res.status(200).json(savePostVideo);
    } catch (err) {
      if (err.message.split(" ")[0] == "A1000") {
        return res.status(400).json({ message: "already exist" });
      } else {
        return res.status(400).json({ message: err.message });
      }
    }
  };
//Update Videos
  exports.PutVideo = async (req, res) => {
    const reqData = req.body;
    const id = req.params.id;
  
    try {
      // get user by name
      const videoFound = await video.findOneAndUpdate(
        { _id: id },
        reqData,
        {
          new: true,
          upsert: true,
          rawResult: true,
        }
      );
      console.log(videoFound);
      if (!videoFound) return res.status(400).send("no data found");
      return res.status(200).json(videoFound);
    } catch (err) {
      console.log(err);
    }
  };

  // Getbyid Videos

  exports.GetbyidVideo = async (req, res) => {
  try {
    const videoFound = await video.findById(req.params.id);
    res.status(200).json(videoFound);
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
};