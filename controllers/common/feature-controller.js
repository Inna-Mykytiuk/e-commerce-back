const Feature = require("../../models/Feature");

const addFeatureImage = async (req, res) => {
  try {
    const { image, title } = req.body;

    console.log(image, title, "data");

    const feature = new Feature({
      image,
      title,
    });

    await feature.save();

    res.status(201).json({
      success: true,
      data: feature,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getFeatureImages = async (req, res) => {
  try {
    const features = await Feature.find({});

    res.status(200).json({
      success: true,
      data: features,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

module.exports = { addFeatureImage, getFeatureImages };