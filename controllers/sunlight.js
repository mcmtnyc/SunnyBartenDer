
import Sunlight from "../models/sunlight.js";

export const getSunlights = async (req, res) => {
  try {
    const sunlights = await Sunlight.find();
    res.json(sunlights)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};
export const getSunlightById = async (req, res) => {
  try {
    const { id } = req.params
    const sunlight = await Sunlight.findById(id);
    if (sunlight) {
      return res.json(sunlight)
    }
    res.status(400).json({ message: "User not found!" })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};
export const getSunlightByCity = async (req, res) => {
  try {
    //const { city } = req.params
    const sunlight = await Sunlight.findOne({
      City: req.params.cityName
    }).exec();
    if (sunlight) {
      return res.json(sunlight["Year"])
    }
    res.status(400).json({ message: "User not found!" })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};
export const createSunlight = async (req, res) => {
  try {

    const sunlight = new Sunlight(req.body);
    await sunlight.save();
    res.status(201).json(sunlight)

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};
export const updateSunlight = async (req, res) => {

  const { id } = req.params;
  const sunlight = await Sunlight.findByIdAndUpdate(id, req.body);

  res.status(200).json(sunlight)


};
export const deleteSunlight = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Sunlight.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("sunlight deleted!")
    }
    throw new Error("sunlight not found")
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }




};